import React from "react";
import {
  FaBrain,
  FaRobot,
  FaPython,
  FaNetworkWired,
  FaCheckCircle,
  FaGraduationCap,
  FaBolt
} from "react-icons/fa";
import SEO from "../../../components/common/SEO";
import ServiceHero from "../../../components/services/ServiceHero";
import ServiceHighlights from "../../../components/services/ServiceHighlights";
import ServiceFAQ from "../../../components/services/ServiceFAQ";
import ServiceCTA from "../../../components/services/ServiceCTA";
import TestimonialCarousel from "../../../components/ui/TestimonialCarousel";
import { getCourseSchema, getFAQSchema } from "../../../utils/structuredData";
import "../../../styles/pages/service-detail.css";
import "../../../styles/pages/training.css";

export default function AiMlTraining() {
  const testimonials = [
    {
      text: "Pivoting from software testing to Data Science seemed hard, but this course made it seamless. I'm now a Data Analyst.",
      name: "Vikram Singh",
      role: "Data Analyst @ FinTech",
      img: "https://ui-avatars.com/api/?name=Vikram+S&background=random",
    },
    {
      text: "The Deep Learning projects are unmatched. Building a face recognition system was the highlight for me.",
      name: "Deepa Jain",
      role: "ML Engineer",
      img: "https://ui-avatars.com/api/?name=Deepa+J&background=random",
    },
    {
      text: "Clear explanations of complex math. If you want to understand what goes on under the hood of AI, this is it.",
      name: "Arjun Mohan",
      role: "AI Researcher",
      img: "https://ui-avatars.com/api/?name=Arjun+M&background=random",
    },
  ];

  const serviceData = {
    id: "ai-ml",
    title: "Artificial Intelligence & Machine Learning Masterclass",
    category: "Professional Training",
    accent: "#0ea5e9",
    bgLight: "rgba(14, 165, 233, 0.08)",
    heroDescription:
      "Master Python for Data Science, Supervised & Unsupervised Machine Learning, Deep Neural Networks, and Generative AI with hands-on GPU labs.",
    faq: [
      {
        q: "What are the prerequisites for the AI/ML training?",
        a: "Basic familiarity with high school mathematics and foundational programming logic. We cover complete Python from ground zero.",
      },
      {
        q: "Will I build real-world AI and GenAI projects?",
        a: "Yes, you will engineer real projects including predictive regression models, computer vision neural networks, and LLM-powered RAG chatbots.",
      },
      {
        q: "Do you provide GPU compute resources during the course?",
        a: "Yes, all students receive cloud GPU notebooks and dedicated guidance for training deep learning models on real datasets.",
      },
    ],
  };

  const courseData = {
    name: serviceData.title,
    description: serviceData.heroDescription,
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getCourseSchema(courseData),
      getFAQSchema(serviceData.faq),
    ],
  };

  return (
    <div className="sd-page training-page">
      <SEO
        title="AI & Machine Learning Training in Coimbatore | Python & Data Science - FlareMinds"
        description="Master the future with our AI & ML course. Learn Python, Deep Learning, and GenAI from industry experts. Start your journey in Artificial Intelligence today."
        keywords="AI ML training Coimbatore, machine learning course, data science training, Python for AI, deep learning course, artificial intelligence training"
        schema={combinedSchema}
      />

      {/* ── 1. Hero Section with Neural Network Visual ───────────────── */}
      <ServiceHero service={serviceData} slug="ai-ml" breadcrumbCategory="Training" />

      {/* ── 2. Highlights Ribbon ──────────────────────────────────────── */}
      <ServiceHighlights />

      {/* ── 3. Why Learn AI & ML ──────────────────────────────────────── */}
      <section className="sd-features-section section-padding">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="sd-section-badge" style={{ backgroundColor: "rgba(14, 165, 233, 0.08)", color: "#0ea5e9" }}>
              Future Technology
            </span>
            <h2 className="section-title">
              Why Master <span className="text-gradient">AI &amp; Data Science?</span>
            </h2>
            <p className="section-subtitle text-muted">
              The foundational technology shaping the next decade of software, automation, and global business intelligence.
            </p>
          </div>

          <div className="sd-features-grid">
            {[
              { num: "01", icon: <FaBrain />, title: "Artificial Intelligence", desc: "Build intelligent software agents that reason, process natural language, and automate workflows." },
              { num: "02", icon: <FaPython />, title: "Python for Data Science", desc: "Master NumPy, Pandas, Matplotlib, and Seaborn for enterprise data wrangling and visualization." },
              { num: "03", icon: <FaRobot />, title: "Machine Learning Models", desc: "Train regression, classification, clustering, and ensemble algorithms to predict real-world outcomes." },
              { num: "04", icon: <FaNetworkWired />, title: "Deep Neural Networks", desc: "Engineer CNNs for computer vision, RNNs for sequences, and Transformer architectures." },
              { num: "05", icon: <FaBolt />, title: "GenAI & LLM Integration", desc: "Build custom chatbots, embeddings, semantic search, and RAG pipelines using OpenAI APIs." },
              { num: "06", icon: <FaGraduationCap />, title: "100% Placement Support", desc: "Kaggle portfolio reviews, AI startup mock interviews, and career transition mentorship." },
            ].map((feat, i) => (
              <div key={i} className="sd-feature-card glass-card">
                <div className="sd-feat-top">
                  <span className="sd-feat-num">{feat.num}</span>
                  <span className="sd-feat-icon-pill" style={{ color: "#0ea5e9", backgroundColor: "rgba(14, 165, 233, 0.08)" }}>
                    {feat.icon}
                  </span>
                </div>
                <h3 className="sd-feat-title">{feat.title}</h3>
                <p className="sd-feat-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Curriculum Roadmap ─────────────────────────────────────── */}
      <section className="sd-process-section section-padding bg-light" id="curriculum">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="sd-section-badge" style={{ backgroundColor: "rgba(14, 165, 233, 0.08)", color: "#0ea5e9" }}>
              AI Mastery Roadmap
            </span>
            <h2 className="section-title">
              Complete <span className="text-gradient">Curriculum</span>
            </h2>
            <p className="section-subtitle text-muted">
              Structured from exploratory data analysis to complex neural network training and cloud model deployment.
            </p>
          </div>

          <div className="curriculum-grid">
            {[
              {
                num: "01",
                title: "Python & Data Science Foundations",
                desc: "NumPy, Pandas, Data Cleaning, Matplotlib, Seaborn",
                topics: ["Data Analysis & Wrangling", "Data Visualization & EDA", "Python Core & Object-Oriented Logic"],
              },
              {
                num: "02",
                title: "Machine Learning Algorithms",
                desc: "Supervised, Unsupervised, Model Validation & Tuning",
                topics: ["Regression & Classification", "Clustering & Dimensionality Reduction", "Model Evaluation & Hyperparameter Tuning"],
              },
              {
                num: "03",
                title: "Deep Learning & Computer Vision",
                desc: "Neural Networks, CNNs with TensorFlow & PyTorch",
                topics: ["Computer Vision & Convolutional Nets", "Tensor Operations & GPU Acceleration", "Keras & PyTorch API Mastery"],
              },
              {
                num: "04",
                title: "NLP & Generative AI Systems",
                desc: "Transformers, Large Language Models, Prompt Ops",
                topics: ["Sentiment Analysis & Vector Embeddings", "Chatbot & RAG Architecture", "OpenAI & HuggingFace Production APIs"],
              },
            ].map((module, idx) => (
              <div key={idx} className="module-card glass-card">
                <div className="module-number">{module.num}</div>
                <div className="module-content">
                  <h3>{module.title}</h3>
                  <p>{module.desc}</p>
                  <ul className="module-topics">
                    {module.topics.map((topic, i) => (
                      <li key={i}>
                        <FaCheckCircle className="check-icon" /> {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Student Success Stories ───────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="sd-section-badge" style={{ backgroundColor: "rgba(14, 165, 233, 0.08)", color: "#0ea5e9" }}>
              Career Transitions
            </span>
            <h2 className="section-title">
              Student <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="section-subtitle text-muted">
              Real results from graduates who launched high-growth careers in AI and Data Science.
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* ── 6. FAQ Accordion ─────────────────────────────────────────── */}
      <ServiceFAQ service={serviceData} />

      {/* ── 7. Final CTA ─────────────────────────────────────────────── */}
      <ServiceCTA service={serviceData} />
    </div>
  );
}
