import React from 'react';



export default function AppDev() {
  const courses = [
    {
      title: 'React Native App Development',
      mode: 'Online & Offline',
      highlights: [
        'React Native fundamentals',
        'Navigation & components',
        'API integration & storage',
      ],
    },
    {
      title: 'Android Development (Kotlin)',
      mode: 'Online & Offline',
      highlights: [
        'Kotlin basics',
        'Android Studio workflow',
        'Jetpack components',
      ],
    },
    {
      title: 'iOS Development (SwiftUI)',
      mode: 'Online & Offline',
      highlights: [
        'Swift basics',
        'SwiftUI layouts',
        'Publishing workflow',
      ],
    },
  ];

  return (
    <main className="app-page">
      <header className="app-header">
        <h1>App Development Courses</h1>
        <p>Master cross‑platform and native app development with practical training.</p>
      </header>

      <section className="app-course-list">
        {courses.map((c, i) => (
          <article key={i} className="app-card">
            <h3>{c.title}</h3>
            <p className="mode">Mode: {c.mode}</p>
            <ul>
              {c.highlights.map((h, idx) => (
                <li key={idx}>• {h}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <footer className="app-footer">© {new Date().getFullYear()} Your Academy</footer>
    </main>
  );
}
