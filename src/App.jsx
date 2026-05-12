import { useState } from 'react';
import './App.css';
import longImage from '../long-image.png';

const engineeringFacts = [
  { label: 'Experience', value: '9+ years' },
  { label: 'Project Types', value: 'Bridges, towers, mixed-use, industrial' },
  { label: 'Software', value: 'AutoCAD, Revit, Tekla, ETABS, SAP2000' },
  { label: 'Specialties', value: 'Seismic design, retrofit, BIM coordination' },
];

const skills = [
  'Structural analysis',
  'AutoCAD / Revit / Tekla / BIM',
  'Concrete and steel design',
  'Site inspection',
  'Quantity estimation',
  'Project management',
];

const projects = [
  {
    name: 'Harbor Arc Bridge Upgrade',
    type: 'Transport Infrastructure',
    role: 'Lead Structural Engineer',
    tools: 'Tekla, SAP2000, Revit, BIM 360',
    problem:
      'Frequent heavy-load traffic and marine corrosion risk were reducing long-term reliability.',
    result:
      'Delivered a reinforced hybrid steel-concrete system that improved fatigue performance by 32%.',
  },
  {
    name: 'Central Civic Tower',
    type: 'High-Rise Commercial',
    role: 'Structural Design and Coordination Lead',
    tools: 'ETABS, Revit, AutoCAD, Navisworks',
    problem:
      'Strict drift and vibration limits conflicted with an aggressive construction schedule.',
    result:
      'Optimized core-outrigger geometry to cut lateral drift by 24% while preserving timeline milestones.',
  },
  {
    name: 'Northline Logistics Hub',
    type: 'Industrial Facility',
    role: 'Site Supervision and Planning Engineer',
    tools: 'AutoCAD, Primavera P6, Quantity Takeoff',
    problem:
      'The project required rapid phased handovers with minimal disruption to active logistics operations.',
    result:
      'Implemented phased execution plans that reduced coordination conflicts by 40% and improved safety KPI.',
  },
];

const process = ['Survey', 'Analysis', 'Modeling', 'Design', 'Execution', 'Review'];

const achievements = [
  'Chartered Professional Engineer (CPEng) - Structural Stream',
  'Best Urban Infrastructure Concept, National Engineering Forum 2024',
  'Delivered 60+ structural packages with zero major non-conformities',
  'Published seismic retrofit guidance for mid-rise reinforced concrete frames',
];

const services = [
  'Structural design',
  'Site supervision',
  'BIM modeling',
  'Estimation',
  'Construction planning',
];

const testimonials = [
  {
    quote:
      'Their structural clarity transformed a complex brief into a buildable, elegant system.',
    author: 'Project Director, UrbanSpan Developments',
  },
  {
    quote:
      'One of the most reliable engineers I have supervised in multidisciplinary coordination.',
    author: 'Senior Consultant, Atlas Engineering Group',
  },
  {
    quote:
      'Technical depth, site practicality, and excellent communication in every design review.',
    author: 'Professor of Structural Engineering',
  },
];

const plateNotes = [
  { key: 'A', title: 'Suspension Logic', text: 'Force pathways from deck through cables to anchor systems.' },
  { key: 'B', title: 'Braced Core', text: 'Lateral resistance through diagonals and rigid frame coupling.' },
  { key: 'C', title: 'Foundation Transfer', text: 'Load distribution optimized for variable subsoil capacity.' },
];

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="site plate-theme">
      <header className="top-ribbon">
        <p>Plate XXIV</p>
        <p>Modern Structures</p>
        <p>Vol. III</p>
      </header>

      <section className="hero" id="hero">
        <div className="paper-grain" aria-hidden="true" />
        <div className="plate-border" aria-hidden="true" />

        <div className="hero-content section-shell">
          <p className="eyebrow">Civil Engineering Portfolio</p>
          <h1>
            Civil Engineer | Designing durable, efficient, and future-ready
            structures
          </h1>
          <p className="hero-subtext">
            Structural design and delivery informed by bridge logic,
            skyscraper systems, and practical on-site execution. This portfolio
            is presented as a modern engineering plate: analytical, visual, and
            built for decision-makers.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact
            </a>
          </div>
        </div>

        <div className="hero-visual section-shell">
          <figure className="plate-image-wrap">
            <img src={longImage} alt="Illustrated engineering reference plate" />
            <figcaption>
              Bridges and skyscrapers reference plate, used as the visual DNA
              of this portfolio.
            </figcaption>
          </figure>

          <aside className="plate-notes" aria-label="Engineering notes">
            {plateNotes.map((note) => (
              <article key={note.key} className="note-card">
                <span>{note.key}</span>
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </article>
            ))}
          </aside>
        </div>
      </section>

      <section className="section-shell about" id="about">
        <div className="section-header">
          <p className="eyebrow">About / Profile</p>
          <h2>Engineering with precision, context, and long-term performance</h2>
        </div>
        <div className="about-layout">
          <p>
            I am a civil engineer focused on structural design, site
            supervision, BIM coordination, and multidisciplinary delivery across
            transport, vertical, and industrial systems. My process blends
            calculations, modeling, and field constraints into resilient,
            buildable outcomes.
          </p>
          <div className="fact-panel">
            {engineeringFacts.map((fact) => (
              <article key={fact.label} className="fact-item">
                <h3>{fact.label}</h3>
                <p>{fact.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell skills" id="skills">
        <div className="section-header">
          <p className="eyebrow">Core Skills</p>
          <h2>Technical capabilities across design and delivery</h2>
        </div>
        <div className="skill-grid engraved-grid">
          {skills.map((skill) => (
            <article key={skill} className="skill-chip">
              {skill}
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell projects" id="projects">
        <div className="section-header">
          <p className="eyebrow">Featured Projects</p>
          <h2>Selected work with measurable impact</h2>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article key={project.name} className="project-card">
              <div className="diagram" aria-hidden="true">
                <svg viewBox="0 0 320 170" role="img" aria-label={project.name}>
                  <rect x="15" y="20" width="290" height="130" rx="8" />
                  <line x1="20" y1="120" x2="300" y2="120" />
                  <path d={`M 30 120 C 90 ${40 + index * 8}, 210 ${40 + index * 8}, 290 120`} />
                  <line x1="75" y1="120" x2="75" y2="80" />
                  <line x1="130" y1="120" x2="130" y2="60" />
                  <line x1="190" y1="120" x2="190" y2="60" />
                  <line x1="245" y1="120" x2="245" y2="80" />
                </svg>
              </div>
              <h3>{project.name}</h3>
              <p>
                <strong>Type:</strong> {project.type}
              </p>
              <p>
                <strong>Role:</strong> {project.role}
              </p>
              <p>
                <strong>Tools:</strong> {project.tools}
              </p>
              <p>
                <strong>Problem Solved:</strong> {project.problem}
              </p>
              <p>
                <strong>Result:</strong> {project.result}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell method" id="process">
        <div className="section-header">
          <p className="eyebrow">Process / Method</p>
          <h2>From field data to validated structural delivery</h2>
        </div>
        <ol className="process-steps">
          {process.map((step, idx) => (
            <li key={step}>
              <span>{String(idx + 1).padStart(2, '0')}</span>
              <h3>{step}</h3>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-shell achievements" id="achievements">
        <div className="section-header">
          <p className="eyebrow">Achievements</p>
          <h2>Credentials and project-scale milestones</h2>
        </div>
        <div className="achievement-grid">
          {achievements.map((item) => (
            <article key={item} className="achievement-item">
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell services" id="services">
        <div className="section-header">
          <p className="eyebrow">Services</p>
          <h2>Support across planning, design, and construction stages</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service} className="service-card">
              <h3>{service}</h3>
              <p>
                Structured, standards-compliant deliverables tailored to project
                constraints and stakeholder goals.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell testimonials" id="testimonials">
        <div className="section-header">
          <p className="eyebrow">Testimonials</p>
          <h2>What collaborators say</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="testimonial-card">
              <blockquote>{testimonial.quote}</blockquote>
              <p>{testimonial.author}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell contact" id="contact">
        <div className="section-header">
          <p className="eyebrow">Contact</p>
          <h2>Start a project conversation</h2>
        </div>
        <div className="contact-layout">
          <div className="contact-links">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:engineer@structuralstudio.com">
                engineer@structuralstudio.com
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                linkedin.com/in/civil-engineer
              </a>
            </p>
            <p>
              <strong>Phone:</strong> +1 (555) 102-2048
            </p>
            <a className="btn btn-secondary" href="/civil-engineer-cv.txt" download>
              Download CV
            </a>
          </div>

          <form className="contact-form" onSubmit={handleContactSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required />

            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
            {submitted ? <p className="form-status">Message drafted. Thank you.</p> : null}
          </form>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <p>The art of construction is the union of science and industry.</p>
      </footer>
    </main>
  );
}

export default App;
