import { Link, useParams } from 'react-router-dom'
import { topicBySlug, references, allLessons } from '../data/content.js'
import ReferenceTable from '../components/ReferenceTable.jsx'
import CodeExample from '../components/CodeExample.jsx'
import PreviousNextNavigation from '../components/PreviousNextNavigation.jsx'
import TopicLayout from './TopicLayout.jsx'
import NotFound from './NotFound.jsx'

const order = Object.keys(references)
export default function Reference() {
  const { topic: s } = useParams()
  const t = topicBySlug[s], r = references[s]
  if (!t) return <NotFound />
  if (!r) return (
    <TopicLayout topic={t}><h1>{t.name} Reference</h1><p>A reference for {t.name} has not been included in this clone yet. Continue with the <Link to={`/${t.slug}/`}>{t.name} tutorial</Link> or see <Link to="/references/">all references</Link>.</p></TopicLayout>
  )
  const i = order.indexOf(s)
  const prev = i > 0 ? { to: `/${order[i - 1]}/reference/`, label: references[order[i - 1]].title } : null
  const next = i < order.length - 1 ? { to: `/${order[i + 1]}/reference/`, label: references[order[i + 1]].title } : null
  return (
    <TopicLayout topic={t}>
      <nav aria-label="Breadcrumb" className="breadcrumb"><ol><li><Link to="/">Home</Link></li><li><Link to="/references/">References</Link></li><li aria-current="page">{t.name}</li></ol></nav>
      <h1>{r.title}</h1>
      <PreviousNextNavigation prev={prev} next={next} />
      <p className="lead">{r.overview}</p>
      <h2>Syntax</h2>
      <CodeExample title="" code={r.syntax} lang={t.lang === 'html' && s !== 'html' ? 'javascript' : t.lang} />
      <h2>Alphabetical List</h2>
      <ReferenceTable cols={r.cols} rows={[...r.rows].sort((a, b) => a[0].localeCompare(b[0]))} />
      <h2>Related Topics</h2>
      <ul className="related">{allLessons(t).slice(0, 4).map((l) => <li key={l.slug}><Link to={`/${t.slug}/${l.slug}/`}>{l.title}</Link></li>)}</ul>
    </TopicLayout>
  )
}
