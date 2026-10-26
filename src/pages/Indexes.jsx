import { Link } from 'react-router-dom'
import { topics, references, allLessons } from '../data/content.js'

export function TutorialsIndex() {
  return (
    <div className="page">
      <h1>All Tutorials</h1>
      <p className="lead">Every tutorial included in this site. Each one follows a beginner-friendly lesson order.</p>
      <div className="path-grid">{topics.map((t) => (
        <div key={t.slug} className="path-card"><h2><Link to={`/${t.slug}/`}>{t.name}</Link></h2><p>{t.tagline}</p>
          <ul>{allLessons(t).slice(0, 4).map((l) => <li key={l.slug}><Link to={`/${t.slug}/${l.slug}/`}>{l.title}</Link></li>)}</ul></div>
      ))}</div>
    </div>
  )
}
export function ReferencesIndex() {
  return (
    <div className="page">
      <h1>References</h1>
      <p className="lead">Quick lookup tables for elements, properties, methods and keywords.</p>
      <div className="path-grid">{Object.entries(references).map(([s, r]) => (
        <Link key={s} to={`/${s}/reference/`} className="path-card link"><h2>{r.title}</h2><p>{r.overview}</p><p><strong>{r.rows.length}</strong> entries</p></Link>
      ))}</div>
    </div>
  )
}
