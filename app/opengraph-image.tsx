import { ImageResponse } from 'next/og'

export const alt = 'The Moment Before Action — A button is not accountability'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#f5f2eb', color: '#1f1e1b', padding: '64px 72px', fontFamily: 'Georgia, serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', fontSize: 18, letterSpacing: 2, textTransform: 'uppercase', color: '#8a3e22' }}>
        <span>Accountability Lab</span><span>Experiment 001</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ maxWidth: 960, fontSize: 92, letterSpacing: -5, lineHeight: 0.92 }}>The moment before action.</span>
        <span style={{ marginTop: 28, fontFamily: 'sans-serif', fontSize: 30, color: '#57534a' }}>A button is not accountability.</span>
      </div>
      <div style={{ width: '100%', height: 9, background: '#b85c38' }} />
    </div>,
    size,
  )
}
