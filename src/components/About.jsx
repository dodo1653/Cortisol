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
    { title: 'Meme Culture', desc: 'Born from the viral cortisol spike meme. Built for those who understand the vibe.' },
    { title: 'Fair Launch', desc: 'No presale. No team tokens. Community-owned from day one.' },
    { title: 'Utility', desc: 'Dedicated to raising awareness about stress management and mental health.' },
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
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Built Different</h2>
          <p className="max-w-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
            $CORTISOL is more than a meme. It's a movement. 
            Dedicated to the culture, the vibe, and the future of meme coins.
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
