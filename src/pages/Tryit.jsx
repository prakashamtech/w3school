import { useSearchParams, Link } from 'react-router-dom'
import { topics, topicBySlug, allLessons } from '../data/content.js'
import CodeEditor from '../components/CodeEditor.jsx'

const runnable = topics.filter((t) => t.runnable)
export default function Tryit() {
  const [params, setParams] = useSearchParams()
  const t = topicBySlug[params.get('t')]?.runnable ? topicBySlug[params.get('t')] : topicBySlug.html
  const l = allLessons(t).find((x) => x.slug === params.get('l')) || allLessons(t)[1]
  return (
    <div className="page wide">
      <div className="tryit-head">
        <h1>Code Editor</h1>
        <label>Example:{' '}
          <select value={`${t.slug}|${l.slug}`} onChange={(e) => { const [a, b] = e.target.value.split('|'); setParams({ t: a, l: b }) }}>
            {runnable.map((rt) => <optgroup key={rt.slug} label={rt.name}>{allLessons(rt).map((x) => <option key={x.slug} value={`${rt.slug}|${x.slug}`}>{x.title}</option>)}</optgroup>)}
          </select>
        </label>
        <Link to={`/${t.slug}/${l.slug}/`}>← Back to lesson</Link>
      </div>
      <p className="muted">HTML, CSS and JavaScript run in a sandboxed iframe with no access to this site. Server-side languages (Python, SQL, PHP, Java…) are not executed here.</p>
      <CodeEditor initial={l.code} title={`${l.title} editor`} />
    </div>
  )
}
