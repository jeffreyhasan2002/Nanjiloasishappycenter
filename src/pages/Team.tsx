import { PageMeta } from '../components/PageMeta'
import { PageHero } from '../components/PageHero'
import { pageHeroImages } from '../constants/images'
import { Icons } from '../components/TeamIcons'

/* ── Data ──────────────────────────────────────────────── */

const founder = {
  id: 1,
  name: 'Rajan T.S',
  role: 'Founder of Nanjil Oasis Happy Centre & Vocational Trainer',
  description:
    'Visionary founder dedicated to empowering children with special needs through inclusive education, vocational training, and holistic development programs.',
  longDescription:
    'With a deep-rooted passion for social change, Rajan T.S established Nanjil Oasis Happy Centre to create a safe, nurturing space where every child — regardless of ability — can learn, grow, and flourish. His leadership continues to inspire innovative programs that bridge the gap between special education and vocational readiness.',
  image: '/assets/team/Rajan.jpg',
}

const teamMembers = [
  {
    id: 2,
    name: 'A. Jesila Banu',
    role: 'Head Mistress and Special Educator',
    description:
      "Experienced educator committed to creating a supportive learning environment while providing specialized educational guidance for every child's growth.",
    image: '/assets/team/jesilan banu.jpg',
  },
  {
    id: 3,
    name: 'M. Rama',
    role: 'Co-Founder and Educator',
    description:
      'Passionate educator focused on innovative teaching methodologies and student-centered learning experiences that nurture confidence and independence.',
    image: '/assets/team/RAMA.jpg',
  },
  {
    id: 4,
    name: 'E. Susmi',
    role: 'Coordinator and Special Educator',
    description:
      'Dedicated professional coordinating educational activities while supporting students with individualized learning strategies and care.',
    image: '/assets/team/SUSMI.jpeg',
  },
  {
    id: 5,
    name: 'Dhivya Darshini R.',
    role: 'Educational Innovative Coordinator',
    description:
      'Creative educational leader implementing innovative programs, modern learning approaches, and engaging activities to enhance student development.',
    image: '/assets/team/Dhivya Darshini.jpg',
  },
]

const stats = [
  { value: '15+', label: 'Years of service' },
  { value: '5', label: 'Dedicated staff' },
  { value: '100+', label: 'Children supported' },
  { value: '6', label: 'Therapy disciplines' },
]

const values = [
  {
    title: 'Inclusive Education',
    text: 'We believe every child deserves access to quality education, tailored to their unique needs and potential.',
  },
  {
    title: 'Compassionate Care',
    text: 'Our team approaches every interaction with empathy, patience, and a genuine commitment to each child\'s wellbeing.',
  },
  {
    title: 'Innovation & Growth',
    text: 'We continuously evolve our methods, embracing modern approaches to deliver the best outcomes for our students.',
  },
]

/* ── Component ─────────────────────────────────────────── */

export function Team() {
  return (
    <>
      <PageMeta
        title="Our Leadership Team"
        description="Meet the passionate educators and leaders dedicated to empowering every child through inclusive education, innovation, and compassionate guidance."
      />
      <PageHero
        title="Our Leadership Team"
        subtitle="Meet the passionate educators and leaders dedicated to empowering every child through inclusive education, innovation, and compassionate guidance."
        image={pageHeroImages.team}
      />

      {/* ── Stats Strip ─────────────────────────────────── */}
      <div className="leadership-stats-strip">
        <div className="container">
          <ul className="leadership-stats">
            {stats.map((s) => (
              <li key={s.label} className="leadership-stats__item">
                <span className="leadership-stats__value">{s.value}</span>
                <span className="leadership-stats__label">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Founder Spotlight ───────────────────────────── */}
      <section className="section" id="founder">
        <div className="container">
          <p className="section__label">FOUNDER</p>
          <h2 className="section__title section__title--large">The Vision Behind Our Mission</h2>

          <div className="founder-spotlight">
            <div className="founder-spotlight__image-col">
              <div className="founder-spotlight__image-wrap">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="founder-spotlight__image"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="founder-spotlight__content">
              <h3 className="founder-spotlight__name">{founder.name}</h3>
              <p className="founder-spotlight__role">{founder.role}</p>
              <p className="founder-spotlight__desc">{founder.description}</p>
              <p className="founder-spotlight__long">{founder.longDescription}</p>
              <blockquote className="founder-spotlight__quote">
                "Every child is unique, and every child can learn — we just need to find the right way."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team Members ────────────────────────────────── */}
      <section className="section section--alt" id="leadership">
        <div className="container">
          <p className="section__label">LEADERSHIP &amp; EDUCATORS</p>
          <h2 className="section__title section__title--large">Our Dedicated Team</h2>
          <p className="section__intro">
            Behind every milestone at Nanjil Oasis is a team of experienced educators and coordinators
            who pour their hearts into shaping brighter futures for every child.
          </p>

          <div className="leadership-grid">
            {teamMembers.map((member) => (
              <article key={member.id} className="leadership-card" aria-label={member.name}>
                <div className="leadership-card__image-wrap">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="leadership-card__image"
                    loading="lazy"
                  />
                </div>
                <div className="leadership-card__body">
                  <h3 className="leadership-card__name">{member.name}</h3>
                  <p className="leadership-card__role">{member.role}</p>
                  <div className="leadership-card__divider" aria-hidden="true" />
                  <p className="leadership-card__desc">{member.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Values ──────────────────────────────────── */}
      <section className="section" id="values">
        <div className="container">
          <p className="section__label">OUR VALUES</p>
          <h2 className="section__title section__title--large">What Drives Us Every Day</h2>
          <p className="section__intro">
            Our team is united by a shared set of core values that guide everything we do — from individual
            learning plans to community outreach.
          </p>

          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="values-card">
                <span className="values-card__number" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3 className="values-card__title">{v.title}</h3>
                <p className="values-card__text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission Callout ─────────────────────────────── */}
      <div className="team-callout">
        <div className="container">
          <div className="team-callout__inner">
            <span className="team-callout__svg">{Icons.leaf}</span>
            <p className="team-callout__text">
              Every member of our team shares one belief:{' '}
              <strong>every child deserves to thrive</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* ── Join CTA ────────────────────────────────────── */}
      <section className="section team-join">
        <div className="container">
          <div className="team-join__inner">
            <div>
              <h2 className="team-join__title">Interested in joining our team?</h2>
              <p className="team-join__text">
                We welcome passionate professionals who believe in inclusive education and
                compassionate care. Reach out to us to learn about opportunities at Nanjil Oasis.
              </p>
            </div>
            <a href="/contact" className="btn btn--primary team-join__btn">
              <span className="team-join__btn-icon">{Icons.mail}</span>
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
