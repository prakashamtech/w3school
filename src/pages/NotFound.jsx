import { Link } from 'react-router-dom'
export default function NotFound() {
  return <div className="page"><h1>404 – Page not found</h1><p className="lead">This page is not part of this site. Try the <Link to="/search/">search</Link> or go to the <Link to="/">homepage</Link>.</p></div>
}
