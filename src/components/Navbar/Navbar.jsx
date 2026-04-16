import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const offset = 80
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container navbar__inner">
          {/* Logo */}
          <a href="/" className="navbar__logo" aria-label="DailyAlly Home">
            <span className="navbar__logo-icon" aria-hidden="true">🏠</span>
            <span className="navbar__logo-text">DailyAlly</span>
          </a>

          {/* Desktop Nav */}
          <div className="navbar__nav">
            <ul className="navbar__links" role="list">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="navbar__link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="navbar__cta">
              <a
                href="#services"
                className="btn btn-primary btn-sm"
                id="navbar-book-btn"
                onClick={(e) => handleNavClick(e, '#services')}
              >
                Book a Service
              </a>
            </div>
          </div>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`navbar__mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="navbar__mobile-link"
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#services"
          className="btn btn-primary navbar__mobile-cta"
          id="navbar-mobile-book-btn"
          onClick={(e) => handleNavClick(e, '#services')}
        >
          Book a Service
        </a>
      </div>
    </>
  )
}
