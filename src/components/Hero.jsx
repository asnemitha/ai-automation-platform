import "../styles/Hero.css";
import chart from "../assets/chart-pie.svg";
import trend from "../assets/arrow-trending-up.svg";
import cog from "../assets/cog-8-tooth.svg";

function Hero() {
  return (
    <section className="hero" data-aos="fade-up">

      <div className="hero-left">

        <p className="hero-tag">
          AI-Powered Data Automation Platform
        </p>

        <h1>
          Transform Business <span>Data</span>
          <br />
          Into Intelligent Decisions
        </h1>

        <p className="hero-desc">
          NeuroFlow AI connects spreadsheets, APIs, databases and cloud
          services into one intelligent automation platform that delivers
          real-time insights without writing code.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Start Free
          </button>

          <button className="secondary-btn">
            Watch Demo
          </button>
        </div>

        <div className="hero-stats">

          <div>
            <div className="stat-number">20K+</div>
            <span>Businesses</span>
          </div>

          <div>
            <div className="stat-number">99.9%</div>
            <span>Uptime</span>
          </div>

          <div>
            <div className="stat-number">4.9★</div>
            <span>Customer Rating</span>
          </div>

        </div>

      </div>

      <div className="hero-right">

        <div className="dashboard">

  <div className="floating-badge">
    🚀 AI Active
  </div>

          <div className="dashboard-header">

            <div className="dashboard-title">
              <img src={chart} alt="Analytics Dashboard" />
              <span>AI Control Center</span>
            </div>

            <div className="live-dot"></div>

          </div>

          <div className="dashboard-cards">

  <div className="metric-card">
    <img src={trend} alt="Accuracy" />
    <div className="metric-number">98%</div>
    <p>Prediction Accuracy</p>
  </div>

  <div className="metric-card">
    <img src={cog} alt="Automation" />
    <div className="metric-number">24/7</div>
    <p>AI Automation</p>
  </div>

  <div className="metric-card full-width">
    <div className="metric-number">1.2M</div>
    <p>Events Processed This Month</p>
  </div>

</div>

          <div className="activity">
          <div className="revenue-card">

  <div>
    <span>Monthly Growth</span>
    <div className="revenue-number">
    +32%
</div>
  </div>

  <div className="mini-chart">
    ▂▃▄▅▆▇█
  </div>

</div>

            <div className="activity-title">
  AI Workflow Status
</div>

<div className="status-row">
  <span>Data Processing</span>
  <strong>92%</strong>
</div>

            <div className="progress-track">
              <div className="progress-fill"></div>
            </div>

            <div className="progress-track">
              <div className="progress-fill short"></div>
            </div>

            <div className="progress-track">
              <div className="progress-fill long"></div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;