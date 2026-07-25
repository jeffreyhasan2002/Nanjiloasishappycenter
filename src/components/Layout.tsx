import { Outlet, useLocation } from 'react-router-dom'
import { Suspense, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { SkipLink } from './SkipLink'
import { BackgroundShapes } from './BackgroundShapes'
import {
  SITE_NAME,
  SITE_URL,
  SITE_DEFAULT_DESCRIPTION,
  LOGO_URL,
  DEFAULT_OG_IMAGE,
  phone,
  email,
  addressLocality,
  addressRegion,
  addressCountry,
  geoLatitude,
  geoLongitude,
  socialLinks,
} from '../constants/site'
import { getBackgroundShapes } from '../constants/shapes'
import { TopBar } from './TopBar'
import { Header } from './Header'
import { Footer } from './Footer'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: SITE_NAME,
  alternateName: 'Nanjil Oasis Parent Welfare Trust',
  description: SITE_DEFAULT_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}${LOGO_URL}`,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  telephone: phone,
  email,
  foundingDate: '2016',
  address: {
    '@type': 'PostalAddress',
    streetAddress: addressLocality,
    addressRegion,
    addressCountry,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: geoLatitude,
    longitude: geoLongitude,
  },
  sameAs: socialLinks.map((s) => s.href),
}

export function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [pathname, hash])

  const bgShapes = getBackgroundShapes(pathname)

  return (
    <>
      {/* Title/description come from each page's <PageMeta> — kept here would duplicate them, since Helmet doesn't dedupe across nested instances. Only sitewide structured data belongs at this level. */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
      </Helmet>
      <SkipLink />
      <TopBar />
      <Header />
      {bgShapes && <BackgroundShapes leftShape={bgShapes.left} rightShape={bgShapes.right} />}
      <main id="main-content">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
