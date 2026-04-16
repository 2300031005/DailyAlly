import { ShieldCheck, Lock, Clock } from 'lucide-react'
import './Footer.css'

const SERVICES_LINKS = [
  { label: 'Plumbing', href: '#services' },
  { label: 'Electrical', href: '#services' },
  { label: 'Deep Cleaning', href: '#services' },
  { label: 'Home Repairs', href: '#services' },
  { label: 'Painting', href: '#services' },
  { label: 'Errands & Delivery', href: '#services' },
]

const COMPANY_LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Become a Partner', href: '#' },
  { label: 'About Us', href: '#' },
]

const SUPPORT_LINKS = [
  { label: 'FAQ', href: '#faq' },
  { label: 'Safety & Verification', href: '#trust' },
  { label: 'Contact Us', href: '#' },
]

const TRUST_BADGES = [
  { Icon: ShieldCheck, label: 'Verified Pros' },
  { Icon: Lock, label: 'Secure Pay' },
  { Icon: Clock, label: 'On-time Guarantee' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const handleNavClick = (e, href) => {
    if (!href.startsWith('#')) return
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="footer" id="footer" aria-label="Site footer">
      <div className="container">
        <div className="footer__main">

          {/* Brand column */}
          <div className="footer__brand">
            <a href="/" className="footer__logo" aria-label="DailyAlly Home">
              <span className="footer__logo-icon" aria-hidden="true">🏠</span>
              DailyAlly
            </a>
            <p className="footer__brand-text">
              Verified professionals you can trust in your home.
              Serving 50+ neighbourhoods across India's major cities.
            </p>

            <div className="footer__trust-row" aria-label="Trust certifications">
              {TRUST_BADGES.map(({ Icon, label }) => (
                <span key={label} className="footer__trust-badge">
                  <Icon size={12} strokeWidth={2} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Services column */}
          <nav aria-label="Services navigation">
            <h3 className="footer__col-heading">Services</h3>
            <ul className="footer__links" role="list">
              {SERVICES_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link" onClick={(e) => handleNavClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company column */}
          <nav aria-label="Company navigation">
            <h3 className="footer__col-heading">Company</h3>
            <ul className="footer__links" role="list">
              {COMPANY_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link" onClick={(e) => handleNavClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support column */}
          <nav aria-label="Support navigation">
            <h3 className="footer__col-heading">Support</h3>
            <ul className="footer__links" role="list">
              {SUPPORT_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link" onClick={(e) => handleNavClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {year} <strong>DailyAlly</strong> · Made with care for Indian homes.
          </p>
          <nav className="footer__legal" aria-label="Legal links">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <a href="#" className="footer__legal-link">Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
