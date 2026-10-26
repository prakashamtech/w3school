import { Link, useParams } from 'react-router-dom'
import { topicBySlug, allLessons, quizFor, codeExercises } from '../data/content.js'
import CodeExample from '../components/CodeExample.jsx'
import PreviousNextNavigation from '../components/PreviousNextNavigation.jsx'
import ExerciseCard from '../components/ExerciseCard.jsx'
import QuizComponent from '../components/QuizComponent.jsx'
import TopicLayout from './TopicLayout.jsx'
import NotFound from './NotFound.jsx'

const anchor = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-')

export default function Lesson() {
  const { topic: ts, lesson: ls } = useParams()
  const t = topicBySlug[ts]
  const lessons = t ? allLessons(t) : []
  const i = lessons.findIndex((l) => l.slug === ls)
  if (!t || i < 0) return <NotFound />
  const l = lessons[i]
  const group = t.groups.find((g) => g.lessons.includes(l))
  const prev = i > 0 ? { to: `/${t.slug}/${lessons[i - 1].slug}/`, label: lessons[i - 1].title } : { to: `/${t.slug}/`, label: `${t.name} Tutorial` }
  const next = i < lessons.length - 1 ? { to: `/${t.slug}/${lessons[i + 1].slug}/`, label: lessons[i + 1].title } : { to: `/${t.slug}/exercises/`, label: `${t.name} Exercises` }
  const sections = l.sections || []
  const toc = ['Example', ...sections.map((s) => s.h), 'Practice']
  const ex = codeExercises[t.slug]
  const related = group.lessons.filter((x) => x !== l).slice(0, 4)
  return (
    <TopicLayout topic={t} current={l.slug} aside={
      <div className="toc">
        <h2>On this page</h2>
        <ul>{toc.map((h) => <li key={h}><a href={`#${anchor(h)}`}>{h}</a></li>)}</ul>
      </div>
    }>
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <ol><li><Link to="/">Home</Link></li><li><Link to={`/${t.slug}/`}>{t.name}</Link></li><li aria-current="page">{l.title}</li></ol>
      </nav>
      <h1>{l.title.split(' ')[0]} <span className="h-light">{/HOME/.test(l.title) ? 'Tutorial' : l.title.split(' ').slice(1).join(' ')}</span></h1>
      <PreviousNextNavigation prev={prev} next={next} />
      <hr />
      <p className="lead">{l.intro}</p>
      <div id="example"><CodeExample code={l.code} lang={t.lang} output={l.output} tryit={t.runnable ? `/tryit/?t=${t.slug}&l=${l.slug}` : undefined} /></div>
      {sections.map((s) => (
        <section key={s.h} id={anchor(s.h)}>
          <hr />
          <h2>{s.h}</h2>
          {s.p && <p>{s.p}</p>}
          {s.list && <ul>{s.list.map((x) => <li key={x}>{x}</li>)}</ul>}
        </section>
      ))}
      <div className="note"><p><strong>Tip:</strong> Copy the example above, change something small, and observe the result. Experimenting is the fastest way to learn {t.name}.</p></div>
      <hr />
      <section id="practice">
        <h2>Practice</h2>
        {ex ? <ExerciseCard title={`${t.name} Exercise`} exercise={ex} /> : <QuizComponent title={`${t.name} Quick Check`} questions={quizFor(t.slug).slice(0, 1)} />}
        <p><Link to={`/${t.slug}/exercises/`}>More {t.name} exercises and quiz »</Link></p>
      </section>
      {related.length > 0 && <>
        <hr />
        <h2>Related Lessons</h2>
        <ul className="related">{related.map((r) => <li key={r.slug}><Link to={`/${t.slug}/${r.slug}/`}>{r.title}</Link></li>)}</ul>
      </>}
      <hr />
      <PreviousNextNavigation prev={prev} next={next} />
    </TopicLayout>
  )
}
