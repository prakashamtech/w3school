import { useState, useId } from 'react'

// Fill-in-the-blank coding exercise with answer validation
export default function ExerciseCard({ title, exercise }) {
  const [value, setValue] = useState('')
  const [result, setResult] = useState(null)
  const id = useId()
  const check = (e) => { e.preventDefault(); setResult(exercise.answer.some((a) => a.toLowerCase() === value.trim().toLowerCase())) }
  return (
    <form className="exercise" onSubmit={check}>
      <h3>{title}</h3>
      <p>{exercise.task}</p>
      <label htmlFor={id} className="sr-only">Your answer</label>
      <pre className="ex-code">{exercise.before}<input id={id} value={value} size={Math.max(4, value.length + 1)} onChange={(e) => { setValue(e.target.value); setResult(null) }} autoComplete="off" spellCheck="false" />{exercise.after}</pre>
      <div className="ex-actions">
        <button type="submit" className="btn-green">Submit Answer ❯</button>
        <button type="button" className="btn-small" onClick={() => { setValue(''); setResult(null) }}>Reset</button>
        {result === false && <button type="button" className="btn-small" onClick={() => setValue(exercise.answer[0])}>Show answer</button>}
      </div>
      {result !== null && <p className={`feedback ${result ? 'ok' : 'bad'}`} role="status">{result ? '✓ Correct! Well done.' : '✗ Not quite. Try again.'}</p>}
    </form>
  )
}
