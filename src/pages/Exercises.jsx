import { Link, useParams } from 'react-router-dom'
import { topicBySlug, quizFor, codeExercises, topics } from '../data/content.js'
import ExerciseCard from '../components/ExerciseCard.jsx'
import QuizComponent from '../components/QuizComponent.jsx'
import TopicLayout from './TopicLayout.jsx'
import NotFound from './NotFound.jsx'

export function ExercisesIndex() {
  return (
    <div className="page">
      <h1>Exercises</h1>
      <p className="lead">Pick a topic to practise. Each set contains a code exercise (where available) and a short scored quiz.</p>
      <div className="card-grid">{topics.map((t) => <Link key={t.slug} to={`/${t.slug}/exercises/`} className="lang-card" style={{ background: t.color }}><h3>{t.name}</h3><p>{codeExercises[t.slug] ? 'Code exercise + quiz' : 'Quiz'}</p><span className="card-cta">Start ❯</span></Link>)}</div>
    </div>
  )
}

export default function Exercises() {
  const { topic: s } = useParams()
  const t = topicBySlug[s]
  if (!t) return <NotFound />
  return (
    <TopicLayout topic={t}>
      <nav aria-label="Breadcrumb" className="breadcrumb"><ol><li><Link to="/">Home</Link></li><li><Link to="/exercises/">Exercises</Link></li><li aria-current="page">{t.name}</li></ol></nav>
      <h1>{t.name} <span className="h-light">Exercises</span></h1>
      <p className="lead">Test your {t.name} skills. Answers are checked locally in your browser and nothing is stored.</p>
      {codeExercises[t.slug] && <ExerciseCard title="Exercise 1: Fill in the code" exercise={codeExercises[t.slug]} />}
      <QuizComponent key={t.slug} title={`${t.name} Quiz`} questions={quizFor(t.slug)} />
    </TopicLayout>
  )
}
