#!/usr/bin/env bash
set -euo pipefail

root_dir="$(cd "$(dirname "$0")/.." && pwd)"
source_dir="${TMPDIR:-/tmp}/trailase-video-sources"
output_dir="$root_dir/public/videos/candidates"
manifest="$output_dir/sources.tsv"

mkdir -p "$source_dir" "$output_dir"

if [[ ! -f "$manifest" ]]; then
  echo "Missing source manifest: $manifest" >&2
  exit 1
fi

duplicate_ids="$(awk -F '\t' '!/^#/ && NF >= 3 { count[$3]++ } END { for (id in count) if (count[id] > 1) print id }' "$manifest")"
if [[ -n "$duplicate_ids" ]]; then
  echo "Each candidate must use a unique source. Duplicate IDs:" >&2
  echo "$duplicate_ids" >&2
  exit 1
fi

candidate_count="$(awk -F '\t' '!/^#/ && NF >= 3 { count++ } END { print count + 0 }' "$manifest")"
if [[ "$candidate_count" != "150" ]]; then
  echo "Expected 150 candidate rows, found $candidate_count" >&2
  exit 1
fi

download_source() {
  local id="$1"
  local target="$source_dir/$id.mp4"
  if [[ ! -s "$target" ]]; then
    echo "Downloading Pexels video $id"
    curl -L --fail --retry 3 --retry-delay 2 \
      "https://www.pexels.com/download/video/$id/" \
      -o "$target"
  fi
}

export source_dir
export -f download_source
awk -F '\t' '!/^#/ && NF >= 3 { print $3 }' "$manifest" | xargs -n 1 -P 4 bash -c 'download_source "$1"' _

render_candidate() {
  local group="$1"
  local variant="$2"
  local id="$3"
  local variant_number=$((10#$variant))
  local focus_step=$(((variant_number * 17) % 60 + 20))
  local focus_x
  focus_x="$(awk -v step="$focus_step" 'BEGIN { printf "%.2f", step / 100 }')"
  local start_time=$((((variant_number - 1) % 3) * 2))
  local target_dir="$output_dir/$group"
  local target="$target_dir/$variant.mp4"
  local expected_comment="Pexels source $id"
  local current_comment=""

  mkdir -p "$target_dir"
  if [[ -s "$target" ]]; then
    current_comment="$(ffprobe -v error -show_entries format_tags=comment -of default=nw=1:nk=1 "$target" 2>/dev/null || true)"
  fi
  if [[ "$current_comment" == "$expected_comment" ]]; then
    echo "Keeping verified $group/$variant from $id"
    return
  fi

  echo "Rendering $group/$variant from unique source $id"
  ffmpeg -nostdin -hide_banner -loglevel error -y -stream_loop -1 -ss "$start_time" -i "$source_dir/$id.mp4" \
    -t 10 \
    -vf "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720:(in_w-out_w)*$focus_x:(in_h-out_h)/2,setsar=1,fps=24,eq=saturation=0.94:contrast=1.03" \
    -an -c:v libx264 -preset veryfast -crf 30 -pix_fmt yuv420p -movflags +faststart \
    -metadata comment="$expected_comment" "$target"
}

while IFS=$'\t' read -r group variant id _concept; do
  [[ -z "$group" || "$group" == \#* ]] && continue
  render_candidate "$group" "$variant" "$id"
done < "$manifest"

echo "Created 150 unique-source Trailase video candidates in $output_dir"
