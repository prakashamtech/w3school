import { Link } from 'react-router-dom'
import { topics } from '../data/content.js'

const groups = [
  { title: 'Top Tutorials', links: topics.slice(0, 8).map((t) => [`/${t.slug}/`, `${t.name} Tutorial`]) },
  { title: 'Top References', links: ['html', 'css', 'js', 'python', 'sql'].map((s) => [`/${s}/reference/`, `${topics.find((t) => t.slug === s).name} Reference`]) },
  { title: 'Exercises', links: ['html', 'css', 'js', 'python', 'sql'].map((s) => [`/${s}/exercises/`, `${topics.find((t) => t.slug === s).name} Exercises`]).concat([['/exercises/', 'All Exercises']]) },
  { title: 'Learning Resources', links: [['/tryit/', 'Code Editor'], ['/tutorials/', 'All Tutorials'], ['/references/', 'All References'], ['/search/', 'Search']] },
  { title: 'About', links: [['/about/', 'About Us'], ['/contact/', 'Contact'], ['/privacy/', 'Privacy Policy'], ['/terms/', 'Terms of Use']] },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        {groups.map((g) => (
          <nav key={g.title} aria-label={g.title}>
            <h3>{g.title}</h3>
            <ul>{g.links.map(([to, label]) => <li key={to}><Link to={to}>{label}</Link></li>)}</ul>
          </nav>
        ))}
      </div>
      <p className="footer-note">
        CodeSchools is a demo learning site inspired by the layout of popular tutorial websites. Examples may be simplified to improve reading and learning.
        Content is original sample material. <Link to="/terms/">Terms</Link> · <Link to="/privacy/">Privacy</Link>
      </p>
      <p className="footer-copy">© 2026 CodeSchools. All rights reserved.</p>
    </footer>
  )
}
