import { useEffect, useRef, useState } from 'react'

const About = () => {
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

  const points = [
    { title: 'Stay Chill', desc: 'Life is too short to stress. Hold $CORTISOL and stay unbothered.' },
    { title: 'Low Cortisol', desc: 'The ultimate status symbol. When your cortisol is low, you win.' },
    { title: 'Do Not Spike', desc: 'Do not let the haters get to you. Keep your levels stable.' },
  ]

  return (
    <section ref={ref} id="about" className="py-24 md:py-32">
      <div className="terminal-container">
        <div 
          className="transition-all duration-700 ease-out mb-10"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <p className="label">// ABOUT</p>
        </div>

        <div 
          className="transition-all duration-700 ease-out delay-100 mb-10"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">The Meme for the Unbothered</h2>
          <p className="max-w-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
            In a world of chaos, $CORTISOL reminds us to stay calm. 
            Low cortisol = better sleep, better skin, better gains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {points.map((point, index) => (
            <div 
              key={point.title}
              className="p-6 border transition-all duration-500"
              style={{ 
                opacity: visible ? 1 : 0, 
                borderColor: 'rgba(13, 148, 136, 0.15)',
              }}
            >
              <h3 className="font-semibold mb-2" style={{ color: '#14b8a6' }}>{point.title}</h3>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
