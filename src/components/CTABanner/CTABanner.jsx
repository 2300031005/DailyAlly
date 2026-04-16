import './CTABanner.css'

const REASSURANCES = [
  { icon: '✓', text: 'No booking fees' },
  { icon: '✓', text: 'Free cancellation' },
  { icon: '✓', text: 'Pay after job done' },
  { icon: '✓', text: '24h quality guarantee' },
]

export default function CTABanner() {
  const scrollToSection = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="cta-banner" id="cta-banner" aria-label="Call to action">
      <div className="container">
        <div className="cta-banner__inner">
          <span className="cta-banner__tag">🏡 50+ neighbourhoods served</span>

          <h2 className="cta-banner__heading">
            Stop putting it off.<br />
            Your home deserves better.
          </h2>

          <p className="cta-banner__subtext">
            Every day you wait is another day the leaky faucet drips, the mess grows, or the errand piles up.
            Let DailyAlly handle it. Safely, reliably, today.
          </p>

          <div className="cta-banner__actions">
            <button
              id="cta-banner-book-btn"
              className="btn btn-white btn-lg"
              onClick={() => scrollToSection('#services')}
              aria-label="Book your first service"
            >
              Book Your First Service
            </button>
            <button
              id="cta-banner-explore-btn"
              className="btn btn-ghost-white btn-lg"
              onClick={() => scrollToSection('#how-it-works')}
              aria-label="See how it works"
            >
              See how it works →
            </button>
          </div>

          {/* Reassurances in a single consistent row */}
          <div className="cta-banner__reassurance" aria-label="Key reassurances">
            {REASSURANCES.map((r, i) => (
              <div key={i} className="cta-banner__reassurance-item">
                <span className="cta-banner__reassurance-check" aria-hidden="true">{r.icon}</span>
                {r.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
