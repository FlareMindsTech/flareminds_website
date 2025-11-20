import React from 'react';
import "../pages/css/web.css";

export default function WebDev() {
  const courses = [
    {
      title: 'Full-Stack Web Development (MERN)',
      mode: 'Online & Offline',
      highlights: [
        'HTML, CSS, JavaScript basics',
        'React fundamentals',
        'Node.js + Express API',
        'MongoDB database',
      ],
    },
    {
      title: 'Frontend Development (React)',
      mode: 'Online & Offline',
      highlights: [
        'React components & hooks',
        'Routing & state management',
        'API integration',
      ],
    },
    {
      title: 'Web Design & UI Essentials',
      mode: 'Online & Offline',
      highlights: [
        'Layout techniques',
        'Color theory & typography',
        'Responsive design patterns',
      ],
    },
  ];

  return (
    <main className="web-page">
      
      {/* ---------------- HEADER ---------------- */}
      <header className="web-header">
        <h1 className="web-title">Web Development Courses</h1>
        <p className="web-subtitle">
          Learn modern web development with structured training and hands-on projects.
        </p>
      </header>

      {/* ---------------- COURSES ---------------- */}
      <section className="web-course-list">
        {courses.map((c, i) => (
          <article key={i} className="web-card">
            <h3 className="course-title">{c.title}</h3>
            <p className="mode">Mode: {c.mode}</p>

            <ul className="course-list">
              {c.highlights.map((h, idx) => (
                <li key={idx}>{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* ---------------- WHAT IS WEB DEV ---------------- */}
      <section className="what-webdev">
        <h2 className="section-title">What is Web Development?</h2>

        <p className="web-brief">
          Web development is the process of creating websites and web applications.
        </p>

        <h3 className="small-title">It has 2 main parts:</h3>

        <div className="web-block">
          <h3 className="highlight-title">🔹 Frontend (Client-side)</h3>
          <p>
            What the user sees — design, buttons, layout.  
            Uses <strong>HTML, CSS, JavaScript</strong>.
          </p>
        </div>

        <div className="web-block">
          <h3 className="highlight-title">🔹 Backend (Server-side)</h3>
          <p>
            What the user cannot see — database, login system, APIs, server logic.  
            Uses <strong>Node.js, Express, Python, PHP, MongoDB, MySQL</strong>, etc.
          </p>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="web-footer">
        © {new Date().getFullYear()} Your Academy
      </footer>
    </main>
  );
}
