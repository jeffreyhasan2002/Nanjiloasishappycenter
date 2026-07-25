import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { phone, phoneDisplay, email, servicesData, SITE_NAME, SITE_TAGLINE, SITE_DEFAULT_DESCRIPTION } from '../constants/site'
import { heroImage, serviceImages, galleryImages } from '../constants/images'
import { SHAPE_PATHS } from '../constants/shapes'
import { youtubeVideos } from '../constants/videos'

const HOME_SERVICES_COUNT = 6
const GALLERY_PREVIEW_COUNT = 6

// ─── Inline SVG Icons ──────────────────────────────────────────────────────────

const IconHeart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const IconPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const IconArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const IconArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
)

const IconQuote = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z" />
  </svg>
)

const IconSchool = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

const IconBed = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 4v16" />
    <path d="M2 8h18a2 2 0 0 1 2 2v10" />
    <path d="M2 17h20" />
    <path d="M6 8v9" />
  </svg>
)

const IconHandshake = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.77.78L12 21l7.65-7.65.77-.78a5.4 5.4 0 0 0 0-7.64z" />
  </svg>
)

const IconVolunteer = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" />
    <path d="M16 11l2 2 4-4" />
  </svg>
)

const IconChat = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)

const IconImages = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
)

const IconPlay = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
)

const IconExternal = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const conditions = ['Autism', 'ADHD', 'Cerebral Palsy', 'Down Syndrome', 'Learning Difficulty']

const ctaHighlights = [
  { icon: <IconSchool />, text: 'New School Building' },
  { icon: <IconBed />, text: 'Hostel Facility' },
  { icon: <IconHandshake />, text: 'Holistic Rehabilitation' },
]

// ─── Component ────────────────────────────────────────────────────────────────
// Four images: images1 (6) first, then (2), (3), (4) — gallery indices 5, 1, 2, 3
const GALLERY_BLOCK_INDICES = [5, 1, 2, 3] as const

export function Home() {
  const featuredVideo = youtubeVideos[0]
  const [slideIndex, setSlideIndex] = useState(0)

  const goPrev = () => setSlideIndex(i => (i === 0 ? 3 : i - 1))
  const goNext = () => setSlideIndex(i => (i === 3 ? 0 : i + 1))

  useEffect(() => {
    const t = setInterval(() => setSlideIndex(i => (i === 3 ? 0 : i + 1)), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      <PageMeta
        title={`${SITE_NAME} | ${SITE_TAGLINE}`}
        description={SITE_DEFAULT_DESCRIPTION}
        titleOnly
      />

      {/* ── Hero (unchanged) ──────────────────────────────────────────── */}
      <section className="hero hero--with-image" aria-label="Welcome">
        <div className="hero__image-wrap">
          <Link to="/donate" className="hero__image-link" aria-label="Go to donate page">
            <img src={heroImage.url} alt={heroImage.alt} className="hero__image" loading="eager" decoding="async" />
          </Link>
        </div>
      </section>

      {/* ── Who we are + About ─────────────────────────────────────────── */}
      <section className="section section--about-video" style={{ paddingTop: '1.5rem' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
          <p className="section__label" style={{ marginBottom: '0.75rem', color: '#000' }}>Who we are</p>
          <h1 className="section__title section__title--large" style={{ color: 'var(--color-primary)', fontWeight: 700, marginBottom: 0 }}>
            Nanjil Oasis Happy Centre
          </h1>
        </div>
        <div className="container home-gallery-block">
          <div className="home-gallery-block__frame">
            <div className="home-gallery-block__main">
              <img
                src={galleryImages[GALLERY_BLOCK_INDICES[slideIndex]].url}
                alt={galleryImages[GALLERY_BLOCK_INDICES[slideIndex]].alt}
                loading="lazy"
                decoding="async"
              />
              <button
                type="button"
                className="home-gallery-block__nav home-gallery-block__nav--prev"
                onClick={goPrev}
                aria-label="Previous image"
              >
                <IconArrowLeft />
              </button>
              <button
                type="button"
                className="home-gallery-block__nav home-gallery-block__nav--next"
                onClick={goNext}
                aria-label="Next image"
              >
                <IconArrowRight />
              </button>
              <div className="home-gallery-block__dots" role="tablist" aria-label="Image position">
                {GALLERY_BLOCK_INDICES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={slideIndex === i}
                    aria-label={`Image ${i + 1} of 4`}
                    className={`home-gallery-block__dot ${slideIndex === i ? 'home-gallery-block__dot--active' : ''}`}
                    onClick={() => setSlideIndex(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container home-about-grid">

          {/* Copy column */}
          <div className="home-about-grid__copy">
            <p className="section__label">EMPOWERING ABILITIES</p>
            <h2 className="section__title section__title--large" style={{ lineHeight: 1.2 }}>
              Building Futures<br />Beyond Limits
            </h2>
            <p className="lead">At Nanjil Oasis, we transform challenges into achievements through structured learning and holistic support.</p>
            <p>Nanjil Oasis Parent Welfare Trust is a parents-led initiative established in 2016, committed to the protection, care, and rehabilitation of children with intellectual disabilities. Today <strong>40+ children</strong> grow, learn and thrive here with <strong>15+ dedicated educators</strong>.</p>

            {/* Condition badge strip */}
            <div className="home-about-tags">
              {conditions.map(tag => (
                <span key={tag} className="home-about-tag">{tag}</span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="home-about-ctas">
              <Link to="/about" className="btn btn--primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                Read More <IconArrowRight />
              </Link>
              <Link to="/donate" className="btn btn-donate" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.6rem 1.25rem' }}>
                <IconHeart /> Donate Now
              </Link>
            </div>

            {/* Contact card */}
            <div className="home-about-contact-card">
              <p className="home-about-contact-card__label">Call Us For Any Query / Admission</p>
              <p>
                <span className="contact-icon"><IconPhone /></span>
                <a href={`tel:${phone}`}>{phoneDisplay}</a>
              </p>
              <p>
                <span className="contact-icon"><IconMail /></span>
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </div>
          </div>

          {/* Video + Testimonial column */}
          <div className="home-about-grid__video">
            {featuredVideo && (
              <div className="home-video-embed">
                <iframe
                  src={`https://www.youtube.com/embed/${featuredVideo.id}`}
                  title={featuredVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <p className="home-video-embed__caption" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ color: 'var(--color-primary)', display: 'flex' }}><IconPlay /></span>
                  <a href="https://www.youtube.com/@NanjilOasisHappyCentreSpecialS" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    Watch more on YouTube <IconExternal />
                  </a>
                </p>
              </div>
            )}

            {/* Testimonial quote card */}
            <div className="home-testimonial-card">
              <div className="home-testimonial-card__quote-icon"><IconQuote /></div>
              <p className="home-testimonial-card__text">
                "Watching our child thrive here has been the greatest gift. The educators treat every child like family."
              </p>
              <p className="home-testimonial-card__author">— Parent of a student at Nanjil Oasis</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────────── */}
      <section className="section section--alt section--services-home">
        <div className="section__shapes" aria-hidden="true">
          <img src={SHAPE_PATHS[0]} alt="" className="section__shape section__shape--left" />
          <img src={SHAPE_PATHS[3]} alt="" className="section__shape section__shape--right" />
        </div>
        <div className="container">
          <div style={{ maxWidth: '620px' }}>
            <p className="section__label">HOW WE SUPPORT EVERY CHILD</p>
            <h2 className="section__title section__title--large">Therapy &amp; Activity Based Education</h2>
            <p>At Nanjil Oasis, we unite therapy and activity-based education to promote comprehensive academic, social and emotional growth.</p>
          </div>
          <div className="cards-grid cards-grid--home" style={{ marginTop: '1.75rem' }}>
            {servicesData.slice(0, HOME_SERVICES_COUNT).map((s, i) => (
              <div
                key={s.title}
                className="card"
                style={{ transition: 'transform 0.22s ease, box-shadow 0.22s ease', cursor: 'default' }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = ''
                }}
              >
                <div className="card__media">
                  <img src={serviceImages[i % serviceImages.length].url} alt={serviceImages[i % serviceImages.length].alt} loading="lazy" decoding="async" />
                </div>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__text">{s.description}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.75rem' }}>
            <Link to="/services" className="btn btn--primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
              Discover All Services <IconArrowRight />
            </Link>
          </p>
        </div>
      </section>

      {/* ── Donate CTA ────────────────────────────────────────────────── */}
      <section id="donate" className="cta-block" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Decorative SVG circles */}
        <svg aria-hidden="true" style={{ position: 'absolute', top: 0, right: 0, opacity: 0.07, pointerEvents: 'none' }} width="260" height="260" viewBox="0 0 260 260">
          <circle cx="200" cy="60" r="160" fill="white" />
        </svg>
        <svg aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: 0, opacity: 0.05, pointerEvents: 'none' }} width="180" height="180" viewBox="0 0 180 180">
          <circle cx="30" cy="150" r="120" fill="white" />
        </svg>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="cta-block__highlights">
            {ctaHighlights.map(item => (
              <div key={item.text} className="cta-block__highlight">
                <div className="cta-block__highlight-icon">{item.icon}</div>
                <div className="cta-block__highlight-label">{item.text}</div>
              </div>
            ))}
          </div>

          <h2 className="cta-block__title">Together, Let&apos;s Build Their Tomorrow</h2>
          <p className="cta-block__text">Build a Safe Haven. Create Brighter Futures.</p>
          <p className="cta-block__text" style={{ maxWidth: '580px', margin: '0 auto 0.75rem' }}>
            We are building a new school with a hostel facility for children with special needs — especially those from poor and single-parent families. Your support can help us provide protection, care, rehabilitation, education and future livelihood.
          </p>

          <div className="cta-block__actions">
            <Link to="/donate" className="btn btn-donate">
              <IconHeart /> Donate Now
            </Link>
            <Link to="/about" className="cta-block__outline-btn">
              Learn More <IconArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Gallery Preview ───────────────────────────────────────────── */}
      <section className="section section--gallery-preview">
        <div className="container">
          <div className="home-gallery-header">
            <div>
              <p className="section__label">MOMENTS AT NANJIL OASIS</p>
              <h2 className="section__title section__title--large home-gallery-header__title">
                Moments That Make Us Smile
              </h2>
              <p>A glimpse into the joyful, caring world our children experience every day.</p>
            </div>
            <Link to="/gallery" className="btn btn--primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', whiteSpace: 'nowrap' }}>
              <IconImages /> Explore Gallery
            </Link>
          </div>

          <div className="home-gallery-preview" style={{ marginTop: '1.5rem' }}>
            {galleryImages.slice(0, GALLERY_PREVIEW_COUNT).map((img, i) => (
              <Link
                key={i}
                to="/gallery"
                className="home-gallery-preview__item"
                style={{ display: 'block', position: 'relative', transition: 'transform 0.22s ease, box-shadow 0.22s ease' }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.03)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = ''
                }}
              >
                <img src={img.url} alt={img.alt} loading="lazy" decoding="async" />
                <div className="home-gallery-preview__overlay" aria-hidden="true">
                  <IconImages />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Volunteer CTA ─────────────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container home-volunteer">
          <div className="home-volunteer__copy">
            <p className="section__label">Together We Can</p>
            <h2 className="section__title section__title--large">
              Become a Volunteer
            </h2>
            <p>Volunteering for special needs is a highly rewarding experience. Join us in nurturing abilities and building brighter futures for every child who walks through our doors.</p>
          </div>
          <div className="home-volunteer__action">
            <div className="home-volunteer__icon-wrap"><IconVolunteer /></div>
            <Link to="/volunteer" className="btn btn--primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
              Join Your Hands <IconArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact Strip ─────────────────────────────────────────────── */}
      <section className="contact-strip">
        <div className="container">
          <div className="contact-strip__icon-wrap">
            <IconChat />
          </div>
          <h2 className="contact-strip__title">Have a question? Let&apos;s talk</h2>
          <p className="contact-strip__subtitle">Feel free to call or email for more details</p>

          <div className="contact-strip__links">
            <a href={`tel:${phone}`} className="contact-strip__link">
              <IconPhone /> {phoneDisplay}
            </a>
            <a href={`mailto:${email}`} className="contact-strip__link">
              <IconMail /> {email}
            </a>
          </div>

          <Link to="/contact" className="btn btn--primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
            Contact Us <IconArrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}
