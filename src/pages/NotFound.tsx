import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'

export function NotFound() {
  return (
    <>
      <PageMeta
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has been moved."
        noindex
      />
      <section className="section">
        <div className="container container--narrow" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <h1 className="section__title section__title--large">Page Not Found</h1>
          <p className="lead">Sorry, the page you're looking for doesn't exist or has been moved.</p>
          <p><Link to="/" className="btn btn--primary">← Back to Home</Link></p>
        </div>
      </section>
    </>
  )
}
