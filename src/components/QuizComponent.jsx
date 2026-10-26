import { useState } from 'react'

// Multiple-choice quiz with real per-question validation and a computed score
export default function QuizComponent({ questions, title = 'Quiz' }) {
  const [answers, setAnswers] = useState({})
  const [checked, setChecked] = useState(false)
  const score = questions.filter((q, i) => answers[i] === q.answer).length
  const reset = () => { setAnswers({}); setChecked(false) }
  return (
    <form className="quiz" onSubmit={(e) => { e.preventDefault(); setChecked(true) }} aria-label={title}>
      <h3>{title}</h3>
      {questions.map((q, i) => (
        <fieldset key={i} className={checked ? (answers[i] === q.answer ? 'right' : 'wrong') : ''}>
          <legend>{i + 1}. {q.question}</legend>
          {q.options.map((o, j) => (
            <label key={j} className="quiz-opt">
              <input type="radio" name={`q${i}`} checked={answers[i] === j} disabled={checked} onChange={() => setAnswers({ ...answers, [i]: j })} /> {o}
            </label>
          ))}
          {checked && <p className="feedback" role="status">{answers[i] === q.answer ? '✓ Correct! ' : answers[i] === undefined ? '✗ Not answered. ' : '✗ Incorrect. '}{q.explain}</p>}
        </fieldset>
      ))}
      {checked ? (
        <div className="quiz-result" role="status">
          <strong>You scored {score} of {questions.length}</strong> ({Math.round((score / questions.length) * 100)}%)
          <button type="button" className="btn-small" onClick={reset}>Retry quiz</button>
        </div>
      ) : (
        <button type="submit" className="btn-green" disabled={Object.keys(answers).length === 0}>Check Answers</button>
      )}
    </form>
  )
}
