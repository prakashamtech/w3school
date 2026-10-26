import { useState } from 'react'
import { Link } from 'react-router-dom'

export function About() {
  return <div className="page"><h1>About CodeSchools</h1><p className="lead">CodeSchools is a demonstration educational website whose layout is inspired by popular web tutorial platforms. All lesson text, exercises and branding are original sample content.</p>
    <h2>What is included</h2><ul><li>{'14 tutorial categories with category landing pages'}</li><li>Lesson pages with code examples, previous/next navigation and practice</li><li>5 reference tables, exercises and quizzes</li><li>A sandboxed HTML/CSS/JS code editor and local search</li></ul>
    <h2>What is not included</h2><ul><li>Server-side code execution (Python, SQL, PHP, Java, C…) – these show static output</li><li>User accounts, progress tracking, certificates and paid features</li><li>The full depth of lessons found on large tutorial sites; only a representative subset exists</li></ul>
    <p><Link to="/contact/">Contact us</Link></p></div>
}
export function Contact() {
  const [sent, setSent] = useState(false)
  return <div className="page"><h1>Contact</h1>
    {sent ? <p className="feedback ok" role="status">Thanks! This demo does not send messages, but your form was validated successfully.</p> :
    <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
      <label>Name<input required name="name" /></label>
      <label>Email<input required type="email" name="email" /></label>
      <label>Message<textarea required rows="5" name="message" /></label>
      <button className="btn-green" type="submit">Send</button>
    </form>}</div>
}
export function Privacy() { return <div className="page"><h1>Privacy Policy</h1><p className="lead">This demo site collects no personal data. It uses no cookies, analytics or tracking. Exercise answers and editor code stay in your browser and are discarded when you leave the page.</p></div> }
export function Terms() { return <div className="page"><h1>Terms of Use</h1><p className="lead">Content is provided for learning purposes as-is, without warranty. Examples may be simplified to improve reading and learning. CodeSchools is not affiliated with any other tutorial website.</p></div> }
