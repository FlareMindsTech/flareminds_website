import { useEffect } from "react";
import {
  FaProjectDiagram,
  FaUsers,
  FaLaptopCode,
  FaBriefcase,
  FaCheck,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

export default function App() {

  /* ---------------------- Typing Effect ---------------------- */
  useEffect(() => {
    const textElement = document.getElementById("typing-text");
    const phrases = ["Web Developer", "Full Stack Developer", "DevOps Developer"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    let timeoutId;

    function type() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
      } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500
      }

      timeoutId = setTimeout(type, typeSpeed);
    }

    type();

    return () => clearTimeout(timeoutId);
  }, []);

  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  
  useEffect(() => {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dotsContainer = document.getElementById('carousel-dots');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentSlide = 0;
    let autoSlideInterval;

    
    if (dotsContainer) dotsContainer.innerHTML = '';

    
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.className = 'dot-indicator' + (index === 0 ? ' active' : '');
      dot.onclick = () => goToSlide(index);
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot-indicator');

    function updateSlides() {
      slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (dots[index]) dots[index].classList.remove('active');
        if (index === currentSlide) {
          slide.classList.add('active');
          if (dots[index]) dots[index].classList.add('active');
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlides();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlides();
    }

    function goToSlide(index) {
      currentSlide = index;
      updateSlides();
    }

    if (nextBtn) nextBtn.onclick = nextSlide;
    if (prevBtn) prevBtn.onclick = prevSlide;

    
    autoSlideInterval = setInterval(nextSlide, 5000);

    return () => clearInterval(autoSlideInterval);
  }, []);
  useEffect(() => {
    const container = document.getElementById('particles');
    
    if (container) container.innerHTML = '';

    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = Math.random() * 5 + 'px';
      particle.style.height = particle.style.width;
      particle.style.background = `rgba(14, 165, 233, ${Math.random() * 0.2})`;
      particle.style.borderRadius = '50%';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;

      container.appendChild(particle);
    }
  }, []);

  return (
    <>
     
      <div className="bg-gradient"></div>
      <div className="bg-particles" id="particles"></div>

     
      <header className="hero" id="home">
        <div className="container hero-container">
          <div className="hero-content fade-in-up">
            <div className="badge">New Batch Starting Soon</div>
            <h1 className="hero-title">
              Become a <br /> <span className="text-gradient" id="typing-text"></span>
            </h1>
            <p className="hero-subtitle">
              Master modern web development with the most comprehensive, project-based course
              available. Go from zero to hired in 6 months.
            </p>
            <div className="hero-cta">
              <a href="#curriculum" className="btn btn-primary glow-effect">Start Learning Today</a>
              <a href="#curriculum" className="btn btn-secondary">View Curriculum</a>
            </div>
          </div>
          <div className="hero-visual fade-in-left">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-2974925-2477356.png"
              alt="Web Development Illustration"
              style={{ width: "100%", filter: "drop-shadow(0 10px 20px rgba(56, 189, 248, 0.2))", animation: "float 6s ease-in-out infinite" }}
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <h2 className="section-title">
              Why Choose <span className="text-gradient">DevMastery?</span>
            </h2>
            <p className="section-subtitle">We don't just teach code. We teach you how to think like a senior developer.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card glass-card fade-in-up delay-100">
              <div className="feature-icon">
                <FaProjectDiagram />
              </div>
              <h3>Project-Based Learning</h3>
              <p>Build 10+ production-ready applications, not just to-do lists. Create a portfolio that gets you hired.</p>
            </div>
            <div className="feature-card glass-card fade-in-up delay-200">
              <div className="feature-icon">
                <FaUsers />
              </div>
              <h3>Active Community</h3>
              <p>Join our private Discord server. Get code reviews, pair programming partners, and 24/7 support.</p>
            </div>
            <div className="feature-card glass-card fade-in-up delay-300">
              <div className="feature-icon">
                <FaLaptopCode />
              </div>
              <h3>Modern Tech Stack</h3>
              <p>Learn the latest tools: React 18, Next.js, TypeScript, Tailwind CSS, Node.js, and more.</p>
            </div>
            <div className="feature-card glass-card fade-in-up delay-400">
              <div className="feature-icon">
                <FaBriefcase />
              </div>
              <h3>Career Guidance</h3>
              <p>Resume reviews, mock interviews, and salary negotiation tips to help you land your dream job.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="curriculum" id="curriculum">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <h2 className="section-title">
              What You'll <span className="text-gradient">Learn</span>
            </h2>
            <p className="section-subtitle">A structured path from beginner to professional full-stack developer.</p>
          </div>
          <div className="curriculum-grid">
            <div className="module-card glass-card fade-in-left">
              <div className="module-number">01</div>
              <div className="module-content">
                <h3>Web Fundamentals</h3>
                <p>HTML5, CSS3, Responsive Design, Git & GitHub</p>
                <ul className="module-topics">
                  <li><FaCheck /> Semantic HTML</li>
                  <li><FaCheck /> Flexbox & Grid</li>
                  <li><FaCheck /> Version Control</li>
                </ul>
              </div>
            </div>
            <div className="module-card glass-card fade-in-right">
              <div className="module-number">02</div>
              <div className="module-content">
                <h3>JavaScript Mastery</h3>
                <p>ES6+, DOM Manipulation, Async Programming, APIs</p>
                <ul className="module-topics">
                  <li><FaCheck /> Modern Syntax</li>
                  <li><FaCheck /> Promises & Async/Await</li>
                  <li><FaCheck /> Functional Programming</li>
                </ul>
              </div>
            </div>
            <div className="module-card glass-card fade-in-left">
              <div className="module-number">03</div>
              <div className="module-content">
                <h3>React Ecosystem</h3>
                <p>React 18, Hooks, Redux Toolkit, React Router</p>
                <ul className="module-topics">
                  <li><FaCheck /> Component Architecture</li>
                  <li><FaCheck /> State Management</li>
                  <li><FaCheck /> Custom Hooks</li>
                </ul>
              </div>
            </div>
            <div className="module-card glass-card fade-in-right">
              <div className="module-number">04</div>
              <div className="module-content">
                <h3>Backend & Database</h3>
                <p>Node.js, Express, MongoDB, Authentication</p>
                <ul className="module-topics">
                  <li><FaCheck /> RESTful APIs</li>
                  <li><FaCheck /> JWT Auth</li>
                  <li><FaCheck /> Database Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <h2 className="section-title">
              Student <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="section-subtitle">Join thousands of students who have transformed their careers.</p>
          </div>
          <div className="testimonial-carousel-container glass-card fade-in-up">
            <div className="testimonial-track" id="testimonial-track">
              {/* Testimonial 1 */}
              <div className="testimonial-slide active">
                <div className="testimonial-content">
                  <div className="quote-icon"><FaQuoteLeft /></div>
                  <p className="testimonial-text">"This course changed my life. I went from working in retail to a Junior
                    Developer role in just 5 months. The projects are exactly what employers are looking for."</p>
                  <div className="testimonial-author">
                    <img src="https://ui-avatars.com/api/?name=Sarah+J&background=random" alt="Sarah J" className="author-img" />
                    <div className="author-info">
                      <h4>Sarah Jenkins</h4>
                      <p>Frontend Developer @ TechStart</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="testimonial-slide">
                <div className="testimonial-content">
                  <div className="quote-icon"><FaQuoteLeft /></div>
                  <p className="testimonial-text">"The depth of the backend module is incredible. I finally understand how
                    authentication and databases work together. Highly recommended!"</p>
                  <div className="testimonial-author">
                    <img src="https://ui-avatars.com/api/?name=Mike+T&background=random" alt="Mike T" className="author-img" />
                    <div className="author-info">
                      <h4>Mike Thompson</h4>
                      <p>Full Stack Engineer @ DataFlow</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="testimonial-slide">
                <div className="testimonial-content">
                  <div className="quote-icon"><FaQuoteLeft /></div>
                  <p className="testimonial-text">"Best investment I've made for my career. The community support is amazing,
                    and the instructor explains complex concepts simply."</p>
                  <div className="testimonial-author">
                    <img src="https://ui-avatars.com/api/?name=Elena+R&background=random" alt="Elena R" className="author-img" />
                    <div className="author-info">
                      <h4>Elena Rodriguez</h4>
                      <p>Web Developer @ CreativeAgency</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-controls">
              <button className="control-btn prev" id="prev-btn"><FaChevronLeft /></button>
              <div className="carousel-dots" id="carousel-dots"></div>
              <button className="control-btn next" id="next-btn"><FaChevronRight /></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
