import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from '../constants/site'

interface PageMetaProps {
  title: string
  description: string
  /** Absolute-from-root path to an image, e.g. "/assets/hero.webp". Defaults to the site hero image. */
  image?: string
  /** Use `title` verbatim instead of appending " | Site Name" (for the homepage title tag). */
  titleOnly?: boolean
  /** Keep this page out of search results (e.g. a "not found" state). */
  noindex?: boolean
  /** Optional structured data object(s), serialized into a JSON-LD script tag. */
  jsonLd?: object
}

export function PageMeta({ title, description, image, titleOnly, noindex, jsonLd }: PageMetaProps) {
  const { pathname } = useLocation()
  const canonicalUrl = `${SITE_URL}${pathname === '/' ? '' : pathname.replace(/\/+$/, '')}`
  const fullTitle = titleOnly ? title : `${title} | ${SITE_NAME}`
  const ogImage = `${SITE_URL}${image ?? DEFAULT_OG_IMAGE}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  )
}
