import { Wrench, Zap, Sparkles, Hammer, PaintBucket, Car } from 'lucide-react'
import './Services.css'

const SERVICES = [
  {
    id: 'plumbing',
    Icon: Wrench,
    name: 'Plumbing',
    desc: 'Leaks, clogs, pipe repairs, faucet installs — fixed right the first time.',
    price: 'From ₹299',
    trust: 'Licensed pros only',
  },
  {
    id: 'electrical',
    Icon: Zap,
    name: 'Electrical',
    desc: 'Wiring, switches, fan installs and more. Certified electricians only.',
    price: 'From ₹349',
    trust: 'Certified & insured',
  },
  {
    id: 'cleaning',
    Icon: Sparkles,
    name: 'Deep Cleaning',
    desc: 'Full-home or room-specific deep clean with eco-friendly products.',
    price: 'From ₹499',
    trust: 'Available today',
  },
  {
    id: 'repairs',
    Icon: Hammer,
    name: 'Home Repairs',
    desc: 'Furniture assembly, wall patching, door and window fixes.',
    price: 'From ₹249',
    trust: 'Top-rated locally',
  },
  {
    id: 'painting',
    Icon: PaintBucket,
    name: 'Painting',
    desc: 'Interior and exterior painting. Clean finish, no mess left behind.',
    price: 'From ₹1,499',
    trust: 'Free estimate',
  },
  {
    id: 'errands',
    Icon: Car,
    name: 'Errands & Delivery',
    desc: 'Grocery runs, document drops, package pickups — handled locally.',
    price: 'From ₹149',
    trust: 'Same-day available',
  },
]

function ServiceCard({ service }) {
  return (
    <article
      className="service-card"
      id={`service-card-${service.id}`}
      role="button"
      tabIndex={0}
      aria-label={`Book ${service.name} service`}
      onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
    >
      <div className="service-card__icon-wrap" aria-hidden="true">
        <service.Icon size={20} strokeWidth={1.75} />
      </div>

      <div className="service-card__body">
        <h3 className="service-card__name">{service.name}</h3>
        <p className="service-card__desc">{service.desc}</p>
      </div>

      <div className="service-card__footer">
        <div className="service-card__bottom-row">
          <span className="service-card__price">{service.price}</span>
          <span className="service-card__trust">
            <span className="service-card__trust-dot" aria-hidden="true" />
            {service.trust}
          </span>
        </div>
        <span className="service-card__cta">Book now →</span>
      </div>
    </article>
  )
}

export default function Services() {
  return (
    <section className="services section" id="services" aria-label="Our Services">
      <div className="container">
        <header className="services__header">
          <div className="section-label">What We Fix</div>
          <h2 className="section-heading">Every job. Done right.</h2>
          <p className="services__subtext">
            Our verified professionals handle it all — so you don't have to worry.
          </p>
        </header>

        <div className="services__grid" role="list" aria-label="Available services">
          {SERVICES.map(service => (
            <div key={service.id} role="listitem">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
