import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  const logoData = readFileSync(join(process.cwd(), 'public/images/Blanc.png'))
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          style={{ width: 340, objectFit: 'contain' }}
          alt="SINANI"
        />

        {/* Trait rouge */}
        <div
          style={{
            width: 56,
            height: 2,
            background: '#E84010',
            marginTop: 48,
            marginBottom: 32,
          }}
        />

        {/* Tagline */}
        <p
          style={{
            color: '#888888',
            fontSize: 20,
            fontFamily: 'sans-serif',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          Raconter la Guinée, inspirer le Monde.
        </p>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
