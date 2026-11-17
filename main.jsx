import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, Palette, Layers3 } from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01", name: "ImpactU", category: "Web application", tag: "COMMUNITY", visual: "impact",
    description: "A volunteer-to-school matching platform designed to connect people who want to give back with schools looking for support.",
    stack: ["React", "JavaScript", "Firebase", "Tailwind CSS"],
    links: [
      ["Live site", "https://dev-divas-7f149.web.app/"],
      ["GitHub", "https://github.com/UW-INFO442-WI26/dev-divas"],
    ]
  },
  {
    number: "02", name: "JogLog", category: "Web application", tag: "WELLNESS", visual: "jog",
    description: "A running tracker built to help runners record their activity and keep a personal log of their runs.",
    stack: ["React", "Firebase"],
    links: [["Live site", "https://joglog-9d888.web.app/"], ["GitHub", "https://github.com/info340-au25a/project-JogLog"]]
  },
  {
    number: "03", name: "Group Chat Database", category: "Database project", tag: "BACKEND", visual: "database",
    description: "A relational database backend for a group chat application, supporting user accounts, channel management, membership, and persistent messaging.",
    stack: ["PostgreSQL", "SQL", "pgAdmin"],
    links: [["GitHub", "https://github.com/mounaabrous/group-chat-database"]]
  },
  {
    number: "04", name: "University Course Registration", category: "Systems design", tag: "SYSTEMS", visual: "registration",
    description: "A course registration system concept focused on course search, schedule planning, waitlist tracking, and advisor override workflows.",
    stack: ["Figma", "Systems design", "UI/UX"],
    links: [["Project site", "https://mumtazuw.github.io/INFO-380-Team-8-Project/"]]
  },
  {
    number: "05", name: "SafeScroll", category: "Product & UI/UX prototype", tag: "DIGITAL WELLBEING", visual: "safe",
    description: "A social media wellness concept with content filtering, screen-time controls, progress tracking, and resources that encourage healthier scrolling habits.",
    stack: ["Figma", "Wireframing", "Prototyping"],
    links: [["Interactive prototype", "https://www.figma.com/proto/aaBCEzIKOBorhvdEwnQH6y/Untitled?node-id=3-5&starting-point-node-id=3%3A5"]]
  },
  {
    number: "06", name: "Language Learning App", category: "Women in Informatics Hackathon", tag: "HACKATHON", visual: "language",
    description: "A community-driven language learning app concept featuring interactive simulations and live classes, designed with an emphasis on accessible, intuitive experiences.",
    stack: ["Figma", "HTML", "CSS"],
    links: [["Figma design", "https://www.figma.com/design/zfKzDt7jR6jPcPgflrO7a0/Speaker-%E2%80%94-Language-Learning-App-%7C-Mobile-UI-Kit--Community-?node-id=0-1&p=f&t=CIRwfyaa2eOAO8UO-0"]]
  }
];

const experiences = [
  {
    role: "Software Development Intern", org: "Computing For All", date: "SUMMER 2025 & 2026",
    detail: "Returned for a second summer in a software development environment, collaborating with a team and building hands-on web application experience."
  },
  {
    role: "Data Analytics Extern", org: "Beats by Dre", date: "EXTERNSHIP",
    detail: "Explored qualitative and quantitative insights using Python, Google Colab, sentiment analysis, and AI-supported data visualization."
  }
];

function ProjectArt({ type }) {
  const art = {
    impact: <div className="art-impact"><span className="tiny-label">FIND YOUR IMPACT</span><div className="orbit"><span>✳</span><b>people<br/>× purpose</b></div><div className="thin-lines"><i/><i/><i/></div></div>,
    jog: <div className="art-jog"><span className="tiny-label">YOUR RUN, YOUR STORY</span><svg viewBox="0 0 320 130"><path d="M12 100 C55 10 95 120 140 62 S210 8 250 66 S285 100 308 20" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="5 7"/><circle cx="12" cy="100" r="6" fill="#e77c61"/><circle cx="308" cy="20" r="6" fill="#e77c61"/></svg><div className="run-stats"><b>5.2 <small>KM</small></b><b>32:18 <small>TIME</small></b></div></div>,
    database: <div className="art-database"><div className="cylinder"><b>CHAT</b><i/><i/><i/></div><code>SELECT *<br/>FROM messages<br/>ORDER BY created_at;</code></div>,
    registration: <div className="art-registration"><div className="reg-head">MY REGISTRATION <span>•••</span></div>{[["INFO 380","Registered","✓"],["INFO 442","Waitlist #2","↗"],["INFO 340","Saved plan","+"]].map(x=><div className="reg-row" key={x[0]}><b>{x[0]}</b><span>{x[1]} <em>{x[2]}</em></span></div>)}</div>,
    safe: <div className="art-safe"><div className="phone"><span className="tiny-label">YOUR SPACE</span><b>Scroll with<br/><i>intention.</i></b><div className="toggle">● Content filters <strong>ON</strong></div><div className="progress"><i/></div></div><span className="safe-star">✳</span></div>,
    language: <div className="art-language"><span className="tiny-label">SAY IT YOUR WAY</span><div className="bubbles"><b>Hola!</b><b>Bonjour</b><b>مرحبا</b></div><div className="lang-foot">learn together <span>↗</span></div></div>
  };
  return <div className={`project-art ${type}`}>{art[type]}</div>;
}

function App() {
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const visible = projects.filter(p => filter === "All" ||
    (filter === "Development" && ["ImpactU", "JogLog", "Group Chat Database"].includes(p.name)) ||
    (filter === "Design" && ["University Course Registration", "SafeScroll"].includes(p.name)) ||
    (filter === "Hackathons" && p.name === "Language Learning App"));
  const closeMenu = () => setMenuOpen(false);

  return <div className="shell">
    <div className="topline"><span>MO / PORTFOLIO</span><span>UNIVERSITY OF WASHINGTON · INFORMATICS</span><span>SEATTLE, WA</span></div>
    <header className="navbar">
      <a className="logo" href="#home" onClick={closeMenu}>MA<span>✳</span></a>
      <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="#about" onClick={closeMenu}>About</a><a href="#work" onClick={closeMenu}>Work</a>
        <a href="#experience" onClick={closeMenu}>Experience</a><a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="nav-pill" href="mailto:YOUR_EMAIL@example.com">Let's talk <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section className="hero section" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><i/> OPEN TO NEW-GRAD OPPORTUNITIES</div>
          <h1>Hi, I'm Mouna<span>.</span><br/><em>I make ideas</em><br/>work for people<span>.</span></h1>
          <p>I'm a University of Washington Informatics student interested in building thoughtful technology — from useful software to experiences that make everyday things easier.</p>
          <div className="hero-actions"><a className="button dark" href="#work">Explore my work <ArrowDownRight size={17}/></a><a className="under-link" href="#about">A little about me <ArrowUpRight size={15}/></a></div>
        </div>
        <div className="hero-art">
          <span className="art-note">CURIOUS<br/>BY NATURE</span><div className="sun"/><div className="arch"><div/></div>
          <span className="flower">✳</span><span className="scribble">build with<br/>intention ↗</span><span className="art-caption">FIG. 01 — IDEAS IN MOTION</span>
        </div>
        <div className="scroll-hint">SCROLL TO EXPLORE <i/></div>
      </section>

      <section className="about section" id="about">
        <div className="section-label"><span>01 / ABOUT</span><span>THE PERSON BEHIND THE PROJECTS</span></div>
        <div className="about-grid">
          <h2>Technology is<br/>better when it<br/><em>starts with people.</em></h2>
          <div className="about-copy">
            <p>I'm Mouna, a senior studying Informatics with a Buisness Administration minor at the University of Washington. I enjoy the space where technology, design, and problem-solving meet.</p>
            <p>My work spans web development, database design, product thinking, and UI/UX prototyping. I like understanding a problem from the user's perspective and turning that understanding into something practical.</p>
            <div className="stats"><div><b>06</b><span>PROJECTS &<br/>PROTOTYPES</span></div><div><b>03</b><span>AREAS I LOVE<br/>TO EXPLORE</span></div><div><b>01</b><span>QUESTION: HOW<br/>CAN THIS BE BETTER?</span></div></div>
          </div>
        </div>
        <div className="interests"><span>WHAT I'M INTO</span><b>Software development</b><i>✳</i><b>Product thinking</b><i>✳</i><b>Human-centered design</b><i>✳</i><b>Data & insights</b></div>
      </section>

      <section className="work section" id="work">
        <div className="section-label"><span>02 / SELECTED WORK</span><span>A MIX OF BUILDING, DESIGNING & EXPLORING</span></div>
        <div className="work-intro"><h2>Things I've<br/><em>worked on.</em></h2><p>A selection of class projects, independent builds, and collaborative design work. Each one taught me a different way to approach a problem.</p></div>
        <div className="filters">{["All", "Development", "Design", "Hackathons"].map(f=><button key={f} onClick={()=>setFilter(f)} className={filter===f?"selected":""}>{f}</button>)}</div>
        <div className="project-grid">{visible.map(p=><article className="project-card" key={p.number}>
          <ProjectArt type={p.visual}/>
          <div className="project-meta"><span>{p.number} / {p.category}</span><span>{p.tag}</span></div>
          <h3>{p.name}</h3><p>{p.description}</p>
          <div className="tags">{p.stack.map(s=><span key={s}>{s}</span>)}</div>
          <div className="project-links">{p.links.map(([label,url])=><a key={label} href={url} target="_blank" rel="noreferrer">{label} <ArrowUpRight size={14}/></a>)}</div>
        </article>)}</div>
      </section>

      <section className="approach section">
        <div className="section-label"><span>03 / HOW I THINK</span><span>MY APPROACH</span></div>
        <div className="approach-grid">
          <div><span className="approach-icon"><Code2/></span><small>01</small><h3>Build with<br/><em>curiosity.</em></h3><p>I enjoy learning by doing — exploring tools, writing code, and figuring out how the pieces fit together.</p></div>
          <div><span className="approach-icon"><Palette/></span><small>02</small><h3>Design for<br/><em>real people.</em></h3><p>Good technology should feel clear and useful. I think about the people using a product, not just the features.</p></div>
          <div><span className="approach-icon"><Layers3/></span><small>03</small><h3>Connect the<br/><em>big picture.</em></h3><p>From data and systems to interfaces and workflows, I like seeing how individual decisions shape the whole experience.</p></div>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="section-label"><span>04 / EXPERIENCE</span><span>LEARNING BY DOING</span></div>
        <div className="experience-grid"><h2>Where I've<br/><em>grown.</em></h2><div>{experiences.map((e,i)=><article className="experience-item" key={e.org}><span className="exp-num">0{i+1}</span><div><small>{e.date}</small><h3>{e.role}</h3><b>{e.org}</b><p>{e.detail}</p></div><ArrowUpRight className="exp-arrow"/></article>)}</div></div>
      </section>

      <section className="skills section">
        <div className="section-label"><span>05 / TOOLKIT</span><span>TOOLS I'VE WORKED WITH</span></div>
        <div className="skills-grid"><h2>A growing<br/><em>toolkit.</em></h2><div className="skill-list">
          <div><small>LANGUAGES & WEB</small><p>JavaScript · Python · HTML · CSS · React</p></div>
          <div><small>DATA & BACKEND</small><p>SQL · PostgreSQL · Firebase · Flask</p></div>
          <div><small>DESIGN & WORKFLOW</small><p>Figma · Git · Agile / Scrum · UI/UX prototyping</p></div>
        </div></div>
        <p className="skills-note">Tools I've worked with across projects and experience — and I'm always learning something new.</p>
      </section>

      <section className="contact section" id="contact">
        <span className="contact-star">✳</span><small>HAVE A PROJECT, ROLE, OR IDEA IN MIND?</small>
        <h2>Let's make<br/><em>something matter.</em></h2>
        <p>I'm excited to connect with people building useful, thoughtful technology.</p>
        <a className="button light" href="mailto:mounaabrous63@gmail.com">Get in touch <ArrowUpRight size={17}/></a>
        <div className="socials"><a href="https://www.linkedin.com/in/mabrous/" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a><a href="https://github.com/mounaabrous" target="_blank" rel="noreferrer"><Github/> GitHub</a><a href="mailto:mounaabrous63@gmail.com"><Mail/> Email</a></div>
      </section>
    </main>
    <footer className="footer"><a className="logo" href="#home">MA<span>✳</span></a><span>DESIGNED & BUILT BY MOUNA ABROUS</span><a href="#home">BACK TO TOP ↑</a><span>© 2026</span></footer>
  </div>;
}

createRoot(document.getElementById("root")).render(<App/>);
