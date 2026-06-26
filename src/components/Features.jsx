import { useState, useEffect } from "react";
import featureData from "../data/features";
import BentoCard from "./BentoCard";
import "../styles/Features.css";

function Features() {

  const [active, setActive] = useState(0);
  const [mobile, setMobile] = useState(window.innerWidth < 900);

  useEffect(() => {

    const handleResize = () => {
      setMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return (
    <section
  className="features"
  id="features"
  data-aos="fade-up"
>

      <div className="feature-heading">
        <p>POWERFUL FEATURES</p>
        <h2>Everything You Need.</h2>
      </div>

      {!mobile ? (

        <div className="bento-grid">

          {featureData.map((feature, index) => (
            <div
              key={feature.title}
              onMouseEnter={() => setActive(index)}
            >
              <BentoCard
                title={feature.title}
                description={feature.description}
                active={active === index}
              />
            </div>
          ))}

        </div>

      ) : (

        <div className="accordion">

          {featureData.map((feature, index) => (

            <div className="accordion-item" key={feature.title}>

              <button
                className="accordion-title"
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
              >
                {feature.title}
              </button>

              {active === index && (
                <div className="accordion-content">
                  <p>{feature.description}</p>
                </div>
              )}

            </div>

          ))}

        </div>

      )}

    </section>
  );
}

export default Features;