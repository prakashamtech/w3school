import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar.jsx'
import { topics, topicBySlug, allLessons } from '../data/content.js'
import { highlight } from '../highlight.js'

function TopicBand({ t, bg, theme = "" }) {
  const first = allLessons(t)[1] || allLessons(t)[0]
  return (
    <section className={`band ${theme}`} style={{ background: bg }} aria-labelledby={`band-${t.slug}`}>
      <div className="band-inner">
        <div className="band-text">
          <h2 id={`band-${t.slug}`}>{t.name}</h2>
          <p className="band-tag">{t.tagline}</p>
          <Link to={`/${t.slug}/`} className="btn-pill green">Learn {t.name}</Link>
          <Link to={`/${t.slug}/reference/`} className="btn-pill dark">{t.name} Reference</Link>
          <Link to={`/${t.slug}/exercises/`} className="btn-pill yellow">{t.name} Exercises</Link>
        </div>
        <div className="band-code">
          <h3>{t.name} Example:</h3>
          <pre tabIndex={0}><code dangerouslySetInnerHTML={{ __html: highlight(t.sample, t.lang) }} /></pre>
          {t.runnable ? <Link to={`/tryit/?t=${t.slug}&l=${first.slug}`} className="btn-green">Try it Yourself</Link> : <Link to={`/${t.slug}/${first.slug}/`} className="btn-green">See Example Lesson</Link>}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const cards = ['python', 'sql', 'java', 'php', 'react', 'nodejs', 'c', 'cpp', 'cs', 'bootstrap', 'git'].map((s) => topicBySlug[s])
  return (
    <>
      <section className="hero">
        <h1>Learn to Code</h1>
        <p className="hero-sub">With the world's friendliest beginner tutorials and runnable examples.</p>
        <SearchBar big />
        <Link to="/tutorials/" className="hero-link">Not sure where to begin?</Link>
      </section>

      <TopicBand t={topicBySlug.html} bg="#D9EEE1" />
      <TopicBand t={topicBySlug.css} bg="#FFF4A3" theme="on-yellow" />
      <TopicBand t={topicBySlug.js} bg="#282A35" theme="on-dark" />

      <section className="section" aria-labelledby="popular">
        <h2 id="popular" className="section-title">Popular Languages & Libraries</h2>
        <div className="card-grid">
          {cards.map((t) => (
            <Link key={t.slug} to={`/${t.slug}/`} className="lang-card" style={{ background: t.color }}>
              <h3>{t.name}</h3><p>{t.tagline}</p><span className="card-cta">Learn {t.name} ❯</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section alt" aria-labelledby="discover">
        <h2 id="discover" className="section-title">Featured Learning Paths</h2>
        <div className="path-grid">
          {[['Front End', ['html', 'css', 'js', 'react']], ['Back End', ['python', 'sql', 'php', 'nodejs']], ['Systems & Apps', ['c', 'cpp', 'cs', 'java']], ['Tools', ['git', 'bootstrap']]].map(([title, slugs]) => (
            <div key={title} className="path-card">
              <h3>{title}</h3>
              <ol>{slugs.map((s) => <li key={s}><Link to={`/${s}/`}>{topicBySlug[s].name}</Link></li>)}</ol>
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="practice">
        <div className="split">
          <div>
            <h2 id="practice" className="section-title left">Exercises and Quizzes</h2>
            <p>Test your skills with short, original exercises. Fill in the missing code or answer multiple-choice questions and get instant feedback.</p>
            <Link to="/exercises/" className="btn-pill green">Browse Exercises</Link>
          </div>
          <ul className="mini-list">{topics.slice(0, 5).map((t) => <li key={t.slug}><Link to={`/${t.slug}/exercises/`}>{t.name} Exercises ❯</Link></li>)}</ul>
        </div>
      </section>

      <section className="section dark" aria-labelledby="editor-promo">
        <div className="split">
          <div>
            <h2 id="editor-promo" className="section-title left">Code Editor</h2>
            <p>Write HTML, CSS and JavaScript and see the result instantly. Code runs in an isolated, sandboxed preview frame.</p>
            <Link to="/tryit/" className="btn-pill green">Try the Code Editor</Link>
          </div>
          <div className="fake-editor" aria-hidden="true">
            <div className="dots"><i /><i /><i /></div>
            <pre dangerouslySetInnerHTML={{ __html: highlight('<h1>Hello!</h1>\n<p>Edit me and press Run.</p>', 'html') }} />
          </div>
        </div>
      </section>

      <section className="section alt" aria-labelledby="resources">
        <h2 id="resources" className="section-title">Learning Resources</h2>
        <div className="path-grid">
          <Link to="/references/" className="path-card link"><h3>References</h3><p>Element, property, method and keyword tables.</p></Link>
          <Link to="/tutorials/" className="path-card link"><h3>All Tutorials</h3><p>Every topic with a beginner-friendly lesson order.</p></Link>
          <Link to="/search/" className="path-card link"><h3>Search</h3><p>Find a lesson by keyword across every tutorial.</p></Link>
          <Link to="/html/html-introduction/" className="path-card link"><h3>Start Here</h3><p>Brand new? Begin with the HTML introduction.</p></Link>
        </div>
      </section>
    </>
  )
}
