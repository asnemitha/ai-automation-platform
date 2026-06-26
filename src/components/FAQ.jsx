import { useState } from "react";
import "../styles/FAQ.css";

function FAQ() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      q: "What is NeuroFlow AI?",
      a: "An AI-powered platform for workflow automation and analytics."
    },
    {
      q: "Do I need coding experience?",
      a: "No. Everything is designed with a no-code interface."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. You can upgrade, downgrade or cancel whenever you want."
    }
  ];

  return (
    <section
  className="faq"
  id="faq"
  data-aos="fade-up"
>
    
      <p className="section-tag">FAQ</p>
      <h2>Frequently Asked Questions</h2>

      {faqs.map((item, index) => (
        <div
          className="faq-item"
          key={index}
          onClick={() => setOpen(open === index ? -1 : index)}
        >
          <div className="faq-question">
            {item.q}
          </div>

          {open === index && (
            <div className="faq-answer">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default FAQ;