import { useEffect, useRef } from 'react'
import { CalendarCheck, UserCheck, CheckCircle, Lock } from 'lucide-react'
import './HowItWorks.css'

const STEPS = [
  {
    id: 'book',
    Icon: CalendarCheck,
    number: 1,
    title: 'Book a Service',
    desc: 'Pick your service and slot. Done in under 2 minutes.',
  },
  {
    id: 'match',
    Icon: UserCheck,
    number: 2,
    title: 'Get Matched',
    desc: 'We assign a verified, rated helper from your neighbourhood.',
  },
  {
    id: 'done',
    Icon: CheckCircle,
    number: 3,
    title: 'Job Gets Done',
    desc: 'Your helper arrives on time and leaves your home clean.',
  },
  {
    id: 'pay',
    Icon: Lock,
    number: 4,
    title: 'Pay Securely',
    desc: 'Pay after the job via card, UPI, or wallet. No cash needed.',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)

  // Animate the connector line and step circles on scroll
  useEffect(() => {
    const section = sectionRef.current
    const line = lineRef.current
    if (!section || !line) return

    const circles = section.querySelectorAll('.step__circle')

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate line width
          line.classList.add('animated')
          // Stagger step circles scale-in
          circles.forEach((el, i) => {
            setTimeout(() => el.classList.add('step__circle--visible'), i * 120)
          })
          io.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    io.observe(section)
    return () => io.disconnect()
  }, [])

  return (
    <section
      className="how-it-works section"
      id="how-it-works"
      aria-label="How DailyAlly works"
      ref={sectionRef}
    >
      <div className="container">
        <header className="how-it-works__header reveal">
          <div className="section-label">Simple Process</div>
          <h2 className="section-heading">Booked, done, and paid in 4 steps</h2>
          <p className="how-it-works__subtext">
            No calls. No uncertainty. You always know who's coming and when.
          </p>
        </header>

        <div className="how-it-works__steps-wrap">
          {/* Animated connector line */}
          <div className="how-it-works__connector-line" ref={lineRef} aria-hidden="true" />

          <ol className="how-it-works__steps" aria-label="Steps to booking a service">
            {STEPS.map((step) => (
              <li key={step.id} className="step" id={`step-${step.id}`}>
                <div className="step__number-wrap">
                  <div className="step__circle" aria-hidden="true">
                    <step.Icon size={24} strokeWidth={1.75} />
                  </div>
                  <div className="step__badge" aria-label={`Step ${step.number}`}>
                    {step.number}
                  </div>
                </div>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__desc">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="how-it-works__cta reveal">
          <p className="how-it-works__cta-text">Ready to get started?</p>
          <button
            id="how-it-works-book-btn"
            className="btn btn-primary btn-lg"
            onClick={() => {
              const el = document.querySelector('#services')
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            Book Your First Service
          </button>
        </div>
      </div>
    </section>
  )
}
