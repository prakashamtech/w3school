import { useSearchParams, Link } from 'react-router-dom'
import { search } from '../data/content.js'

export default function SearchPage() {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') || ''
  const results = search(q)
  return (
    <div className="page">
      <h1>Search</h1>
      <form role="search" className="search-page-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="sp" className="sr-only">Search</label>
        <input id="sp" type="search" value={q} autoFocus placeholder="Search tutorials, references, exercises…" onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {})} />
        {q && <button type="button" className="btn-small" onClick={() => setParams({})}>Clear</button>}
      </form>
      {q && <p className="muted" role="status">{results.length} result{results.length === 1 ? '' : 's'} for “{q}”</p>}
      {q && results.length === 0 && <p className="empty">No matching content. Try a broader term like “html”, “select” or “function”.</p>}
      {!q && <p className="muted">Type to search all {`lessons, references and exercises`} included in this site.</p>}
      <ul className="search-page-results">
        {results.map((r) => <li key={r.url}><Link to={r.url}><strong>{r.title}</strong></Link> <span className="r-kind">{r.kind}</span><p>{r.text.slice(0, 160)}…</p></li>)}
      </ul>
    </div>
  )
}
