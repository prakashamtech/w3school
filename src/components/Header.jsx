import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import SearchBar from './SearchBar.jsx'
import CategoryNavigation from './CategoryNavigation.jsx'
import { topics } from '../data/content.js'

// Header = top bar (logo, main navigation, search) + category navigation bar
export default function Header() {
  const [menu, setMenu] = useState(null) // 'tutorials' | 'references' | 'exercises' | null
  const [mobileOpen, setMobileOpen] = useState(false)
  const loc = useLocation()
  useEffect(() => { setMenu(null); setMobileOpen(false) }, [loc.pathname])
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && (setMenu(null), setMobileOpen(false))
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  const toggle = (m) => setMenu(menu === m ? null : m)
  const menuLinks = {
    tutorials: topics.map((t) => ({ to: `/${t.slug}/`, label: `Learn ${t.name}` })),
    references: topics.filter((t) => ['html', 'css', 'js', 'python', 'sql'].includes(t.slug)).map((t) => ({ to: `/${t.slug}/reference/`, label: `${t.name} Reference` })),
    exercises: topics.map((t) => ({ to: `/${t.slug}/exercises/`, label: `${t.name} Exercises` })),
  }
  return (
    <header className="site-header">
      <div className="topbar">
        <Link to="/" className="logo" aria-label="CodeSchools home">
          <img src="/logo.svg" alt="" width="36" height="36" /><span>CodeSchools</span>
        </Link>
        <nav className="mainnav" aria-label="Main">
          {['tutorials', 'references', 'exercises'].map((m) => (
            <button key={m} className={`mainnav-btn ${menu === m ? 'open' : ''}`} aria-expanded={menu === m} aria-controls="mega-menu" onClick={() => toggle(m)}>
              {m[0].toUpperCase() + m.slice(1)} <span aria-hidden="true">▾</span>
            </button>
          ))}
          <NavLink to="/tryit/" className="mainnav-btn">Code Editor</NavLink>
        </nav>
        <SearchBar />
        <button className="hamburger" aria-label="Open menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? '✕' : '☰'}</button>
      </div>
      {menu && (
        <div id="mega-menu" className="mega" role="region" aria-label={`${menu} menu`}>
          <div className="mega-inner">
            <h2>{menu[0].toUpperCase() + menu.slice(1)}</h2>
            <ul>{menuLinks[menu].map((l) => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}</ul>
          </div>
        </div>
      )}
      {mobileOpen && (
        <nav className="mobile-menu" aria-label="Mobile">
          {Object.entries(menuLinks).map(([k, links]) => (
            <details key={k}>
              <summary>{k[0].toUpperCase() + k.slice(1)}</summary>
              <ul>{links.map((l) => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}</ul>
            </details>
          ))}
          <Link to="/tryit/" className="mobile-link">Code Editor</Link>
          <Link to="/search/" className="mobile-link">Search</Link>
        </nav>
      )}
      <CategoryNavigation />
    </header>
  )
}
