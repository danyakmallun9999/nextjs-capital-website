import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Dany Capital - Bitcoin & Blockchain Investment'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
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
          backgroundColor: '#000000',
          background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%)',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background Aurora Effect */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(ellipse at 30% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 70%), radial-gradient(ellipse at 70% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
            opacity: 0.8,
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 10,
            padding: '60px',
          }}
        >
          {/* Main Title */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#ffffff',
              margin: '0 0 20px 0',
              lineHeight: 1.1,
            }}
          >
            Dany Capital
          </h1>
          
          {/* Subtitle */}
          <h2
            style={{
              fontSize: '36px',
              fontWeight: '600',
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #10b981)',
              backgroundClip: 'text',
              color: 'transparent',
              margin: '0 0 30px 0',
              lineHeight: 1.2,
            }}
          >
            Bitcoin & Blockchain Investment
          </h2>
          
          {/* Description */}
          <p
            style={{
              fontSize: '24px',
              color: '#e5e7eb',
              margin: '0',
              maxWidth: '800px',
              lineHeight: 1.4,
              textAlign: 'center',
            }}
          >
            Investing in the decentralized revolution with conviction-based capital deployment
          </p>
          
          {/* Bottom accent */}
          <div
            style={{
              marginTop: '40px',
              width: '200px',
              height: '4px',
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #10b981)',
              borderRadius: '2px',
            }}
          />
        </div>
        
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '50px',
            right: '50px',
            width: '100px',
            height: '100px',
            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))',
            borderRadius: '50%',
            filter: 'blur(20px)',
          }}
        />
        
        <div
          style={{
            position: 'absolute',
            bottom: '50px',
            left: '50px',
            width: '80px',
            height: '80px',
            background: 'linear-gradient(45deg, rgba(16, 185, 129, 0.3), rgba(59, 130, 246, 0.3))',
            borderRadius: '50%',
            filter: 'blur(15px)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
