import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import { MessageCircle, Phone, Mail } from 'lucide-react'
import './FAQ.css'

const FAQS = [
  {
    id: 'safety',
    question: 'How do you keep my home safe?',
    answer:
      'Every DailyAlly professional is verified through government ID, a police clearance certificate, and reference calls. You can see your helper\'s photo and ID number before they arrive, so you know exactly who to expect at the door.',
  },
  {
    id: 'verification',
    question: 'What does "background checked" actually mean?',
    answer:
      'It means ID verification, a police clearance check through our law enforcement partner, and reference calls. Helpers also need a minimum of 20 reviewed jobs before earning our Verified badge. It\'s not a tick-box. It\'s a real filter.',
  },
  {
    id: 'pricing',
    question: 'Will I be charged extra after the job?',
    answer:
      'No. You see the full price before confirming. If any extra material is needed mid-job, your helper will ask first. You pay only when the job is complete, and only if you\'re satisfied.',
  },
  {
    id: 'cancel',
    question: 'Can I cancel or reschedule?',
    answer:
      'Yes. Cancel free of charge up to 2 hours before your booking. If something comes up last-minute, a small ₹49 fee may apply, which is refunded if the helper cancels on you.',
  },
  {
    id: 'quality',
    question: 'What if I\'m not happy with the work?',
    answer:
      'Message us within 24 hours. We\'ll either send the helper back to redo it at no extra cost, or refund the affected payment. No arguments, no runaround.',
  },
  {
    id: 'timing',
    question: 'How quickly can I get someone?',
    answer:
      'Book before noon and we can usually send someone the same day. Express slots (within 2 hours) are available in most areas. Next-day bookings are always available across all 50+ neighbourhoods.',
  },
]

const CONTACT = [
  { Icon: MessageCircle, text: 'Chat in the app', sub: 'Usually replies in under 2 min' },
  { Icon: Phone, text: '1800-DO-ALLY', sub: '9am – 9pm, every day' },
  { Icon: Mail, text: 'help@dailyally.in', sub: 'We respond within 4 hours' },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`faq-item${isOpen ? ' open' : ''}`} id={`faq-item-${faq.id}`}>
      <button
        className="faq-item__trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
        id={`faq-trigger-${faq.id}`}
      >
        <span className="faq-item__question">{faq.question}</span>
        <span className="faq-item__icon" aria-hidden="true">
          {isOpen ? <X size={16} strokeWidth={2} /> : <Plus size={16} strokeWidth={2} />}
        </span>
      </button>
      <div
        className="faq-item__body"
        id={`faq-answer-${faq.id}`}
        role="region"
        aria-labelledby={`faq-trigger-${faq.id}`}
      >
        <p className="faq-item__answer">{faq.answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState('safety')
  const toggle = (id) => setOpenId(prev => prev === id ? null : id)

  return (
    <section className="faq section" id="faq" aria-label="Frequently asked questions">
      <div className="container">
        <div className="faq__layout">

          {/* Sidebar */}
          <aside className="faq__sidebar">
            <div className="section-label">FAQ</div>
            <h2 className="faq__sidebar-heading">
              Questions we hear all the time
            </h2>
            <p className="faq__sidebar-text">
              We know letting someone into your home is a big deal.
              Here are honest answers. No marketing fluff.
            </p>

            <div className="faq__contact" aria-label="Contact options">
              {CONTACT.map(({ Icon, text, sub }) => (
                <div key={text} className="faq__contact-item">
                  <div className="faq__contact-icon" aria-hidden="true">
                    <Icon size={16} strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="faq__contact-text">{text}</span>
                    <span className="faq__contact-sub">{sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Accordion */}
          <div className="faq__list" role="list" aria-label="FAQ items">
            {FAQS.map((faq) => (
              <div key={faq.id} role="listitem">
                <FAQItem
                  faq={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => toggle(faq.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
