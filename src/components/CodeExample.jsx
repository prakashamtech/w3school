import { useState } from 'react'
import { Link } from 'react-router-dom'
import { highlight } from '../highlight.js'

const LABELS = { html: 'HTML', python: 'Python', sql: 'SQL', java: 'Java', php: 'PHP', c: 'C', cpp: 'C++', csharp: 'C#', jsx: 'React JSX', javascript: 'JavaScript', bash: 'Git Bash' }

export function CopyButton({ text }) {
  const [state, setState] = useState('Copy')
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); setState('Copied!') }
    catch { const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); const ok = document.execCommand('copy'); ta.remove(); setState(ok ? 'Copied!' : 'Copy failed') }
    setTimeout(() => setState('Copy'), 1600)
  }
  return <button type="button" className="btn-small" onClick={copy} aria-live="polite">{state}</button>
}

// Static or runnable code panel. Runnable examples link to the sandboxed editor.
export default function CodeExample({ code, lang, title = 'Example', output, tryit }) {
  return (
    <div className="example">
      <h3>{title}</h3>
      <div className="code-panel">
        <div className="code-head">
          <span className="lang">{LABELS[lang] || lang}</span>
          <CopyButton text={code} />
        </div>
        <pre tabIndex={0} aria-label={`${LABELS[lang] || lang} code`}><code dangerouslySetInnerHTML={{ __html: highlight(code, lang) }} /></pre>
      </div>
      {tryit ? (
        <Link className="btn-green" to={tryit}>Try it Yourself »</Link>
      ) : output !== undefined && (
        <div className="static-output">
          <div className="static-label">Output (static preview — this language needs a runtime and is not executed in the browser)</div>
          <pre>{output}</pre>
        </div>
      )}
    </div>
  )
}
