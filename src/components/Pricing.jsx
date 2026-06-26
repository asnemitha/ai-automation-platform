import { useState } from "react";
import pricingPlans, { currencyMatrix } from "../data/pricing";
import "../styles/Pricing.css";

function Pricing() {
  const [yearly, setYearly] = useState(false);
  const [currency, setCurrency] = useState("USD");

  return (
    <section
      className="pricing"
      id="pricing"
      data-aos="fade-up"
    >
      <h2>Simple Pricing</h2>

      <div className="billing-toggle">
        <button
          className={!yearly ? "active" : ""}
          onClick={() => setYearly(false)}
        >
          Monthly
        </button>

        <button
          className={yearly ? "active" : ""}
          onClick={() => setYearly(true)}
        >
          Yearly
        </button>

        <label htmlFor="currency" className="sr-only">
          Currency
        </label>

        <select
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      <div className="pricing-grid">
        {pricingPlans.map((plan) => {
          const convertedPrice =
            plan.basePrice * currencyMatrix[currency].rate;

          const finalPrice = yearly
            ? convertedPrice * 12 * 0.8
            : convertedPrice;

          return (
            <div
              key={plan.name}
              className={`plan ${plan.featured ? "featured" : ""}`}
            >
              <h3>{plan.name}</h3>

              <div className="price">
                {currencyMatrix[currency].symbol}
                {Math.round(finalPrice)}
              </div>

              <p>{plan.description}</p>

              <button>
                {plan.name === "Enterprise"
                  ? "Contact Sales"
                  : "Choose Plan"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Pricing;