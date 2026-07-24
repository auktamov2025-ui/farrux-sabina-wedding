import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    <div style={{ alignItems: 'center', background: 'linear-gradient(135deg, #4a2e15, #c08b2d)', color: '#fff8e8', display: 'flex', fontSize: 58, fontWeight: 700, height: '100%', justifyContent: 'center', width: '100%' }}>FS</div>,
    size,
  );
}
