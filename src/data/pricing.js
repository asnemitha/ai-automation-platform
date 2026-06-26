const pricingPlans = [
  {
    name: "Starter",
    basePrice: 20,
    description: "Perfect for individuals",
    featured: false,
  },
  {
    name: "Professional",
    basePrice: 50,
    description: "Best for growing teams",
    featured: true,
  },
  {
    name: "Enterprise",
    basePrice: 100,
    description: "Built for large organizations",
    featured: false,
  },
];

export const currencyMatrix = {
  USD: {
    symbol: "$",
    rate: 1,
  },
  INR: {
    symbol: "₹",
    rate: 83,
  },
  EUR: {
    symbol: "€",
    rate: 0.92,
  },
};

export default pricingPlans;