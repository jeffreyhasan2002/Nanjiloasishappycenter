import { PageMeta } from '../components/PageMeta'
import { PageHero } from '../components/PageHero'
import { phone, phoneDisplay, email, socialLinks, geoLatitude, geoLongitude, mapUrl } from '../constants/site'
import { pageHeroImages } from '../constants/images'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix default marker icon broken by Webpack/Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete (L.Icon.Default.prototype as { _getIconUrl?: string })._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

// Konam, Nagercoil coordinates
const CENTER: [number, number] = [geoLatitude, geoLongitude]

export function Contact() {
  return (
    <>
      <PageMeta
        title="Contact Us"
        description="Contact Nanjil Oasis Happy Centre - Multicare Centre for Kids with Special Needs. Phone, email. Call for admission and queries."
      />
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you"
        image={pageHeroImages.contact}
      />

      <section className="section contact-section">
        <div className="container">

          {/* Section header */}
          <div className="contact-header">
            <span className="contact-header__eyebrow">Reach Out</span>
            <h2 className="contact-header__title">Get in Touch</h2>
            <p className="contact-header__sub">
              We're here to help. Call or email us for admissions, queries, or
              just to say hello — you're always welcome.
            </p>
          </div>

          {/* Two-column layout: single contact box + map */}
          <div className="contact-layout">

            {/* LEFT — Single contact info box */}
            <div className="contact-info-box">
              <div className="contact-info-box__row">
                <div className="contact-info-box__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07
                      A19.5 19.5 0 0 1 3.15 12 19.79 19.79 0 0 1 .06 3.38 2 2 0 0 1
                      2.03 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0
                      1-.45 2.11L6.09 8.92a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1
                      2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 20 16.92z"/>
                  </svg>
                </div>
                <div className="contact-info-box__content">
                  <h3 className="contact-info-box__label">Call Us</h3>
                  <p className="contact-info-box__meta">Mon – Sat, 9 AM – 5 PM</p>
                  <a className="contact-info-box__link" href={`tel:${phone}`}>{phoneDisplay}</a>
                </div>
              </div>

              <div className="contact-info-box__divider" />

              <div className="contact-info-box__row">
                <div className="contact-info-box__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m2 7 10 7 10-7"/>
                  </svg>
                </div>
                <div className="contact-info-box__content">
                  <h3 className="contact-info-box__label">Email Us</h3>
                  <p className="contact-info-box__meta">We reply within 24 hours</p>
                  <a className="contact-info-box__link" href={`mailto:${email}`}>{email}</a>
                </div>
              </div>

              <div className="contact-info-box__divider" />

              <div className="contact-info-box__row">
                <div className="contact-info-box__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4M12 8h.01"/>
                  </svg>
                </div>
                <div className="contact-info-box__content">
                  <h3 className="contact-info-box__label">Admissions</h3>
                  <p className="contact-info-box__text">
                    You are safe and cared for in our hands. Reach out to learn
                    about our programmes and admission process.
                  </p>
                </div>
              </div>

              <div className="contact-info-box__divider" />

              <div className="contact-info-box__row">
                <div className="contact-info-box__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/>
                    <circle cx="18" cy="19" r="3"/>
                    <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/>
                  </svg>
                </div>
                <div className="contact-info-box__content">
                  <h3 className="contact-info-box__label">Follow Us</h3>
                  <p className="contact-info-box__meta">Stay updated on our activities</p>
                  <div className="contact-info-box__social">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="social-pill"
                      >
                        <img src={s.icon} alt="" width={24} height={24}
                          className="social-pill__icon" aria-hidden={true} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Map panel */}
            <div className="contact-map-panel">
              <div className="contact-map-panel__header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                  strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                  className="contact-map-panel__pin-icon">
                  <path d="M20 10c0 6-8 13-8 13S4 16 4 10a8 8 0 0 1 16 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <h3 className="contact-map-panel__title">Our Location</h3>
                  <p className="contact-map-panel__address">
                    Konam, Nagercoil, Kanyakumari District, Tamil Nadu
                  </p>
                </div>
              </div>

              <div className="contact-map-panel__map">
                <MapContainer
                  center={CENTER}
                  zoom={15}
                  scrollWheelZoom={false}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={CENTER}>
                    <Popup>
                      <strong>Nanjil Oasis Happy Centre</strong><br />
                      Multicare Centre for Kids with Special Needs<br />
                      Konam, Nagercoil — Kanyakumari District
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-map-panel__directions"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="16" height="16">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                </svg>
                Get Directions
              </a>
            </div>

          </div>
          {/* End two-column layout */}

          {/* Bottom CTA strip */}
          <div className="contact-cta">
            <p className="contact-cta__text">
              Prefer to speak with someone directly?
            </p>
            <a href={`tel:${phone}`} className="contact-cta__btn">
              Call Now — {phoneDisplay}
            </a>
          </div>

        </div>
      </section>
    </>
  )
}
