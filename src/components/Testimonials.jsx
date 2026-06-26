import "../styles/Testimonials.css";

function Testimonials() {
  return (
    <section
  className="testimonials"
  id="testimonials"
  data-aos="fade-up"
>

      <p className="section-tag">TESTIMONIALS</p>

      <h2>Loved by Teams Worldwide</h2>

      <div className="testimonial-grid">

        <div className="testimonial-card">
          <p>
            "NeuroFlow AI transformed our workflow. We save hours every day."
          </p>

          <h4>Sarah Johnson</h4>

          <span>Product Manager</span>
        </div>

        <div className="testimonial-card">
          <p>
            "Simple, fast and surprisingly powerful for our business."
          </p>

          <h4>David Chen</h4>

          <span>Startup Founder</span>
        </div>

        <div className="testimonial-card">
          <p>
            "The automation features alone paid for themselves."
          </p>

          <h4>Emily Brown</h4>

          <span>Operations Lead</span>
        </div>

      </div>

    </section>
  );
}

export default Testimonials;