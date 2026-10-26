import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import TutorialSidebar from '../components/TutorialSidebar.jsx'

// Shared 3-column template: sidebar, article, optional right column
export default function TopicLayout({ topic, current, children, aside }) {
  const [open, setOpen] = useState(false)
  const loc = useLocation()
  useEffect(() => setOpen(false), [loc.pathname])
  return (
    <div className="topic-layout">
      <TutorialSidebar topic={topic} current={current} open={open} onClose={() => setOpen(false)} />
      <div className="article-col">
        <button className="lessons-btn" onClick={() => setOpen(true)} aria-label={`Open ${topic.name} lessons menu`}>☰ {topic.name} Lessons</button>
        <article className="article">{children}</article>
      </div>
      <aside className="right-col" aria-label="Supporting content">{aside}</aside>
    </div>
  )
}
