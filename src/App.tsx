import { lazy } from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'

// Lazy-loaded so each route only ships the JS it needs — keeps the initial
// bundle (and Contact's heavy leaflet map dependency) off every other page.
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })))
const OurJourney = lazy(() => import('./pages/OurJourney').then((m) => ({ default: m.OurJourney })))
const Services = lazy(() => import('./pages/Services').then((m) => ({ default: m.Services })))
const Team = lazy(() => import('./pages/Team').then((m) => ({ default: m.Team })))
const Blog = lazy(() => import('./pages/Blog').then((m) => ({ default: m.Blog })))
const BlogPost = lazy(() => import('./pages/BlogPost').then((m) => ({ default: m.BlogPost })))
const Gallery = lazy(() => import('./pages/Gallery').then((m) => ({ default: m.Gallery })))
const Volunteer = lazy(() => import('./pages/Volunteer').then((m) => ({ default: m.Volunteer })))
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })))
const Donate = lazy(() => import('./pages/Donate').then((m) => ({ default: m.Donate })))
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      // Legacy alias — redirect so /about stays the single canonical URL (avoids duplicate content).
      { path: 'about-us', element: <Navigate to="/about" replace /> },
      { path: 'about-us/our-journey', element: <OurJourney /> },
      { path: 'services', element: <Services /> },
      { path: 'team', element: <Team /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:slug', element: <BlogPost /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'volunteer', element: <Volunteer /> },
      { path: 'contact', element: <Contact /> },
      { path: 'donate', element: <Donate /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
