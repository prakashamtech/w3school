import { Link, useParams } from 'react-router-dom'
import { topicBySlug, allLessons, references } from '../data/content.js'
import CodeExample from '../components/CodeExample.jsx'
import NotFound from './NotFound.jsx'
import TopicLayout from './TopicLayout.jsx'

export default function Category() {
  const { topic: slug } = useParams()
  const t = topicBySlug[slug]
  if (!t) return <NotFound />
  const lessons = allLessons(t)
  const first = lessons[0], second = lessons[1] || lessons[0]
  return (
    <TopicLayout topic={t}>
      <h1>{t.name} <span className="h-light">Tutorial</span></h1>
      <p className="lead">{t.intro}</p>
      <Link className="btn-green big" to={`/${t.slug}/${first.slug}/`}>Start learning {t.name} now »</Link>
      <hr />
      <CodeExample title={`Easy Learning with "Try it Yourself"`} code={t.sample} lang={t.lang} output={t.sampleOutput}
        tryit={t.runnable ? `/tryit/?t=${t.slug}&l=${second.slug}` : undefined} />
      <hr />
      <h2>Beginner-Friendly Learning Sequence</h2>
      {t.groups.map((g) => (
        <div key={g.title}>
          <h3>{g.title}</h3>
          <ol className="sequence">
            {g.lessons.map((l) => <li key={l.slug}><Link to={`/${t.slug}/${l.slug}/`}>{l.title}</Link><span> – {l.intro.split('. ')[0]}.</span></li>)}
          </ol>
        </div>
      ))}
      <hr />
      <h2>Related Learning Resources</h2>
      <ul className="related">
        <li><Link to={`/${t.slug}/exercises/`}>{t.name} Exercises & Quiz</Link></li>
        {references[t.slug] && <li><Link to={`/${t.slug}/reference/`}>{references[t.slug].title}</Link></li>}
        {t.runnable && <li><Link to="/tryit/">Online Code Editor</Link></li>}
        <li><Link to="/tutorials/">All Tutorials</Link></li>
      </ul>
    </TopicLayout>
  )
}
