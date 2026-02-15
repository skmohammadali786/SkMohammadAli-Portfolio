import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'SK MOHAMMAD ALI | Engineering Student & Full-Stack Developer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#080808',
          color: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '40px 80px',
            backgroundColor: '#0F1115',
            boxShadow: '0 0 50px -12px rgba(255, 255, 255, 0.2)',
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontWeight: 900,
              marginBottom: 20,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(to right, #fff, #888)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            SK MOHAMMAD ALI
          </div>
          <div
            style={{
              fontSize: 30,
              color: '#888',
              textAlign: 'center',
            }}
          >
            Electrical Engineering Student & Full-Stack Developer
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
