import './Testimonials.css'

const TESTIMONIALS = [
  {
    id: 'priya',
    initials: 'PM',
    name: 'Priya Mehta',
    meta: 'Koramangala, Bangalore',
    service: 'Deep Cleaning',
    stars: 5,
    text: "Booked a cleaner for Saturday morning. She arrived 10 mins early, was thorough, and left my flat spotless. Felt completely safe the whole time.",
  },
  {
    id: 'rahul',
    initials: 'RS',
    name: 'Rahul Sharma',
    meta: 'Andheri West, Mumbai',
    service: 'Plumbing',
    stars: 5,
    text: "Fixed a leak I'd been ignoring for months, in under an hour. No hidden charges, exactly what was quoted. The guy even cleaned up after himself.",
  },
  {
    id: 'sunita',
    initials: 'SR',
    name: 'Sunita Reddy',
    meta: 'Jubilee Hills, Hyderabad',
    service: 'Electrical',
    stars: 5,
    text: "Living alone, I'm always cautious. Seeing the helper's verified ID before they arrived made all the difference. Professional, polite, done in 40 mins.",
  },
]

function TestimonialCard({ testimonial, index }) {
  return (
    <article
      className="testimonial-card"
      id={`testimonial-${testimonial.id}`}
      aria-label={`Testimonial from ${testimonial.name}`}
      style={{ '--stagger-delay': `${index * 100}ms` }}
    >
      <div className="testimonial-card__stars" aria-label={`${testimonial.stars} out of 5 stars`}>
        {'★'.repeat(testimonial.stars)}
      </div>

      <p className="testimonial-card__text">"{testimonial.text}"</p>

      <footer className="testimonial-card__footer">
        <div className="testimonial-card__avatar" aria-hidden="true">
          {testimonial.initials}
        </div>
        <div className="testimonial-card__author">
          <p className="testimonial-card__name">{testimonial.name}</p>
          <p className="testimonial-card__meta">{testimonial.meta} · {testimonial.service}</p>
        </div>
      </footer>
    </article>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials" aria-label="Customer testimonials">
      <div className="container">
        <header className="testimonials__header reveal">
          <div className="section-label">Real Stories</div>
          <h2 className="section-heading">Neighbours who trust us, every day</h2>
          <p className="testimonials__subtext">
            Honest words from real customers, not marketing copy.
          </p>
        </header>

        <div className="testimonials__grid" role="list" aria-label="Customer reviews">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.id} role="listitem">
              <TestimonialCard testimonial={t} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
