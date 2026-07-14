import { createElement, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'

/* ── Line icons (stroke, currentColor) ─────────────────── */
type IconKey = 'flag' | 'sprout' | 'community' | 'school' | 'graduation' | 'star' | 'heart' | 'summit' | 'families'

const ICONS: Record<IconKey, ReactNode> = {
  flag: <><path d="M5 21V4" /><path d="M5 4c3-1.6 6 1.6 9 0s5-.8 5-.8v9s-2 .8-5 .8-6-1.6-9 0" /></>,
  sprout: <><path d="M12 21v-9" /><path d="M12 12c0-3.3 2.4-5.5 7-5.5 0 3.3-2.4 5.5-7 5.5Z" /><path d="M12 14c0-2.3-1.7-4-5-4 0 2.3 1.7 4 5 4Z" /></>,
  community: <><circle cx="9" cy="8" r="3" /><path d="M3.5 20a5.5 5.5 0 0 1 11 0" /><path d="M16 6a3 3 0 0 1 0 5.6" /><path d="M17 15.2A5.5 5.5 0 0 1 20.5 20" /></>,
  school: <><path d="M12 3 3 7.5V9h18V7.5Z" /><path d="M5 9v9m14-9v9M9 9v9m6-9v9" /><path d="M3 21h18" /></>,
  graduation: <><path d="M12 4 2 8.5l10 4.5 10-4.5Z" /><path d="M6 11v4.2c0 1.3 2.7 2.3 6 2.3s6-1 6-2.3V11" /><path d="M22 8.5V14" /></>,
  star: <path d="M12 3.5l2.5 5.1 5.6.8-4 4 1 5.6-5.1-2.7-5.1 2.7 1-5.6-4-4 5.6-.8Z" />,
  heart: <path d="M12 20.5s-7-4.3-9.2-8.7C1.3 8.6 3.1 5 6.8 5c2 0 3.4 1.2 5.2 3.2C13.8 6.2 15.2 5 17.2 5c3.7 0 5.5 3.6 4 6.8C19 16.2 12 20.5 12 20.5Z" />,
  summit: <><path d="M3 19.5 9 8l3.5 5.5L15 9l6 10.5Z" /><path d="m8 11 1.2-1.8" /></>,
  families: <><circle cx="7" cy="7" r="2.4" /><circle cx="17" cy="7" r="2.4" /><path d="M2.5 19a4.5 4.5 0 0 1 9 0" /><path d="M12.5 19a4.5 4.5 0 0 1 9 0" /></>,
}

function Icon({ name }: { name: IconKey }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {ICONS[name]}
    </svg>
  )
}

interface TimelineMilestone {
  year: string
  title: string
  text: string
  icon: IconKey
}

const TIMELINE: TimelineMilestone[] = [
  {
    year: '2016',
    title: 'Nanjil Oasis Founded',
    text: 'A mother’s vision becomes a registered Trust dedicated to children with special needs.',
    icon: 'flag',
  },
  {
    year: 'The Beginning',
    title: 'Journey Began with 8 Students',
    text: 'Eight children, one humble setting, and an unwavering promise of love and care.',
    icon: 'sprout',
  },
  {
    year: '6 Months In',
    title: 'Expanded to 30 Students',
    text: 'Word travelled fast. Within half a year, our family had nearly quadrupled.',
    icon: 'community',
  },
  {
    year: 'Today',
    title: '40+ Current Students',
    text: 'A vibrant community of learners, therapists, and educators growing together.',
    icon: 'school',
  },
  {
    year: 'Since 2016',
    title: '80+ Students Empowered',
    text: 'Alumni studying higher education, working professionally, and living independently.',
    icon: 'graduation',
  },
]

interface ImpactStat {
  value: string
  label: string
  caption: string
  icon: IconKey
}

const IMPACT_STATS: ImpactStat[] = [
  {
    value: '80+',
    label: 'Students Trained',
    caption: 'Lives transformed since our inception.',
    icon: 'star',
  },
  {
    value: '40+',
    label: 'Active Students',
    caption: 'Currently learning, growing, and thriving.',
    icon: 'heart',
  },
  {
    value: '10+',
    label: 'Years of Dedication',
    caption: 'A decade-long mission rooted in compassion.',
    icon: 'summit',
  },
  {
    value: '∞',
    label: 'Families Supported',
    caption: 'Countless parents standing alongside us.',
    icon: 'families',
  },
]

function useReveal() {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -60px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

interface RevealProps {
  as?: 'div' | 'article' | 'section' | 'li'
  className?: string
  delay?: number
  children: ReactNode
}

function Reveal({ as = 'div', className = '', delay = 0, children }: RevealProps) {
  const { ref, visible } = useReveal()
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined
  const cls = `reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`

  return createElement(as, { ref, className: cls, style }, children)
}

export function OurJourney() {
  return (
    <>
      <PageMeta
        title="Our Journey"
        description="The story of hope, resilience, and the dream that became Nanjil Oasis Happy Centre."
      />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="journey-hero" aria-label="Our Journey">
        <div
          className="journey-hero__bg"
          style={{ backgroundImage: 'url(/assets/mother.jpg)' }}
          aria-hidden="true"
        />
        <div className="journey-hero__overlay" aria-hidden="true" />

        <div className="container journey-hero__inner">
          <Link to="/about-us" className="journey-back">
            <span aria-hidden="true">&larr;</span> Back to About Us
          </Link>

          <h1 className="journey-hero__title">Our Journey</h1>
          <p className="journey-hero__subtitle">
            The story of hope, resilience, and the dream that became Nanjil Oasis Happy Centre.
          </p>
        </div>
      </section>

      {/* ── Story content ─────────────────────────────────── */}
      <section className="journey-story">
        <div className="journey-story__wrap">
          <Reveal as="article" className="journey-chapter">
            <span className="journey-chapter__num" aria-hidden="true">1</span>
            <span className="journey-chapter__eyebrow">Chapter 1</span>
            <h2 className="journey-chapter__title">Where It All Started</h2>
            <p>
              In 2016, a mother&rsquo;s unwavering love turned into a vision.
            </p>
            <p>
              When Mrs.&nbsp;Rama&rsquo;s son, Shyam, was born with cerebral palsy, she
              dedicated herself to understanding special education and creating a world
              where children with special needs could flourish.
            </p>
            <p>
              What began as a small effort with just a few children in a humble setting
              soon blossomed into <strong>Nanjil Oasis Happy Centre</strong> &mdash; a
              nurturing sanctuary for special education, therapy, and holistic growth.
            </p>
          </Reveal>

          <Reveal as="article" className="journey-chapter">
            <span className="journey-chapter__num" aria-hidden="true">2</span>
            <span className="journey-chapter__eyebrow">Chapter 2</span>
            <h2 className="journey-chapter__title">A Dream Built Together</h2>
            <p>
              Today, Mrs.&nbsp;Rama, her husband <strong>T.S. Rajan</strong>, and her
              supportive friend A. Jesila Banu lead a devoted team of educators and therapists who
              champion each child&rsquo;s potential.
            </p>
            <p>
              Together, they transform challenges into opportunities and ensure every child
              is celebrated, empowered, and given the tools to thrive with dignity and joy.
            </p>
          </Reveal>

          <Reveal as="article" className="journey-chapter">
            <span className="journey-chapter__num" aria-hidden="true">3</span>
            <span className="journey-chapter__eyebrow">Chapter 3</span>
            <h2 className="journey-chapter__title">The Birth of Nanjil Oasis</h2>
            <p>
              Together, we started <strong>Nanjil Oasis Happy Centre</strong>.
            </p>
            <p>Our goal was simple:</p>
            <blockquote className="journey-chapter__pullquote">
              To provide love, care, guidance, and support to children with special needs
              and their families &mdash; creating the kind of nurturing environment we
              wished for our own child.
            </blockquote>
            <p>
              A place where every child would feel valued, accepted, encouraged, and
              empowered.
            </p>
          </Reveal>

          <Reveal as="article" className="journey-chapter">
            <span className="journey-chapter__num" aria-hidden="true">4</span>
            <span className="journey-chapter__eyebrow">Chapter 4</span>
            <h2 className="journey-chapter__title">Growing Beyond Expectations</h2>
            <p>
              We began our journey with just <strong>8 students</strong>.
            </p>
            <p>
              Every day brought new lessons, challenges, and victories.
            </p>
            <p>
              Within six months, our family grew to <strong>30 students</strong>.
            </p>
            <p>
              Today, we proudly support <strong>40+ students</strong>.
            </p>
            <p>
              Since 2016, we have trained and guided <strong>80+ students</strong>, many
              of whom are now pursuing higher education, studying abroad, working
              professionally, and building independent lives.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────── */}
      <section className="journey-timeline-section" aria-labelledby="journey-timeline-title">
        <div className="container">
          <Reveal>
            <p className="section__label">MILESTONES</p>
            <h2 id="journey-timeline-title" className="section__title section__title--large">
              A Decade of Growth
            </h2>
          </Reveal>

          <ol className="journey-timeline" aria-label="Timeline of Nanjil Oasis milestones">
            {TIMELINE.map((m, i) => (
              <Reveal as="li" key={m.title} className="journey-timeline__item" delay={i * 80}>
                <div className="journey-timeline__marker" aria-hidden="true">
                  <span className="journey-timeline__icon"><Icon name={m.icon} /></span>
                </div>
                <div className="journey-timeline__card">
                  <span className="journey-timeline__year">{m.year}</span>
                  <h3 className="journey-timeline__title">{m.title}</h3>
                  <p className="journey-timeline__text">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Impact ────────────────────────────────────────── */}
      <section className="journey-impact" aria-labelledby="journey-impact-title">
        <div className="container">
          <Reveal>
            <p className="section__label">OUR IMPACT</p>
            <h2 id="journey-impact-title" className="section__title section__title--large">
              Every Number Tells a Story
            </h2>
          </Reveal>

          <div className="journey-impact__grid">
            {IMPACT_STATS.map((s, i) => (
              <Reveal key={s.label} className="journey-impact__card" delay={i * 100}>
                <span className="journey-impact__icon" aria-hidden="true"><Icon name={s.icon} /></span>
                <span className="journey-impact__value">{s.value}</span>
                <span className="journey-impact__label">{s.label}</span>
                <p className="journey-impact__caption">{s.caption}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing message ──────────────────────────────── */}
      <section className="journey-closing" aria-labelledby="journey-closing-title">
        <div className="container">
          <Reveal className="journey-closing__inner">
            <span className="journey-closing__mark" aria-hidden="true">&ldquo;</span>
            <blockquote className="journey-closing__quote">
              <p id="journey-closing-title">
                Nanjil Oasis is not just a school. It is a home, a community, and a place
                where every child&rsquo;s potential is celebrated.
              </p>
            </blockquote>
            <p className="journey-closing__epilogue">
              This is our story, and it continues every day through hope, compassion,
              determination, and the joy of watching our children grow.
            </p>
            <p className="journey-closing__attribution">&mdash; Nanjil Oasis Happy Centre</p>

            <Link to="/about-us" className="btn btn--primary journey-closing__cta">
              <span aria-hidden="true">&larr;</span> Back to About Us
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
