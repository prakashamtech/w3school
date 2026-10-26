import { useState, useRef, useEffect } from 'react'
import { CopyButton } from './CodeExample.jsx'
import OutputPreview from './OutputPreview.jsx'

// Editable HTML/CSS/JS editor that runs in a sandboxed iframe (scripts only, no same-origin access)
export default function CodeEditor({ initial, title }) {
  const [code, setCode] = useState(initial)
  const [doc, setDoc] = useState(initial)
  const [runs, setRuns] = useState(0)
  const [warn, setWarn] = useState('')
  const taRef = useRef()
  useEffect(() => { setCode(initial); setDoc(initial); setRuns((r) => r + 1) }, [initial])
  const run = () => {
    const open = (code.match(/<(?!\/|!|br|hr|img|input|meta|link)[a-z][^>]*[^/]>/gi) || []).length
    const close = (code.match(/<\/[a-z]+>/gi) || []).length
    setWarn(!code.trim() ? 'The editor is empty – nothing to run.' : Math.abs(open - close) > 2 ? 'Warning: some tags may not be closed. The browser will try to render anyway.' : '')
    setDoc(code); setRuns((r) => r + 1)
  }
  const reset = () => { setCode(initial); setDoc(initial); setWarn(''); setRuns((r) => r + 1) }
  const onKey = (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); run() }
    if (e.key === 'Tab' && !e.shiftKey && e.altKey === false && e.ctrlKey === false) {
      // Insert two spaces; press Escape then Tab to leave the editor (keyboard-accessible)
      if (e.currentTarget.dataset.trap !== 'off') { e.preventDefault(); const t = e.currentTarget, s = t.selectionStart; setCode(code.slice(0, s) + '  ' + code.slice(t.selectionEnd)); requestAnimationFrame(() => (t.selectionStart = t.selectionEnd = s + 2)) }
    }
    if (e.key === 'Escape') e.currentTarget.dataset.trap = 'off'
  }
  return (
    <section className="editor" aria-label={title || 'Code editor'}>
      <div className="editor-bar">
        <button className="btn-green" onClick={run}>Run ❯</button>
        <button className="btn-small" onClick={reset}>Reset example</button>
        <CopyButton text={code} />
        <span className="editor-hint">Ctrl+Enter to run · Esc then Tab to leave editor</span>
      </div>
      <div className="editor-split">
        <div className="editor-pane">
          <label htmlFor="editor-ta" className="pane-label">HTML / CSS / JavaScript</label>
          <textarea id="editor-ta" ref={taRef} value={code} spellCheck="false" onChange={(e) => setCode(e.target.value)} onKeyDown={onKey} onFocus={(e) => (e.currentTarget.dataset.trap = 'on')} />
        </div>
        <div className="editor-pane">
          <span className="pane-label">Result</span>
          {warn && <p className="editor-warn" role="status">{warn}</p>}
          <OutputPreview doc={doc} key={runs} />
        </div>
      </div>
    </section>
  )
}
