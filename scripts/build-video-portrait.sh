#!/usr/bin/env bash
set -euo pipefail

# Builds 720x1280 portrait crops of the same Pexels sources used by
# build-video-candidates.sh, for background videos that render full-bleed
# with object-cover. A 1280x720 landscape clip cropped to fill a tall mobile
# viewport only shows a ~28% center slice of its width; a dedicated portrait
# crop keeps the framing recognizable instead. Renders to video-drafts/, same
# as build-video-candidates.sh — see public/videos/README.md to promote one.
#
# Usage:
#   ./scripts/build-video-portrait.sh              # every group in the manifest
#   ./scripts/build-video-portrait.sh home-hero home-operators   # just these groups

root_dir="$(cd "$(dirname "$0")/.." && pwd)"
source_dir="${TMPDIR:-/tmp}/trailase-video-sources"
output_dir="$root_dir/video-drafts/candidates-portrait"
manifest="$root_dir/public/videos/sources.tsv"

mkdir -p "$source_dir" "$output_dir"

if [[ ! -f "$manifest" ]]; then
  echo "Missing source manifest: $manifest" >&2
  exit 1
fi

group_filter="$*"

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

render_portrait() {
  local group="$1"
  local variant="$2"
  local id="$3"
  local target_dir="$output_dir/$group"
  local target="$target_dir/$variant.mp4"
  local expected_comment="Pexels source $id (portrait)"
  local current_comment=""

  mkdir -p "$target_dir"
  if [[ -s "$target" ]]; then
    current_comment="$(ffprobe -v error -show_entries format_tags=comment -of default=nw=1:nk=1 "$target" 2>/dev/null || true)"
  fi
  if [[ "$current_comment" == "$expected_comment" ]]; then
    echo "Keeping verified portrait $group/$variant from $id"
    return
  fi

  download_source "$id"
  echo "Rendering portrait $group/$variant from source $id"
  ffmpeg -nostdin -hide_banner -loglevel error -y -stream_loop -1 -ss 0 -i "$source_dir/$id.mp4" \
    -t 10 \
    -vf "scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280,setsar=1,fps=24,eq=saturation=0.94:contrast=1.03" \
    -an -c:v libx264 -preset veryfast -crf 30 -pix_fmt yuv420p -movflags +faststart \
    -metadata comment="$expected_comment" "$target"
}

while IFS=$'\t' read -r group variant id _concept; do
  [[ -z "$group" || "$group" == \#* ]] && continue
  if [[ -n "$group_filter" ]] && [[ ! " $group_filter " == *" $group "* ]]; then
    continue
  fi
  render_portrait "$group" "$variant" "$id"
done < "$manifest"

echo "Done. Portrait crops are in $output_dir"
