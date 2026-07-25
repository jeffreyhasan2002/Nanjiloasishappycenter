import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { PageMeta } from '../components/PageMeta'
import { blogPosts } from '../constants/blog'
import { pageHeroImages } from '../constants/images'
import { SITE_NAME, SITE_URL } from '../constants/site'

function formatDate(iso: string) {
  const d = new Date(iso + 'T00:00:00')
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

function readingTime(text: string = '') {
  const words = text.trim().split(/\s+/).length
  return `${Math.max(1, Math.round(words / 200))} min read`
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? blogPosts.find((p) => p.slug === slug) : null
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  if (!post) {
    return (
      <>
        <PageMeta title="Post not found" description="Blog post not found." noindex />
        <section className="section">
          <div className="container container--narrow">
            <nav className="blog-breadcrumb" aria-label="Breadcrumb">
              <Link to="/blog">Blog</Link>
              <span className="blog-breadcrumb__sep" aria-hidden="true">/</span>
              <span>Not found</span>
            </nav>
            <h1 className="section__title section__title--large">Post not found</h1>
            <p className="lead">The blog post you're looking for doesn't exist or has been removed.</p>
            <p><Link to="/blog" className="btn btn--primary">← Back to Blog</Link></p>
          </div>
        </section>
      </>
    )
  }

  const featuredImage = post.image ?? { url: '', alt: post.title }
  const fallbackImage = pageHeroImages.blog
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  const getRelatedImage = (rel: (typeof blogPosts)[0]) => {
    const img = rel.image?.url ? rel.image : fallbackImage
    return { url: img.url, alt: img.alt || rel.title }
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${featuredImage.url || fallbackImage.url}`,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: post.author?.name ?? SITE_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  }

  return (
    <>
      <PageMeta
        title={post.title}
        description={post.excerpt}
        image={featuredImage.url || undefined}
        jsonLd={articleJsonLd}
      />
      <article className="blog-post">

        {/* Header */}
        <header className="blog-post__header">
          {featuredImage.url && (
            <div className="blog-post__featured">
              <img
                src={featuredImage.url}
                alt={featuredImage.alt}
                loading="eager"
                decoding="async"
              />
            </div>
          )}
          <div className="container container--narrow">
            <nav className="blog-breadcrumb" aria-label="Breadcrumb">
              <Link to="/blog">Blog</Link>
              <span className="blog-breadcrumb__sep" aria-hidden="true">/</span>
              <span>{post.title}</span>
            </nav>
            <p className="section__label">BLOG</p>
            <div className="blog-post__header-meta">
              <time className="blog-post__date" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
              <span className="blog-post__reading-time">{readingTime(post.body)}</span>
            </div>
            <h1 className="blog-post__title">{post.title}</h1>
            <p className="blog-post__lead">{post.excerpt}</p>

            {/* Author */}
            {post.author && (
              <div className="blog-post__author">
                {post.author.avatar ? (
                  <img
                    src={post.author.avatar}
                    alt=""
                    className="blog-post__author-avatar"
                    width={40}
                    height={40}
                  />
                ) : (
                  <span className="blog-post__author-initial" aria-hidden="true">
                    {post.author.name.charAt(0)}
                  </span>
                )}
                <div className="blog-post__author-info">
                  <span className="blog-post__author-name">{post.author.name}</span>
                  {post.author.role && (
                    <span className="blog-post__author-role">{post.author.role}</span>
                  )}
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Body */}
        <div className="section">
          <div className="container container--narrow">
            <div className="prose blog-post__body">
              {post.body ? (
                <div dangerouslySetInnerHTML={{ __html: post.body.trim() }} />
              ) : (
                <p className="blog-post__no-body">No content available for this post.</p>
              )}
            </div>

            {/* Share */}
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share this post</span>
              <button
                className="btn btn--outline btn--sm"
                onClick={handleCopy}
                aria-label="Copy link"
              >
                {copied ? '✓ Copied!' : '🔗 Copy link'}
              </button>
            </div>

            <p className="blog-post__back">
              <Link to="/blog" className="btn btn--primary">← Back to Blog</Link>
            </p>
          </div>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <aside className="section section--alt blog-post__related">
            <div className="container">
              <h2 className="section__title">More from the blog</h2>
              <div className="cards-grid blog-cards">
                {related.map((rel) => {
                  const img = getRelatedImage(rel)
                  return (
                  <article key={rel.slug} className="card blog-card" role="listitem">
                    <Link
                      to={`/blog/${rel.slug}`}
                      className="blog-card__link"
                      aria-label={`Read: ${rel.title}`}
                    >
                      <div className="card__media blog-card__media">
                        <img
                          src={img.url}
                          alt={img.alt}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="blog-card__content">
                        <div className="blog-card__meta">
                          <time className="blog-card__date" dateTime={rel.date}>
                            {formatDate(rel.date)}
                          </time>
                          <span className="blog-card__reading-time">{readingTime(rel.body)}</span>
                        </div>
                        <h3 className="card__title blog-card__title">{rel.title}</h3>
                        <p className="card__text blog-card__excerpt">{rel.excerpt}</p>
                        <span className="blog-card__read-more">Read more →</span>
                      </div>
                    </Link>
                  </article>
                  )
                })}
              </div>
            </div>
          </aside>
        )}
      </article>
    </>
  )
}
