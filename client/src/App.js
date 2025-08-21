import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import axios from "axios";

const API = process.env.REACT_APP_API || "http://localhost:5000/api";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [theme, setTheme] = useState("dark");
  const [modalImage, setModalImage] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  // Dynamic titles
  const titles = ["Web Developer", "Software Developer", "Problem Solver"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2000); // Change every 2s
    return () => clearInterval(interval);
  }, []);
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e) {
    e.preventDefault();
    setStatus("Sending...");
    try {
      await axios.post(`${API}/contact`, form);
      setStatus("Message sent — thank you!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Failed to send. Try again later.");
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const SkillBar = ({ skill, percentage }) => (
    <div className="skill-bar">
      <span className="skill-name">{skill}</span>
      <div className="bar">
        <div className="fill" style={{ width: `${percentage}%` }}></div>
      </div>
      <span className="percentage">{percentage}%</span>
    </div>
  );

  return (
    <div className={`page ${theme}`}>
      {/* Navbar */}
      <nav className="nav">
        <div className="logo">Nitesh Jindal</div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">My Skills</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#certifications">Certifications</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          {/* <li>
            <a href="#gallery">Gallery</a>
          </li> */}
          {/* <li>
            <button className="btn btn-contact" onClick={() => setShowContactForm(true)}>Contact Us</button>
          </li> */}
        </ul>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </nav>

      {/* Hero Section */}

      <header className="hero fade-in">
        <div className="hero-container">

          {/* Left Side - Image */}
          <div className="hero-image">
            <img src="/images/img2.jpg" alt="Nitesh Jindal" />
          </div>

          {/* Right Side - Text */}
          <div className="hero-text">
            <h1>Hi, I'm Nitesh Jindal</h1>
            <p className="dynamic-title">{titles[currentTitleIndex]}</p>
            <div className="hero-cta">
              <button
                className="btn btn-contact"
                onClick={() => setShowContactForm(true)}
              >
                <i className="fas fa-envelope"></i> Contact Us
              </button>
              <a href="/Resume.pdf" className="btn btn-resume">
                <i className="fas fa-file-alt"></i> My Resume
              </a>
            </div>
          </div>

        </div>
      </header>


      {/* About */}
      {/* <section id="about" className="about fade-in">
        <h2>About</h2>
        <p><strong>Languages & Frameworks:</strong> HTML, CSS, JavaScript, React.js,  Python, C, Java</p>
        <p><strong>Core Concepts:</strong> Data Structures, Problem Solving</p>
        <p><strong>Databases:</strong> SQL, MongoDB</p>
      </section> */}
      {/* About Section */}

      <section id="about" className="about fade-in">
        <div className="about-wrapper">
          <div className="about-image">
            <img src="/images/img1.jpg" alt="Nitesh Jindal" />
          </div>

          <div className="about-details">
            <h2 className="about-title">Let's Introduce About Myself</h2>
            <p>
              Dynamic Web & Software Developer and problem solver skilled in
              JavaScript, React.js, Node.js, MongoDB, Python, C, and Java.
              Passionate about crafting seamless digital experiences, building
              robust software solutions, and transforming complex challenges
              into elegant, high-performance applications.
            </p>

            <div className="about-info">
              <div>
                <p>
                  <strong>Name:</strong> Nitesh Jindal
                </p>
                <p>
                  <strong>Date of Birth:</strong> 29-07-2002
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:jindalnitesh285@gmail.com">
                    jindalnitesh285@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <p>
                  <strong>Profile:</strong> Software Developer, MERN Developer &
                  Python Developer
                </p>
                <p>
                  <strong>Address:</strong> Jaipur, Rajasthan
                </p>
                <p>
                  <strong>Phone:</strong> +91 8306565374
                </p>
              </div>
            </div>

            <div className="about-socials">
              <a
                href="https://linkedin.com/in/niteshjindal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/niteshjindal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com/niteshagarwal2002?igsh=MXdneGZlaHVtaDEycA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="skills fade-in">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          <div className="skills-card">
            <h3>Web Development</h3>
            <SkillBar skill="HTML-CSS" percentage={80} />
            <SkillBar skill="JavaScript" percentage={60} />
            <SkillBar skill="React JS" percentage={60} />
            {/* <SkillBar skill="Express Js" percentage={85} />
            <SkillBar skill="Node Js" percentage={75} />
            <SkillBar skill="Django" percentage={40} /> */}
          </div>

          <div className="skills-card">
            <h3>Programming Language</h3>
            <SkillBar skill="Python" percentage={60} />
            <SkillBar skill="Java" percentage={40} />
            <SkillBar skill="JavaScript" percentage={50} />
            <SkillBar skill="C" percentage={80} />
          </div>

          <div className="skills-card">
            <h3>Database Language</h3>
            <SkillBar skill="Mongo DB" percentage={50} />
            <SkillBar skill="MySQL" percentage={60} />
            {/* <SkillBar skill="PostgreSQL" percentage={30} /> */}
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="work">
        <h2 className="work-heading">My Experience</h2>

        <div className="work-grid">
          <div className="company-card">
            <div className="company-header">
              <div className="company-icon">
                <i className="fas fa-building"></i>
              </div>
              <div className="company-name">Celebal Technologies</div>
            </div>
            <div className="company-content">
              <p>
                <i className="fas fa-laptop-code"></i> React Developer Intern
              </p>
              <p>
                <i className="fas fa-calendar-alt"></i> June 2025 - August 2025
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i> Jaipur, India
              </p>
              <a
                href="/Nitesh's_Certificate.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-external-link-alt"></i> View Certificate
              </a>
            </div>
          </div>

          <div className="company-card">
            <div className="company-header">
              <div className="company-icon">
                <i className="fas fa-building"></i>
              </div>
              <div className="company-name">SRKWebApp Innovations LLP</div>
            </div>
            <div className="company-content">
              <p>
                <i className="fas fa-laptop-code"></i> MERN Stack Intern
              </p>
              <p>
                <i className="fas fa-calendar-alt"></i> May 2025 - July 2025
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i> Jaipur, India
              </p>
              <a
                href="/Nitesh Jindal Certificate (1).pdf"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-external-link-alt"></i> View Certificate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects fade-in">
        <h2>Projects</h2>
        <div className="project-list">
          <article className="project glass">
            <h3>Online Blood Arranging System</h3>
            <p>Tech used: React, Node, MongoDB</p>
            <a href="#" className="view">
              <i className="fas fa-external-link-alt"></i> Live / Repo
            </a>
          </article>
          <article className="project glass">
            <h3>Portfolio Website</h3>
            <p>Tech used: React, CSS, Node, Mongo DB</p>
            <a href="https://github.com/niteshjindal285/mern_portfolio_upgraded.git" className="view">
              <i className="fas fa-external-link-alt"></i> Live / Repo
            </a>
          </article>
          <article className="project glass">
            <h3>Online-GroceryStore Website</h3>
            <p>Tech used: React, CSS, Node, Mongo DB</p>
            <a href="https://github.com/niteshjindal285/Online-GroceryStore.git" className="view">
              <i className="fas fa-external-link-alt"></i> Live / Repo
            </a>
          </article>
        </div>
      </section>

      {/* Certifications */}

      <section id="certifications" className="certifications-section">
        <h2 className="cert-heading">My Certificates</h2>

        <div className="cert-grid">
          <div className="cert-card">
            <a href="/Data structure.pdf" target="_blank" rel="noreferrer">
            <img src="/images/dsa.jpg" alt="Data Structures & Algorithms - ExcelR" />
              <div className="pdf-placeholder">
                <i className="fas fa-file-pdf"></i>
              </div>
              <div className="cert-overlay">
                <h3>Data Structures & Algorithms - ExcelR</h3>
              </div>
            </a>
          </div>

          <div className="cert-card">
            <a href="/python Certificate.pdf" target="_blank" rel="noreferrer">
            <img src="/images/python.jpg" alt="Python Essential - LinkedIn Learning" />

              <div className="pdf-placeholder">
                <i className="fas fa-file-pdf"></i>
              </div>
              <div className="cert-overlay">
                <h3>Python Essential - LinkedIn Learning</h3>
              </div>
            </a>
          </div>

          <div className="cert-card">
            <a href="/cracking coding.pdf" target="_blank" rel="noreferrer">
            <img src="/images/cracking.jpg" alt="Cracking Coding Interviews - ExcelR" />
              <div className="pdf-placeholder">
                <i className="fas fa-file-pdf"></i>
              </div>
              <div className="cert-overlay">
                <h3>Cracking Coding Interviews - ExcelR</h3>
              </div>
            </a>
          </div>
          <div className="cert-card">
            <a href="/linux world.pdf" target="_blank" rel="noreferrer">
            <img src="/images/linux.jpg" alt="DSA (Data Structures & Algorithms) - Linux World" />
              <div className="pdf-placeholder">
                <i className="fas fa-file-pdf"></i>
              </div>
              <div className="cert-overlay">
                <h3>DSA (Data Structures & Algorithms) - Linux World</h3>
              </div>
            </a>
          </div>
          <div className="cert-card">
            <a
              href="/project Excellence-Nitesh Jindal.pdf"
              target="_blank"
              rel="noreferrer"
            >
            <img src="/images/project.jpg" alt="Project Excellence - ExcelR" />
              <div className="pdf-placeholder">
                <i className="fas fa-file-pdf"></i>
              </div>
              <div className="cert-overlay">
                <h3>Project Excellence - ExcelR</h3>
              </div>
            </a>
          </div>
          <div className="cert-card">
            <a
              href="/Foundation of Cloud IoT Edge ML .pdf"
              target="_blank"
              rel="noreferrer"
            >
            <img src="/images/nptel.jpg" alt="Foundations of Cloud, IoT, Edge & ML - NPTEL" />
              <div className="pdf-placeholder">
                <i className="fas fa-file-pdf"></i>
              </div>
              <div className="cert-overlay">
                <h3>Foundations of Cloud, IoT, Edge & ML - NPTEL</h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="education-section fade-in">
        <div className="education-container">
          <h2>Education</h2>
          <ul>
            <li>
              <i className="fas fa-graduation-cap"></i>
              <strong> Master of Computer Applications (MCA)</strong> – Poornima University, Jaipur (2024 – 2026)
            </li>
            <li>
              <i className="fas fa-graduation-cap"></i>
              <strong> Bachelor of Science in Mathematics</strong> – Maharishi Arvind University, Jaipur (2021 – 2024)
            </li>
            <li>
              <i className="fas fa-school"></i>
              <strong> Senior Secondary (XII)</strong> – Rajasthan Board (2020 – 2021)
            </li>
          </ul>
        </div>
      </section>


      {/* Gallery */}
      {/* <section id="gallery" className="gallery fade-in">
        <h2>Photo Gallery</h2>
        <div className="gallery-grid">
          {["img1.jpg", "img2.jpg", "img3.jpg"].map((img, idx) => (
            <div
              key={idx}
              className="gallery-item"
              onClick={() => setModalImage(img)}
            >
              <img src={`/images/${img}`} alt={`Gallery ${idx}`} />
            </div>
          ))}
        </div>
      </section> */}

      {/* Image Modal */}
      {/* {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <img src={`/images/${modalImage}`} alt="Enlarged" />
        </div>
      )} */}

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="modal" onClick={() => setShowContactForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Contact Us</h2>
            <form onSubmit={submit} className="contact-form">
              <input
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
              />
              <button type="submit">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
            <p className="status">{status}</p>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>© {new Date().getFullYear()} Nitesh Jindal</p>
      </footer>
    </div>
  );
}
