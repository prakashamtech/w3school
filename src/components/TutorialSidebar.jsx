import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function TutorialSidebar({ topic, current, open, onClose }) {
  const [expanded, setExpanded] = useState(() => Object.fromEntries(topic.groups.map((g) => [g.title, true])))
  useEffect(() => setExpanded(Object.fromEntries(topic.groups.map((g) => [g.title, true]))), [topic.slug])
  return (
    <>
      {open && <div className="drawer-backdrop" onClick={onClose} aria-hidden="true" />}
      <aside className={`sidebar ${open ? 'open' : ''}`} aria-label={`${topic.name} lessons`}>
        <div className="sidebar-head">
          <h2>{topic.name} Tutorial</h2>
          <button className="sidebar-close" onClick={onClose} aria-label="Close lessons menu">✕</button>
        </div>
        {topic.groups.map((g) => (
          <div key={g.title} className="side-group">
            <button className="side-toggle" aria-expanded={expanded[g.title]} onClick={() => setExpanded({ ...expanded, [g.title]: !expanded[g.title] })}>
              <span>{g.title}</span><span aria-hidden="true">{expanded[g.title] ? '−' : '+'}</span>
            </button>
            {expanded[g.title] && (
              <ul>{g.lessons.map((l) => (
                <li key={l.slug}><NavLink to={`/${topic.slug}/${l.slug}/`} aria-current={l.slug === current ? 'page' : undefined} className={l.slug === current ? 'active' : ''}>{l.title}</NavLink></li>
              ))}</ul>
            )}
          </div>
        ))}
        <div className="side-group">
          <div className="side-toggle static">{topic.name} Resources</div>
          <ul>
            <li><NavLink to={`/${topic.slug}/exercises/`}>{topic.name} Exercises</NavLink></li>
            <li><NavLink to={`/${topic.slug}/reference/`}>{topic.name} Reference</NavLink></li>
            {topic.runnable && <li><NavLink to="/tryit/">Code Editor</NavLink></li>}
          </ul>
        </div>
      </aside>
    </>
  )
}
