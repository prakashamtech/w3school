import { useState, useRef, useId } from 'react'
import { useNavigate } from 'react-router-dom'
import { search } from '../data/content.js'

// Combobox-style search with keyboard selection (Up/Down/Enter/Escape)
export default function SearchBar({ big = false, autoFocus = false }) {
  const [q, setQ] = useState('')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(-1)
  const nav = useNavigate()
  const id = useId()
  const inputRef = useRef()
  const results = search(q).slice(0, 8)
  const go = (url) => { setOpen(false); setQ(''); nav(url) }
  const onKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setOpen(true); setActive((a) => Math.min(a + 1, results.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(a - 1, -1)) }
    else if (e.key === 'Enter') { e.preventDefault(); if (active >= 0 && results[active]) go(results[active].url); else if (q.trim()) go(`/search/?q=${encodeURIComponent(q)}`) }
    else if (e.key === 'Escape') setOpen(false)
  }
  return (
    <div className={`searchbar ${big ? 'big' : ''}`} role="search" onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setOpen(false)}>
      <label htmlFor={id} className="sr-only">Search tutorials</label>
      <input id={id} ref={inputRef} type="search" placeholder="Search our tutorials, e.g. HTML" value={q} autoFocus={autoFocus}
        role="combobox" aria-expanded={open && q.length > 0} aria-controls={`${id}-list`} aria-autocomplete="list"
        aria-activedescendant={active >= 0 ? `${id}-opt-${active}` : undefined}
        onChange={(e) => { setQ(e.target.value); setOpen(true); setActive(-1) }} onFocus={() => setOpen(true)} onKeyDown={onKey} />
      {q && <button type="button" className="search-clear" aria-label="Clear search" onClick={() => { setQ(''); inputRef.current.focus() }}>✕</button>}
      <button type="button" className="search-go" aria-label="Search" onClick={() => q.trim() && go(`/search/?q=${encodeURIComponent(q)}`)}>
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2.5" fill="none" /><path d="M15 15l6 6" stroke="currentColor" strokeWidth="2.5" /></svg>
      </button>
      {open && q && (
        <ul id={`${id}-list`} role="listbox" className="search-results">
          {results.length === 0 && <li className="search-empty">No results for “{q}”. Try “css”, “loop” or “select”.</li>}
          {results.map((r, i) => (
            <li key={r.url} id={`${id}-opt-${i}`} role="option" aria-selected={i === active} className={i === active ? 'active' : ''}
              onMouseDown={(e) => { e.preventDefault(); go(r.url) }} onMouseEnter={() => setActive(i)}>
              <span className="r-title">{r.title}</span><span className="r-kind">{r.kind}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
