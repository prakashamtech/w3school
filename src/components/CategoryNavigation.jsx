import { NavLink } from 'react-router-dom'
import { topics } from '../data/content.js'

export default function CategoryNavigation() {
  return (
    <nav className="catnav" aria-label="Tutorial categories">
      <ul>
        {topics.map((t) => (
          <li key={t.slug}><NavLink to={`/${t.slug}/`} className={({ isActive }) => (isActive ? 'active' : '')}>{t.name.toUpperCase()}</NavLink></li>
        ))}
        <li><NavLink to="/tutorials/">MORE</NavLink></li>
      </ul>
    </nav>
  )
}
