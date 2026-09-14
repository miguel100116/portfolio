import { useEffect, useRef, useState } from 'react'
import './App.css'

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h16m-6-6 6 6-6 6'} /></svg>
}
const skillGroups = [
  { name: 'Development', icon: '</>', description: 'From an idea to an interface.', skills: ['JavaScript · working knowledge', 'CSS', 'Java', 'Spring Boot · basic knowledge', 'React Native'] },
  { name: 'Databases', icon: '◫', description: 'Working with the data behind it.', skills: ['Basic database operations', 'MongoDB', 'MySQL'] },
  { name: 'Networking', icon: '⌘', description: 'Connecting systems that matter.', skills: ['Networking fundamentals', 'Network cabling', 'LAN cable installation'] },
  { name: 'Hardware & systems', icon: '▣', description: 'Hands-on, beyond the screen.', skills: ['Windows installation & configuration', 'PC assembly & system upgrades', 'Hardware troubleshooting & maintenance', 'IT equipment installation & maintenance'] },
  { name: 'CCTV & setup', icon: '◉', description: 'Putting connected equipment to work.', skills: ['CCTV installation', 'CCTV configuration', 'CCTV network setup'] },
]
const phases = [
  { name: 'Discover', label: '01 / REQUIREMENTS', title: 'Start with the right questions.', text: 'Understand the people, the problem, and what a useful outcome looks like. For this portfolio, that means giving potential employers a clear view of my background, skills, and capstone project.', output: 'Clear scope & content requirements' },
  { name: 'Design', label: '02 / SYSTEM DESIGN', title: 'Give the idea a clear structure.', text: 'Organize the content, map the user journey, and define a consistent visual language. A responsive layout, readable typography, and accessible interactions shape the experience.', output: 'Visual system & responsive page structure' },
  { name: 'Develop', label: '03 / IMPLEMENTATION', title: 'Make every piece work together.', text: 'Build the experience with React and TypeScript, reusable components, and responsive CSS. Keep content easy to update and interactions purposeful.', output: 'Working, maintainable application' },
  { name: 'Test', label: '04 / VERIFICATION', title: 'Check the details that make it usable.', text: 'Verify the production build, inspect layouts at different screen sizes, and check navigation, keyboard access, project details, and downloads against the original requirements.', output: 'Build checks & interaction verification' },
  { name: 'Evolve', label: '05 / MAINTENANCE', title: 'Keep learning. Keep improving.', text: 'Publish when the content is ready, then keep the portfolio current with new work, real project screenshots, and skills gained through practical experience.', output: 'A portfolio that grows with my experience' },
]
function Orbit() {
  return <div className="orbit-art" aria-label="Abstract orbital illustration representing connected technology" role="img">
    <div className="art-grid" /><div className="orbit-coordinate top-coordinate">SYSTEM / MJ.01</div>
    <svg className="orbital-svg" viewBox="0 0 560 530" fill="none" aria-hidden="true">
      <defs><radialGradient id="sphere"><stop stopColor="#5b3a19" /><stop offset=".7" stopColor="#26190d" /><stop offset="1" stopColor="#100c08" /></radialGradient><linearGradient id="ring"><stop stopColor="#f0a84d" stopOpacity=".12" /><stop offset=".5" stopColor="#ffd38a" /><stop offset="1" stopColor="#f0a84d" stopOpacity=".15" /></linearGradient></defs>
      <circle cx="280" cy="260" r="185" stroke="#3d3021" strokeDasharray="3 7" /><circle cx="280" cy="260" r="132" fill="url(#sphere)" stroke="#76532e" strokeWidth=".7" />
      <g stroke="#b47c3e" strokeOpacity=".28"><ellipse cx="280" cy="260" rx="65" ry="132" /><ellipse cx="280" cy="260" rx="112" ry="132" /><ellipse cx="280" cy="260" rx="132" ry="43" /><ellipse cx="280" cy="260" rx="123" ry="92" /><path d="M148 260h264M280 128v264" /></g>
      <g className="orbit-rings"><ellipse cx="280" cy="260" rx="228" ry="80" transform="rotate(-33 280 260)" stroke="url(#ring)" /><ellipse cx="280" cy="260" rx="205" ry="79" transform="rotate(49 280 260)" stroke="url(#ring)" strokeOpacity=".5" /><circle cx="95" cy="368" r="6" fill="#ffd38a" /><circle cx="458" cy="151" r="4" fill="#ffd38a" /></g>
      <path d="m228 279 15-49 37 34 37-34 15 49" stroke="#ffe1ae" strokeWidth="7" strokeLinejoin="round" strokeLinecap="round" /><path d="M338 244v28c0 17-10 24-23 19" stroke="#ffe1ae" strokeWidth="7" strokeLinecap="round" />
      <circle cx="280" cy="260" r="224" stroke="#3b3023" strokeDasharray="1 19" /><path d="M46 260h18m-9-9v18m437-9h18m-9-9v18" stroke="#8d704b" />
    </svg>
    <div className="floating-tag tag-code"><span className="tag-icon">&lt;/&gt;</span><div>Build with purpose<small>Mobile & web development</small></div><span className="tiny-dot" /></div>
    <div className="floating-tag tag-learn"><span className="spark">✳</span><div>Always in progress<small>Learning is part of the process.</small></div></div>
    <div className="orbit-coordinate bottom-coordinate"><span className="tiny-dot" /> CURIOSITY, CONNECTED.</div>
  </div>
}
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [skillFilter, setSkillFilter] = useState('All skills')
  const [phase, setPhase] = useState(0)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const phaseRefs = useRef<(HTMLButtonElement | null)[]>([])
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id) }) }, { rootMargin: '-15% 0px -55% 0px' })
    document.querySelectorAll('main > section[id]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`)
      revealObserver.observe(element)
    })

    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      document.documentElement.style.setProperty('--scroll-progress', `${maxScroll > 0 ? window.scrollY / maxScroll : 0}`)
    }
    const updatePointer = (event: PointerEvent) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('pointermove', updatePointer, { passive: true })
    return () => {
      revealObserver.disconnect()
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('pointermove', updatePointer)
    }
  }, [])
  const downloadProfile = () => {
    const profile = `MIGUEL JOSHUA A. BERMEJO\nIT Student | Mobile & Web Applications\n\nABOUT\nI am a Bachelor of Science in Information Technology student specializing in Mobile and Web Applications, seeking opportunities to apply my technical knowledge and develop my skills through practical experience.\n\nEDUCATION\nNational University – Mall of Asia Campus\nBS Information Technology, Mobile and Web Applications | 2022 – Present\n\nImmaculate Mary Montessori School\nSenior High School, ICT | 2021 – 2022\n\nFEATURED PROJECT\nImmaCare+ — Mobile and web-based clinic management system\nCapstone project for Immaculate Conception Polyclinic Inc.\n\nTECHNICAL SKILLS\n${skillGroups.map((group) => `${group.name}: ${group.skills.join(', ')}`).join('\n')}\n\nPROFESSIONAL SKILLS\nProblem-solving and critical thinking; teamwork and collaboration; oral and written communication; adaptability and willingness to learn.\n\nCAREER OBJECTIVE\nBegin my career in IT, continuously improve my technical abilities, gain practical experience, and contribute effectively to the organization and development teams I work with.\n`
    const url = URL.createObjectURL(new Blob([profile], { type: 'text/plain;charset=utf-8' }))
    const link = document.createElement('a'); link.href = url; link.download = 'Miguel-Joshua-Bermejo-Profile.txt'; link.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }
  return <>
    <div className="page-progress" aria-hidden="true" />
    <div className="ambient-bg" aria-hidden="true"><span className="ambient-one" /><span className="ambient-two" /><span className="ambient-three" /></div>
    <div className="pointer-glow" aria-hidden="true" />
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="header-inner"><a className="wordmark" href="#home" aria-label="Miguel Bermejo home">mj<span>.</span><span className="wordmark-divider" /><span className="wordmark-name">MIGUEL BERMEJO</span></a><button className="menu-toggle" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'} <span>{menuOpen ? '−' : '+'}</span></button><nav id="main-navigation" className={menuOpen ? 'nav-open' : ''} aria-label="Main navigation">{[['home', 'Home'], ['profile', 'Profile'], ['work', 'Work'], ['skills', 'Skills'], ['process', 'Process']].map(([id, label]) => <a key={id} className={activeSection === id ? 'active' : ''} aria-current={activeSection === id ? 'location' : undefined} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s connect <Arrow diagonal /></a></nav></div></header>
    <main id="main">
      <section className="hero section-shell" id="home"><div className="hero-main"><div className="hero-copy"><div className="availability"><span className="tiny-dot" /> OPEN TO OPPORTUNITIES</div><p className="hero-intro">Hi, I’m Miguel Joshua Bermejo <span className="hello-star">✳</span></p><h1>Building what<br />comes <span>next.</span></h1><p className="hero-description">An IT student connecting thoughtful code with real-world solutions. Exploring mobile, web, and the technology that brings it all together.</p><div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <Arrow diagonal /></a><button className="button button-quiet" onClick={downloadProfile}>Download profile <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" /></svg></button></div><div className="hero-location"><span>⌖</span> Mobile & Web Applications <span className="location-divider">/</span> Ready to learn. Ready to contribute.</div></div><Orbit /></div><div className="hero-bottom"><span>DEVELOPER IN THE MAKING. PROBLEM SOLVER AT HEART.</span><a href="#about">SCROLL TO EXPLORE <span>↓</span></a></div></section>
      <div className="discipline-strip" aria-label="Areas of interest"><div className="section-shell"><span>Mobile & Web Development</span><i>✳</i><span>IT Systems & Hardware</span><i>✳</i><span>Networking</span><i>✳</i><span>Continuous Learning</span><i>✳</i></div></div>
      <section className="profile-section section-shell section-spacing" id="profile">
        <div className="section-kicker" data-reveal><span>01 / RECRUITER SNAPSHOT</span><span className="section-line" /><span>AT A GLANCE</span></div>
        <div className="profile-grid">
          <div className="profile-heading" data-reveal>
            <span className="profile-index">MJ / 2026</span>
            <h2>Ready to learn.<br /><span className="serif-accent">Built to contribute.</span></h2>
            <p>A developing IT professional with a broad technical foundation and a practical, team-first mindset.</p>
            <button className="button button-primary" onClick={downloadProfile}>Download profile <Arrow diagonal /></button>
          </div>
          <div className="profile-facts">
            <article data-reveal><small>FOCUS</small><strong>Mobile & Web Applications</strong><p>Turning requirements into useful, maintainable digital experiences.</p></article>
            <article data-reveal><small>TECHNICAL RANGE</small><strong>Software + Infrastructure</strong><p>Comfortable moving between code, databases, networks, and hardware.</p></article>
            <article data-reveal><small>WORK STYLE</small><strong>Curious, reliable, collaborative</strong><p>I ask clear questions, learn quickly, and stay open to feedback.</p></article>
            <article data-reveal><small>SEEKING</small><strong>Internship & entry-level opportunities</strong><p>Development, IT support, and hands-on technical roles.</p></article>
          </div>
        </div>
      </section>
      <section className="about-section section-shell section-spacing" id="about"><div className="section-kicker" data-reveal><span>02 / A LITTLE ABOUT ME</span><span className="section-line" /></div><div className="about-grid"><div data-reveal><h2>Curious by nature.<br /><span className="muted-heading">Technical by training.</span></h2><div className="about-signature">Miguel Joshua A. Bermejo <span>↗</span></div></div><div className="about-copy" data-reveal><p>I’m pursuing a <strong>BS in Information Technology</strong> at National University – Mall of Asia, specializing in Mobile and Web Applications.</p><p>I enjoy figuring out how things work, whether that means building an application, troubleshooting a computer, or connecting a network. I’m looking for opportunities to turn that curiosity into practical experience and meaningful contributions.</p><div className="trait-list"><span><i>↗</i> Problem solver</span><span><i>↗</i> Team player</span><span><i>↗</i> Always learning</span><span><i>↗</i> Clear communicator</span></div></div></div></section>
      <section className="work-section section-shell section-spacing" id="work"><div className="section-kicker" data-reveal><span>03 / SELECTED WORK</span><span className="section-line" /><span>IDEAS INTO APPLICATIONS</span></div><div className="section-heading" data-reveal><h2>Built for a <span className="serif-accent">real purpose.</span></h2><span className="small-label">01 FEATURED PROJECT</span></div><article className="project-card" data-reveal><div className="project-info"><div><div className="project-eyebrow"><span className="tiny-dot" /> CAPSTONE PROJECT <span> / </span> HEALTHCARE</div><h3>ImmaCare<span>+</span></h3><p className="project-subtitle">A more connected approach to clinic management.</p><p className="project-description">A mobile and web-based clinic management system developed for Immaculate Conception Polyclinic Inc. — bringing classroom knowledge to a real-world healthcare setting.</p><div className="project-proof"><span><small>CONTEXT</small>Real client use case</span><span><small>PLATFORMS</small>Mobile + web</span><span><small>APPROACH</small>Full SDLC thinking</span></div><div className="project-tags"><span>Web application</span><span>Mobile application</span><span>Clinic management</span></div></div><button className="project-link" onClick={() => dialogRef.current?.showModal()}>View case study <span><Arrow diagonal /></span></button><a className="project-link" href="https://immacare-clinic.it.com/" target="_blank" rel="noreferrer">Visit the live project <span><Arrow diagonal /></span></a></div></article></section>
      <section className="skills-section section-shell section-spacing" id="skills"><div className="section-kicker" data-reveal><span>04 / MY TOOLKIT</span><span className="section-line" /></div><div className="section-heading" data-reveal><h2>Versatile skills.<br /><span className="muted-heading">A growing foundation.</span></h2><p>From software to the systems it runs on.<br />Here’s what I bring to the table.</p></div><div className="skill-filters" role="group" aria-label="Filter technical skills" data-reveal>{['All skills', 'Software', 'Infrastructure'].map((filter) => <button key={filter} aria-pressed={skillFilter === filter} className={skillFilter === filter ? 'selected' : ''} onClick={() => setSkillFilter(filter)}>{filter}{filter === 'All skills' && <span>05</span>}</button>)}</div><div className="skills-grid">{skillGroups.filter((_, index) => skillFilter === 'All skills' || (skillFilter === 'Software' ? index < 2 : index >= 2)).map((group, index) => <article className="skill-card skill-card-enter" key={group.name}><div className="skill-card-top"><span className="skill-icon">{group.icon}</span><span>0{skillGroups.indexOf(group) + 1}</span></div><h3>{group.name}</h3><p>{group.description}</p><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul><span className="skill-card-corner" aria-hidden="true">{index % 2 === 0 ? '+' : '↗'}</span></article>)}</div><p className="skills-note" data-reveal><span>↳</span> Built on academic learning and hands-on experience. Always expanding.</p></section>
      <section className="process-section" id="process"><div className="section-shell section-spacing"><div className="section-kicker" data-reveal><span>05 / THE WAY I BUILD</span><span className="section-line" /><span>SDLC, IN PRACTICE</span></div><div className="section-heading" data-reveal><h2>Good solutions start<br />with a <span className="serif-accent">good process.</span></h2><p>A structured approach to thoughtful work.<br />The development cycle behind this portfolio.</p></div><div className="process-tabs" role="tablist" aria-label="Software development life cycle" data-reveal>{phases.map((item, index) => <button ref={(element) => { phaseRefs.current[index] = element }} key={item.name} role="tab" id={`phase-tab-${index}`} aria-selected={phase === index} aria-controls="phase-panel" tabIndex={phase === index ? 0 : -1} className={phase === index ? 'selected' : ''} onClick={() => setPhase(index)} onKeyDown={(event) => { let next = index; if (event.key === 'ArrowRight') next = (index + 1) % phases.length; else if (event.key === 'ArrowLeft') next = (index + phases.length - 1) % phases.length; else if (event.key === 'Home') next = 0; else if (event.key === 'End') next = phases.length - 1; else return; event.preventDefault(); setPhase(next); phaseRefs.current[next]?.focus() }}><span>0{index + 1}</span>{item.name}<Arrow /></button>)}</div><div className="process-panel" role="tabpanel" id="phase-panel" aria-labelledby={`phase-tab-${phase}`} tabIndex={0} data-reveal><div className="phase-art" aria-hidden="true"><div className="phase-art-square square-one" /><div className="phase-art-square square-two" /><div className="phase-art-square square-three" /><span>0{phase + 1}</span><small>THINK → BUILD → REFINE</small></div><div className="phase-copy" key={phase}><span className="small-label">{phases[phase].label}</span><h3>{phases[phase].title}</h3><p>{phases[phase].text}</p><div className="phase-output"><span>↳ OUTPUT</span>{phases[phase].output}</div></div></div></div></section>
      <section className="education-section section-shell section-spacing" id="education"><div className="section-kicker" data-reveal><span>06 / THE FOUNDATION</span><span className="section-line" /></div><div className="education-grid"><div data-reveal><h2>Learning today.<br /><span className="muted-heading">Building for tomorrow.</span></h2><p>Every chapter adds something<br />to the next.</p></div><div className="education-timeline" data-reveal><article><div className="education-meta"><span>2022 — PRESENT</span><span className="education-current">IN PROGRESS</span></div><h3>Bachelor of Science in Information Technology</h3><p>National University – Mall of Asia Campus</p><span className="education-tag">Mobile & Web Applications</span></article><article><div className="education-meta"><span>2021 — 2022</span></div><h3>Senior High School</h3><p>Immaculate Mary Montessori School</p><span className="education-tag">Information & Communications Technology</span></article></div></div></section>
      <section className="contact-section section-shell" id="contact" data-reveal><div className="contact-orbit" aria-hidden="true" /><div className="availability"><span className="tiny-dot" /> LET’S BUILD SOMETHING MEANINGFUL</div><h2>The next chapter<br />could start <span className="serif-accent">with you.</span></h2><p>I’m looking for opportunities to learn, contribute, and grow in IT.<br />Have a place for a curious mind on your team?</p><button className="button button-primary" onClick={downloadProfile}>Get my profile <Arrow diagonal /></button><div className="profile-links" aria-label="Professional profiles"><a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href="https://github.com/miguel100116" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a></div><div className="contact-note">Interested in development, IT support, and hands-on technical work.</div></section>
    </main>
    <footer className="site-footer section-shell"><a className="wordmark" href="#home" aria-label="Back to home">mj<span>.</span></a><span>© {new Date().getFullYear()} Miguel Joshua A. Bermejo</span><span>Made with purpose. Built to evolve.</span><a href="#home">Back to top ↑</a></footer>
    <dialog ref={dialogRef} className="project-dialog" aria-labelledby="project-title" onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close() }}><div className="dialog-header"><span className="small-label">FEATURED PROJECT / 01</span><button className="dialog-close" autoFocus onClick={() => dialogRef.current?.close()} aria-label="Close project details">×</button></div><div className="dialog-content"><span className="project-eyebrow">MOBILE + WEB · CAPSTONE</span><h2 id="project-title">ImmaCare<span className="serif-accent">+</span></h2><p className="dialog-lead">Technology for a more connected clinic.</p><div className="dialog-facts"><div><small>PROJECT TYPE</small><strong>Capstone project</strong></div><div><small>ORGANIZATION</small><strong>Immaculate Conception Polyclinic Inc.</strong></div></div><h3>The context</h3><p>ImmaCare+ is a mobile and web-based clinic management system developed as my capstone project. It applies my academic knowledge in mobile and web application development to a real-world clinic management use case.</p><h3>The focus</h3><p>The project connects my specialization in Mobile and Web Applications with a practical healthcare setting. It represents an opportunity to learn through application, solve problems, and contribute to a project with a clear purpose.</p><button className="button button-primary" onClick={() => dialogRef.current?.close()}>Back to portfolio <Arrow /></button></div></dialog>
  </>
}
export default App
