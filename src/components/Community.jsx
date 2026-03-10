import { useEffect, useRef, useState } from 'react'

const Community = () => {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="community" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-terminal-surface)' }}>
      <div className="terminal-container">
        <div 
          className="transition-all duration-700 ease-out mb-10"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <p className="label">// COMMUNITY</p>
        </div>

        <div 
          className="transition-all duration-700 ease-out delay-100 mb-10"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Join the Chill Zone</h2>
          <p className="max-w-md mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Be part of the unbothered. Stay calm, stay hydrated, hold $CORTISOL.
          </p>
        </div>

        <div 
          className="flex flex-wrap gap-3 mb-8 transition-all duration-700 ease-out delay-200"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <a 
            href="https://x.com/i/communities/2031425806140948572"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm transition-colors duration-300 flex items-center gap-2"
            style={{ 
              background: '#0d9488',
              color: '#000',
              borderRadius: '4px',
            }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            X
          </a>
          <a 
            href="https://www.tiktok.com/@foreverlowcortisol/video/7615658057300757791"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm transition-colors duration-300 flex items-center gap-2 border"
            style={{ 
              borderColor: 'rgba(255,255,255,0.2)',
              borderRadius: '4px',
              color: '#ffffff',
            }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            TikTok
          </a>
        </div>
      </div>
    </section>
  )
}

export default Community
