import { useState } from 'react'
export default function ReferenceTable({ cols, rows }) {
  const [filter, setFilter] = useState('')
  const [cat, setCat] = useState('All')
  const cats = ['All', ...new Set(rows.map((r) => r[2]))]
  const visible = rows.filter((r) => (cat === 'All' || r[2] === cat) && r.join(' ').toLowerCase().includes(filter.toLowerCase()))
  const showCats = cats.length < 10
  return (
    <div>
      <div className="ref-filters">
        <label>Filter: <input type="search" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder={`Filter ${cols[0].toLowerCase()}s…`} /></label>
        {showCats && <div className="chips" role="group" aria-label="Category">{cats.map((c) => <button key={c} className={`chip ${c === cat ? 'active' : ''}`} aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>)}</div>}
      </div>
      <div className="table-wrap">
        <table className="ref-table">
          <thead><tr>{cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
          <tbody>
            {visible.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i}>{i === 0 ? <code>{c}</code> : c}</td>)}</tr>)}
            {visible.length === 0 && <tr><td colSpan={cols.length}>No entries match your filter.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}
