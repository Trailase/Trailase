import { AmbientVideo } from '@/components/custom/ambient-video';

export function DemoBackground({
  src,
  framing = 'center',
}: {
  src: string;
  framing?: 'center' | 'condition' | 'photos' | 'notes' | 'signature' | 'review';
}) {
  return (
    <div className={`demo-media demo-media-${framing}`}>
      <AmbientVideo key={src} src={src} className="block aspect-video w-full object-contain" />
    </div>
  );
}
