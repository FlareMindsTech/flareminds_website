import { useEffect } from "react";
import "../css/web.css";
import {
  FaMobileAlt,
  FaLayerGroup,
  FaCode,
  FaRocket,
  FaCheck,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

export default function AppDev() {

  /* ---------------------- Typing Effect ---------------------- */
  useEffect(() => {
    const textElement = document.getElementById("typing-text");
    const phrases = ["App Developer", "Mobile App Engineer", "React Native Developer", "Flutter Developer"];
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
        typeSpeed = 50; // Faster when deleting
      } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100; // Normal typing speed
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end of phrase
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Pause before typing next phrase
      }

      timeoutId = setTimeout(type, typeSpeed);
    }

    type();

    return () => clearTimeout(timeoutId);
  }, []);

  /* ---------------------- Scroll Animation ---------------------- */
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

  /* ---------------------- Carousel ---------------------- */
  useEffect(() => {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dotsContainer = document.getElementById('carousel-dots');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentSlide = 0;
    let autoSlideInterval;

    // Clear existing dots to prevent duplication on re-renders
    if (dotsContainer) dotsContainer.innerHTML = '';

    // Create dots
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

    // Auto rotate
    autoSlideInterval = setInterval(nextSlide, 5000);

    return () => clearInterval(autoSlideInterval);
  }, []);

  /* ---------------------- Particle Background ---------------------- */
  useEffect(() => {
    const container = document.getElementById('particles');
    // Clear existing particles
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
      {/* Background Elements */}
      <div className="bg-gradient"></div>
      <div className="bg-particles" id="particles"></div>

      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="container hero-container">
          <div className="hero-content fade-in-up">
            <div className="badge">New Mobile Batch Starting Soon</div>
            <h1 className="hero-title">
              Become an <br /> <span className="text-gradient" id="typing-text"></span>
            </h1>
            <p className="hero-subtitle">
              Learn to build high-performance Android, iOS, and cross-platform mobile apps with real projects.
            </p>
            <div className="hero-cta">
              <a href="#curriculum" className="btn btn-primary glow-effect">Start Learning Today</a>
              <a href="#curriculum" className="btn btn-secondary">View Curriculum</a>
            </div>
          </div>
          <div className="hero-visual fade-in-left">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-2974925-2477356.png"
              alt="Mobile App Development Illustration"
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
              Why Learn <span className="text-gradient">App Development?</span>
            </h2>
            <p className="section-subtitle">Build apps that impact millions of users every day.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card glass-card fade-in-up delay-100">
              <div className="feature-icon">
                <FaMobileAlt />
              </div>
              <h3>Android & iOS</h3>
              <p>Learn to build native-quality apps for both platforms.</p>
            </div>
            <div className="feature-card glass-card fade-in-up delay-200">
              <div className="feature-icon">
                <FaLayerGroup />
              </div>
              <h3>Cross Platform</h3>
              <p>Build apps using Flutter & React Native with single codebase.</p>
            </div>
            <div className="feature-card glass-card fade-in-up delay-300">
              <div className="feature-icon">
                <FaCode />
              </div>
              <h3>Modern Mobile Stack</h3>
              <p>Flutter, React Native, Firebase, API Integration, UI/UX.</p>
            </div>
            <div className="feature-card glass-card fade-in-up delay-400">
              <div className="feature-icon">
                <FaRocket />
              </div>
              <h3>Launch-Ready Apps</h3>
              <p>Deploy apps to Play Store & App Store with full guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="curriculum" id="curriculum">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <h2 className="section-title">
              App Development <span className="text-gradient">Curriculum</span>
            </h2>
            <p className="section-subtitle">Learn everything from UI to APIs to publishing apps.</p>
          </div>
          <div className="curriculum-grid">
            <div className="module-card glass-card fade-in-left">
              <div className="module-number">01</div>
              <div className="module-content">
                <h3>Mobile Basics</h3>
                <p>Dart, JavaScript, Mobile UI, App Architecture</p>
                <ul className="module-topics">
                  <li><FaCheck /> UI Widgets</li>
                  <li><FaCheck /> Layouts</li>
                  <li><FaCheck /> Navigation</li>
                </ul>
              </div>
            </div>
            <div className="module-card glass-card fade-in-right">
              <div className="module-number">02</div>
              <div className="module-content">
                <h3>Flutter Development</h3>
                <p>Dart Language, Widgets, State Management</p>
                <ul className="module-topics">
                  <li><FaCheck /> Bloc & Provider</li>
                  <li><FaCheck /> Animations</li>
                  <li><FaCheck /> Responsive UI</li>
                </ul>
              </div>
            </div>
            <div className="module-card glass-card fade-in-left">
              <div className="module-number">03</div>
              <div className="module-content">
                <h3>React Native</h3>
                <p>React Native Core, Hooks, Expo</p>
                <ul className="module-topics">
                  <li><FaCheck /> Navigation</li>
                  <li><FaCheck /> Axios API</li>
                  <li><FaCheck /> Components</li>
                </ul>
              </div>
            </div>
            <div className="module-card glass-card fade-in-right">
              <div className="module-number">04</div>
              <div className="module-content">
                <h3>Backend & Firebase</h3>
                <p>Firebase Auth, Firestore, API integration</p>
                <ul className="module-topics">
                  <li><FaCheck /> JWT Auth</li>
                  <li><FaCheck /> RESTful APIs</li>
                  <li><FaCheck /> Database Rules</li>
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
              Student <span className="text-gradient">Reviews</span>
            </h2>
            <p className="section-subtitle">What our mobile developers say.</p>
          </div>
          <div className="testimonial-carousel-container glass-card fade-in-up">
            <div className="testimonial-track" id="testimonial-track">
              {/* Testimonial 1 */}
              <div className="testimonial-slide active">
                <div className="testimonial-content">
                  <div className="quote-icon"><FaQuoteLeft /></div>
                  <p className="testimonial-text">"I published my first Flutter app within 3 months of joining this course!"</p>
                  <div className="testimonial-author">
                    <img src="https://ui-avatars.com/api/?name=Arun+Prakash&background=random" alt="Arun Prakash" className="author-img" />
                    <div className="author-info">
                      <h4>Arun Prakash</h4>
                      <p>Flutter Developer @ AppKart</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="testimonial-slide">
                <div className="testimonial-content">
                  <div className="quote-icon"><FaQuoteLeft /></div>
                  <p className="testimonial-text">"React Native module helped me get a freelance project in the first month."</p>
                  <div className="testimonial-author">
                    <img src="https://ui-avatars.com/api/?name=Nisha+K&background=random" alt="Nisha K" className="author-img" />
                    <div className="author-info">
                      <h4>Nisha K</h4>
                      <p>React Native Developer</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="testimonial-slide">
                <div className="testimonial-content">
                  <div className="quote-icon"><FaQuoteLeft /></div>
                  <p className="testimonial-text">"The Firebase and backend integration lessons were the best. Super easy to follow!"</p>
                  <div className="testimonial-author">
                    <img src="https://ui-avatars.com/api/?name=Sanjay+R&background=random" alt="Sanjay R" className="author-img" />
                    <div className="author-info">
                      <h4>Sanjay R</h4>
                      <p>Mobile Developer @ BitWave</p>
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
