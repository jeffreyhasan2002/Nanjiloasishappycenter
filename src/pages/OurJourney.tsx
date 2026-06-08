import { createElement, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'

interface TimelineMilestone {
  year: string
  title: string
  text: string
  icon: string
}

const TIMELINE: TimelineMilestone[] = [
  {
    year: '2016',
    title: 'Nanjil Oasis Founded',
    text: 'A mother’s vision becomes a registered Trust dedicated to children with special needs.',
    icon: '✨',
  },
  {
    year: 'The Beginning',
    title: 'Journey Began with 8 Students',
    text: 'Eight children, one humble setting, and an unwavering promise of love and care.',
    icon: '🌱',
  },
  {
    year: '6 Months In',
    title: 'Expanded to 30 Students',
    text: 'Word travelled fast. Within half a year, our family had nearly quadrupled.',
    icon: '🤝',
  },
  {
    year: 'Today',
    title: '40+ Current Students',
    text: 'A vibrant community of learners, therapists, and educators growing together.',
    icon: '🏫',
  },
  {
    year: 'Since 2016',
    title: '80+ Students Empowered',
    text: 'Alumni studying higher education, working professionally, and living independently.',
    icon: '🎓',
  },
]

interface ImpactStat {
  value: string
  label: string
  caption: string
  icon: string
}

const IMPACT_STATS: ImpactStat[] = [
  {
    value: '80+',
    label: 'Students Trained',
    caption: 'Lives transformed since our inception.',
    icon: '🌟',
  },
  {
    value: '40+',
    label: 'Active Students',
    caption: 'Currently learning, growing, and thriving.',
    icon: '💛',
  },
  {
    value: '10+',
    label: 'Years of Dedication',
    caption: 'A decade-long mission rooted in compassion.',
    icon: '⛰️',
  },
  {
    value: '∞',
    label: 'Families Supported',
    caption: 'Countless parents standing alongside us.',
    icon: '🧡',
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
            <span className="journey-chapter__eyebrow">Chapter 2</span>
            <h2 className="journey-chapter__title">A Dream Built Together</h2>
            <p>
              Today, Mrs.&nbsp;Rama, her husband <strong>T.S. Rajan</strong>, and their
              supportive friends lead a devoted team of educators and therapists who
              champion each child&rsquo;s potential.
            </p>
            <p>
              Together, they transform challenges into opportunities and ensure every child
              is celebrated, empowered, and given the tools to thrive with dignity and joy.
            </p>
          </Reveal>

          <Reveal as="article" className="journey-chapter">
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
                  <span className="journey-timeline__icon">{m.icon}</span>
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
                <span className="journey-impact__icon" aria-hidden="true">{s.icon}</span>
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
