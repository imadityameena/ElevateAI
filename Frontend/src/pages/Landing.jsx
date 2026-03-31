import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../features/auth/hooks/useAuth";
import "../style/landing.scss";

const Landing = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleGetStarted = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/register");
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="landing-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-icon" />
            <span>ElevateAI</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className="nav-buttons">
            <button onClick={handleLogin} className="btn-text">
              Sign In
            </button>
            <button onClick={handleGetStarted} className="btn-primary">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <div className="badge">
              <span>✨</span> AI-Powered Interview Prep
            </div>
            <h1>
              Master Your
              <br />
              <span className="highlight">Interview</span> with AI
            </h1>
            <p>
              Get personalized interview preparation powered by advanced AI.
              Learn what employers really want and perfect your responses with
              expert feedback.
            </p>
            <div className="hero-buttons">
              <button
                onClick={handleGetStarted}
                className="btn-primary btn-large"
              >
                Start Your Journey Free <span>→</span>
              </button>
              <button className="btn-secondary">Watch Demo</button>
            </div>
            <div className="social-proof">
              <div className="avatars">
                <span>A</span>
                <span>B</span>
                <span>C</span>
              </div>
              <div>
                <strong>10,000+ Professionals</strong>
                <p>have aced their interviews</p>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="benefit-card benefit-1">
              <div className="icon">⚙️</div>
              <h4>AI-Powered Analysis</h4>
              <p>Advanced AI analyzes your responses</p>
            </div>
            <div className="benefit-card benefit-2">
              <div className="icon">📈</div>
              <h4>Real-time Feedback</h4>
              <p>Get constructive feedback immediately</p>
            </div>
            <div className="benefit-card benefit-3">
              <div className="icon">⚡</div>
              <h4>Instant Results</h4>
              <p>See improvement in minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="features-container">
          <div className="section-title">
            <h2>
              Why Choose <span className="highlight">ElevateAI</span>?
            </h2>
            <p>
              Everything you need to ace your interview and land your dream job
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon">⚙️</div>
              <h3>Smart Analysis</h3>
              <p>
                Our AI analyzes job descriptions and your background to create
                targeted interview prep
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">📈</div>
              <h3>Real-time Feedback</h3>
              <p>
                Get instant, personalized feedback on your answers with
                actionable improvements
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">⚡</div>
              <h3>Quick & Easy</h3>
              <p>
                Prepare for interviews in minutes, not hours. Test yourself with
                practice questions
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">✨</div>
              <h3>Expert Insights</h3>
              <p>
                Learn from interview best practices and strategies used by top
                professionals
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">📊</div>
              <h3>Track Progress</h3>
              <p>
                Monitor your improvement over time with detailed performance
                analytics
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">✓</div>
              <h3>Unlimited Practice</h3>
              <p>
                Access unlimited interview simulations and practice questions
                anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works" id="how-it-works">
        <div className="section-title">
          <h2>
            How It <span className="highlight">Works</span>
          </h2>
          <p>Three simple steps to interview success</p>
        </div>

        <div className="steps-container">
          <div className="step-item">
            <div className="step-number">01</div>
            <h3>Upload Your Info</h3>
            <p>
              Share your resume, the job description, and tell us about yourself
            </p>
          </div>

          <div className="step-arrow">→</div>

          <div className="step-item">
            <div className="step-number">02</div>
            <h3>AI Analysis</h3>
            <p>
              Our AI analyzes the fit between you and the role with personalized
              interview strategy
            </p>
          </div>

          <div className="step-arrow">→</div>

          <div className="step-item">
            <div className="step-number">03</div>
            <h3>Get Results</h3>
            <p>
              Access your interview plan and prepare with confidence ready
              questions
            </p>
          </div>
        </div>

        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">10K+</div>
            <p>Interviews Completed</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">85%</div>
            <p>Success Rate</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.9/5</div>
            <p>User Rating</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <p>Companies Featured</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="cta-box">
          <h2>
            Ready to <span className="highlight">Elevate</span> Your Interview
            Game?
          </h2>
          <p>
            Join thousands of professionals who have successfully aced their
            interviews with ElevateAI
          </p>
          <button onClick={handleGetStarted} className="btn-primary btn-large">
            Get Started for Free <span>→</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo footer-logo">
              <div className="logo-icon" />
              <span>ElevateAI</span>
            </div>
            <p>Your AI-powered interview preparation partner</p>
          </div>
          <div className="footer-section">
            <h4>PRODUCT</h4>
            <ul>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#how-it-works">How it Works</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>COMPANY</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>LEGAL</h4>
            <ul>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 ElevateAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
