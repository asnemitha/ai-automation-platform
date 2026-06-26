import "../styles/Footer.css";

function Footer() {
  return (
    <footer
  className="footer"
  data-aos="fade-up"
>

      <div className="footer-content">

        <div>
          <h2>NeuroFlow AI</h2>
          <p>AI-powered automation for modern businesses.</p>
        </div>

        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#faq">FAQ</a>
        </div>

      </div>

      <p className="copyright">
        © 2026 NeuroFlow AI. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;