import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { translate } from '@/lib/i18n';
import { resolveRequestLocale } from '@/lib/i18n/server';

export const alt = 'Trailase — Clear handovers. Confident decisions.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const loadAsset = async (filename: string) => {
  const data = await readFile(join(process.cwd(), 'public', filename));
  return Uint8Array.from(data).buffer;
};

export default async function OpengraphImage() {
  const [propertyPhoto, logo, locale] = await Promise.all([
    loadAsset('trailase-hero-property.jpg'),
    loadAsset('trailase-logo.png'),
    resolveRequestLocale(),
  ]);
  const t = (key: string) => translate(locale, key);
  const benefits = [t('og.noApp'), t('og.photoFirst'), t('og.comparisons')];

  return new ImageResponse(
    <div
      style={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: '#071127',
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* biome-ignore lint/performance/noImgElement: next/og requires a native image element. */}
      <img
        alt=""
        src={propertyPhoto as unknown as string}
        width={1200}
        height={630}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          width: 805,
          height: 630,
          borderRight: '1px solid rgba(139, 167, 255, 0.22)',
          borderRadius: '0 54px 54px 0',
          backgroundColor: 'rgba(5, 13, 34, 0.88)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: -170,
          left: 430,
          display: 'flex',
          width: 470,
          height: 470,
          border: '1px solid rgba(108, 139, 255, 0.22)',
          borderRadius: 999,
        }}
      />

      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 760,
          height: '100%',
          padding: '54px 0 48px 64px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 286,
              height: 88,
              padding: '14px 20px',
              border: '1px solid rgba(255,255,255,0.75)',
              borderRadius: 20,
              background: 'rgba(255,255,255,0.94)',
              boxShadow: '0 20px 50px rgba(2, 8, 23, 0.2)',
            }}
          >
            {/* biome-ignore lint/performance/noImgElement: next/og requires a native image element. */}
            <img
              alt="Trailase"
              src={logo as unknown as string}
              width={246}
              height={82}
              style={{ width: 246, height: 82, objectFit: 'contain' }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              marginLeft: 18,
              padding: '10px 16px',
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: 999,
              background: 'rgba(7,17,39,0.54)',
              color: '#d8e1ff',
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: '0.08em',
            }}
          >
            {t('og.eyebrow')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              maxWidth: 710,
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: '-0.045em',
            }}
          >
            {t('og.headline')}
          </div>
          <div
            style={{
              display: 'flex',
              maxWidth: 650,
              marginTop: 22,
              color: '#d5dced',
              fontSize: 25,
              lineHeight: 1.35,
            }}
          >
            {t('og.description')}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {benefits.map((label) => (
            <div
              key={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 15px',
                border: '1px solid rgba(255,255,255,0.16)',
                borderRadius: 999,
                background: 'rgba(9, 20, 45, 0.68)',
                color: '#f3f6ff',
                fontSize: 17,
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  display: 'flex',
                  width: 8,
                  height: 8,
                  marginRight: 9,
                  borderRadius: 999,
                  background: '#8ba7ff',
                }}
              />
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>,
    size,
  );
}
