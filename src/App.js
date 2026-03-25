// App.js
import React from "react";
import "./App.css";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "NodeJS",
    "SQL",
    "MongoDB",
    "UI/UX",
    "AI/ML",
    "Python",
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">
          SONIKA.<span>MB</span>
        </div>
        <div className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
          {/* Points to the PDF you placed in the public folder */}
          <a
            href="/resume.pdf"
            download="Sonika_Resume.pdf"
            className="resume-btn"
          >
            Download Resume
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>SONIKA M B</h1>
        <h2>AI & ML Specialist | Full Stack Developer</h2>
      </header>

      {/* Summary / About */}
      <section id="about">
        <h2 className="section-title">Summary</h2>
        <p className="about-text">
          I am a final year BE student specializing in{" "}
          <strong>Artificial Intelligence and Machine Learning</strong>. With a
          strong academic background and hands-on experience in various
          projects, I'm passionate about leveraging my programming and
          problem-solving skills in the tech industry. Eager to explore
          opportunities to contribute and grow in a real-world environment.
        </p>
        <div className="education">
          <div>
            <h3>Visvesvaraya Technological University</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              Bachelors in AI & Machine Learning | CGPA: 8.5/10
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-tag">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <h2 className="section-title">Internship Experience</h2>

        <div className="experience-item">
          <div className="exp-header">
            <div className="exp-title">MERN Stack Developer Intern</div>
            <div className="exp-date">Dec 2025 - Jun 2026</div>
          </div>
          <div className="exp-company">Dhee Coding Lab</div>
          <ul>
            <li>
              Developing responsive frontend components using ReactJS, HTML,
              CSS, and JavaScript
            </li>
            <li>
              Developing interactive features using JavaScript (DOM
              manipulation, events, validation)
            </li>
            <li>Creating reusable UI components using ReactJS</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="exp-header">
            <div className="exp-title">
              Core Frontend and Backend AI Engineer
            </div>
            <div className="exp-date">Sep 2025 - Dec 2025</div>
          </div>
          <div className="exp-company">PromptIQ Technologies Pvt. Ltd.</div>
          <ul>
            <li>
              Developed responsive user interfaces using HTML, CSS, and
              JavaScript
            </li>
            <li>
              Designed and implemented reusable UI components for web
              applications
            </li>
            <li>
              Collaborated with team members to implement frontend features
            </li>
            <li>Converted design mockups into working web pages</li>
            <li>Built user interface components using ReactJS</li>
            <li>Developed backend services using Node.js</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Deepfake Detection</h3>
            <div className="project-tech">CNN, OPENCV, PYTHON</div>
            <p className="project-desc">
              Frame-level CNN pipeline detecting manipulated video frames using
              OpenCV.
            </p>
            <a
              href="#"
              style={{ color: "var(--text-main)", fontWeight: "bold" }}
            >
              View Project ↗
            </a>
          </div>

          <div className="project-card">
            <h3>Diabetes Prediction</h3>
            <div className="project-tech">
              MULTILAYER PERCEPTRON (MLP), NEURAL NETWORKS
            </div>
            <p className="project-desc">
              Predicting the likelihood of diabetes using a Multilayer
              Perceptron (MLP) artificial neural network.
            </p>
            <a
              href="#"
              style={{ color: "var(--text-main)", fontWeight: "bold" }}
            >
              View Project ↗
            </a>
          </div>

          <div className="project-card">
            <h3>eCommerce Website</h3>
            <div className="project-tech">REACTJS, NODE.JS, EXPRESS</div>
            <p className="project-desc">
              Responsive eCommerce platform with product listing, user
              interaction, and basic API integration.
            </p>
            <a
              href="https://github.com/sonikagowdamb/E-commerce-website.git"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-main)", fontWeight: "bold" }}
            >
              View Project ↗
            </a>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-grid">
          <div className="cert-card">Internet of Things (NPTEL-2025)</div>
          <div className="cert-card">
            Privacy and Security in Online Social Media (2025)
          </div>
          <div className="cert-card">
            Frontend Web Development - PrepInsta (2024)
          </div>
          <div className="cert-card">
            Prompt Engineering for Everyone - ULSA (2024)
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>GET IN TOUCH</h2>
        <p>
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailto:youremail@example.com" className="btn-primary">
          Say Hello
        </a>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/sonika-m-b-8446ba258"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="#">GitHub</a>
          <a
            href="sonikathriveni8@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 SONIKA M B. BUILT WITH REACT & CUSTOM CSS.</p>
      </footer>
    </div>
  );
}

export default App;
