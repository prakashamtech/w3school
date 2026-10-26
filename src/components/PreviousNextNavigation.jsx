import { Link } from 'react-router-dom'
export default function PreviousNextNavigation({ prev, next }) {
  return (
    <nav className="prevnext" aria-label="Lesson navigation">
      {prev ? <Link className="btn-green" to={prev.to} rel="prev">❮ Previous<span className="sr-only">: {prev.label}</span></Link> : <span />}
      {next ? <Link className="btn-green" to={next.to} rel="next">Next<span className="sr-only">: {next.label}</span> ❯</Link> : <span />}
    </nav>
  )
}
