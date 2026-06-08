import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { OurJourney } from './pages/OurJourney'
import { Services } from './pages/Services'
import { Team } from './pages/Team'
import { Blog } from './pages/Blog'
import { BlogPost } from './pages/BlogPost'
import { Gallery } from './pages/Gallery'
import { Volunteer } from './pages/Volunteer'
import { Contact } from './pages/Contact'
import { Donate } from './pages/Donate'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'about-us', element: <About /> },
      { path: 'about-us/our-journey', element: <OurJourney /> },
      { path: 'services', element: <Services /> },
      { path: 'team', element: <Team /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:slug', element: <BlogPost /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'volunteer', element: <Volunteer /> },
      { path: 'contact', element: <Contact /> },
      { path: 'donate', element: <Donate /> },
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
