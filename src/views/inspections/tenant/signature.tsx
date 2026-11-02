'use client';

import { type PointerEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/components/i18n/language-provider';
import { Button } from '@/components/ui/button';

type Point = { x: number; y: number };
type Stroke = Point[];

export function Signature({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const activeStroke = useRef<Stroke>([]);
  const [strokes, setStrokes] = useState<Stroke[]>([]);

  const redraw = useCallback((allStrokes: Stroke[]) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;
    context.clearRect(0, 0, canvas.width, canvas.height);
    configure(context);
    for (const stroke of allStrokes) {
      const first = stroke[0];
      if (!first) continue;
      context.beginPath();
      context.moveTo(first.x, first.y);
      for (const point of stroke.slice(1)) context.lineTo(point.x, point.y);
      context.stroke();
    }
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    canvasRef.current.width = 800;
    canvasRef.current.height = 280;
    redraw(strokes);
  }, [redraw, strokes]);

  // Without this the browser reads a quick stroke as a flick and swallows the next tap,
  // such as the one on the consent checkbox. Pointer events still fire for the drawing.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const claim = (event: TouchEvent) => event.preventDefault();
    canvas.addEventListener('touchstart', claim, { passive: false });
    canvas.addEventListener('touchmove', claim, { passive: false });
    return () => {
      canvas.removeEventListener('touchstart', claim);
      canvas.removeEventListener('touchmove', claim);
    };
  }, []);

  function point(event: PointerEvent<HTMLCanvasElement>): Point {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * canvas.width,
      y: ((event.clientY - rect.top) / rect.height) * canvas.height,
    };
  }

  function draw(next: Point) {
    const context = canvasRef.current?.getContext('2d');
    const previous = activeStroke.current.at(-1);
    if (!context || !previous) return;
    configure(context);
    context.beginPath();
    context.moveTo(previous.x, previous.y);
    context.lineTo(next.x, next.y);
    context.stroke();
    activeStroke.current.push(next);
  }

  function start(event: PointerEvent<HTMLCanvasElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    drawing.current = true;
    activeStroke.current = [point(event)];
  }

  function stop() {
    if (!drawing.current) return;
    drawing.current = false;
    if (activeStroke.current.length > 0) {
      const next = [...strokes, activeStroke.current];
      setStrokes(next);
      if (canvasRef.current) onChange(canvasRef.current.toDataURL('image/png'));
    }
    activeStroke.current = [];
  }

  function undo() {
    const next = strokes.slice(0, -1);
    setStrokes(next);
    redraw(next);
    onChange(next.length > 0 && canvasRef.current ? canvasRef.current.toDataURL('image/png') : '');
  }

  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-border bg-background shadow-inner">
        <canvas
          ref={canvasRef}
          aria-label={t('inspection.signatureTitle')}
          className="block h-auto w-full touch-none"
          onPointerDown={start}
          onPointerMove={(event) => drawing.current && draw(point(event))}
          onPointerUp={stop}
          onPointerCancel={stop}
        />
      </div>
      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">{t('inspection.draw')}</p>
        <div className="flex gap-1">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={undo}
            disabled={strokes.length === 0}
          >
            {t('inspection.undo')}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => {
              setStrokes([]);
              onChange('');
            }}
            disabled={!value}
          >
            {t('inspection.clear')}
          </Button>
        </div>
      </div>
    </div>
  );
}

function configure(context: CanvasRenderingContext2D) {
  context.strokeStyle = getComputedStyle(document.documentElement)
    .getPropertyValue('--foreground')
    .trim();
  context.lineWidth = 3;
  context.lineCap = 'round';
  context.lineJoin = 'round';
}
