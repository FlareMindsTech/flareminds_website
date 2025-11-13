import React from 'react'

export default function About() {
  const team = [
    {
      name: "Asha",
      role: "Founder & CEO",
      bio: "15+ years in web design, branding, and digital strategy.",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Rohan",
      role: "Lead Developer",
      bio: "Full-stack expert specializing in React, Node.js & optimization.",
      image: "https://images.unsplash.com/photo-1603415526960-f7e0328bfa3e?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Sana",
      role: "Design Lead",
      bio: "UI/UX specialist focusing on modern design & motion graphics.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
    },

    // ⭐ NEW MEMBERS
    {
      name: "Vikram",
      role: "SEO Specialist",
      bio: "Organic growth strategist with 8+ years experience.",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Priya",
      role: "Content Strategist",
      bio: "Builds content that converts & strengthens brand voice.",
      image: "https://images.unsplash.com/photo-1524272332613-3d50e2b1e50d?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Aravind",
      role: "Marketing Manager",
      bio: "Expert in paid ads, funnels, and performance analytics.",
      image: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=300&q=80"
    },
  ];

  return (
    <div className="about-page container mx-auto px-6 py-16">
      <h2 className="about-title">About FlareMinds</h2>
      <p className="about-description">
        FlareMinds is a passionate team of designers, developers, and marketers
        focused on crafting impactful digital experiences.
      </p>

      {/* ⭐ 3D INFINITE SLIDER */}
      <section className="team-section">
        <h3 className="team-heading">Meet Our Team</h3>

        <div className="slider-container">
          <div className="slider-track">
            {team.concat(team).map((member, i) => (
              <div className="team-card-3d" key={i}>
                <img src={member.image} alt={member.name} />
                <h4>{member.name}</h4>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
