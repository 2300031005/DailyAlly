import { Star, ShieldCheck, MapPin } from 'lucide-react'
import './Hero.css'

// Real photo of a home service professional — gives authenticity over SVG
const HERO_PHOTO_URL = 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&auto=format&fit=crop&q=80'

export default function Hero() {
  const scrollToSection = (href) => {
    const target = document.querySelector(href)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="hero" aria-label="Hero">
      <div className="container hero__inner">

        {/* Content */}
        <div className="hero__content">

          {/* Trust badge — first thing user sees */}
          <div className="hero__badge" aria-label="Coverage area">
            <MapPin size={14} strokeWidth={2.5} className="hero__badge-icon" aria-hidden="true" />
            50+ neighbourhoods across India
          </div>

          <h1 className="hero__headline">
            Book trusted help for your home.{' '}
            <span className="hero__headline-highlight">No stress, no guesswork.</span>
          </h1>

          <p className="hero__subtext">
            Background-checked professionals from your neighbourhood.
            On time, reliable, and accountable.
          </p>

          <div className="hero__actions">
            <button
              id="hero-book-now-btn"
              className="btn btn-accent btn-lg hero__btn-primary"
              onClick={() => scrollToSection('#services')}
              aria-label="Book a service now"
            >
              Book Now
            </button>
            <button
              id="hero-explore-btn"
              className="btn btn-ghost btn-lg hero__btn-secondary"
              onClick={() => scrollToSection('#services')}
              aria-label="Explore available services"
            >
              See services →
            </button>
          </div>

          <div className="hero__stats" aria-label="Key statistics">
            <div className="hero__stat">
              <span className="hero__stat-value">5,000+</span>
              <span className="hero__stat-label">Happy Homes</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true" />
            <div className="hero__stat">
              <span className="hero__stat-value">98%</span>
              <span className="hero__stat-label">On-time Rate</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true" />
            <div className="hero__stat">
              <span className="hero__stat-value">4.9★</span>
              <span className="hero__stat-label">Avg. Rating</span>
            </div>
          </div>
        </div>

        {/* Photo visual */}
        <div className="hero__visual">
          <div className="hero__photo-wrap">
            <img
              src={HERO_PHOTO_URL}
              alt="A verified DailyAlly professional at a customer's home"
              className="hero__photo"
              loading="eager"
              decoding="async"
            />
            <div className="hero__photo-overlay" aria-hidden="true" />
          </div>

          {/* Floating trust cards */}
          <div className="hero__floating-card hero__floating-card--rating" aria-hidden="true">
            <div className="hero__floating-icon">
              <Star size={16} strokeWidth={2} fill="#f59e0b" color="#f59e0b" />
            </div>
            <div className="hero__floating-text">
              <span className="hero__floating-title">4.9 / 5 Rating</span>
              <span className="hero__floating-subtitle">From 3,200+ reviews</span>
            </div>
          </div>

          <div className="hero__floating-card hero__floating-card--verified" aria-hidden="true">
            <div className="hero__floating-icon hero__floating-icon--green">
              <ShieldCheck size={16} strokeWidth={2} color="#2d9050" />
            </div>
            <div className="hero__floating-text">
              <span className="hero__floating-title">ID Verified</span>
              <span className="hero__floating-subtitle">Background checked</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-arrow">↓</div>
      </div>
    </section>
  )
}
