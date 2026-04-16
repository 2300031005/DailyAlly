import { ShieldCheck, SearchCheck, Home, Clock } from 'lucide-react'
import './TrustSignals.css'

const TRUST_ITEMS = [
  {
    id: 'verified-professionals',
    Icon: ShieldCheck,
    label: 'Verified Professionals',
    desc: 'Every helper passes identity, credential, and background checks before joining.',
  },
  {
    id: 'background-checked',
    Icon: SearchCheck,
    label: 'Background Checked',
    desc: 'Police clearance and reference verification — completed before every booking.',
  },
  {
    id: 'happy-homes',
    Icon: Home,
    label: '5,000+ Happy Homes',
    desc: 'Thousands of families trust DailyAlly for safe, reliable home help every day.',
  },
  {
    id: 'ontime-guarantee',
    Icon: Clock,
    label: 'On-Time Guarantee',
    desc: 'Late without notice? Your next service is free. We take punctuality seriously.',
  },
]

export default function TrustSignals() {
  return (
    <section className="trust" id="trust" aria-label="Trust signals">
      <div className="container">
        <ul className="trust__grid" role="list" aria-label="Why trust DailyAlly">
          {TRUST_ITEMS.map(item => (
            <li key={item.id} className="trust__item" id={`trust-${item.id}`}>
              <div className="trust__icon-wrap" aria-hidden="true">
                <item.Icon size={22} strokeWidth={1.75} />
              </div>
              <strong className="trust__label">{item.label}</strong>
              <p className="trust__desc">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
