"use client";

import { Pricing } from "./pricing";



const demoPlans = [
  {
    name: "Basic",
    price: "9.99",
    yearlyPrice: "7.99",
    period: "per month",
    features: [
      "25 image generations per month",
      "Basic resolution (512x512)",
      "Standard generation speed",
      "5 saved images",
      "Community support",
      "Basic editing tools"
    ],
    description: "Perfect for casual users and beginners",
    buttonText: "Start Creating",
    isPopular: false,
  },
  {
    name: "PRO",
    price:"24.99",
    yearlyPrice: "19.99",
    period: "per month",
    features: [
      "250 image generations per month",
      "HD resolution (1024x1024)",
      "Faster generation speed",
      "100 saved images",
      "Priority support",
      "Advanced editing tools",
      "Style customization",
      "Batch processing"
    ],
    description: "Ideal for artists, designers and content creators",
    buttonText: "Upgrade Now",
    isPopular: true,
  },
  {
    name: "PREMIUM",
    price: "59.99",
    yearlyPrice: "47.99",
    period: "per month",
    features: [
      "1,000 image generations per month",
      "Ultra HD resolution (2048x2048)",
      "Priority generation queue",
      "Unlimited saved images",
      "Dedicated support",
      "Advanced AI controls",
      "Commercial usage rights",
      "API access",
      "Remove watermarks",
      "Team collaboration"
    ],
    description: "For professionals and businesses needing premium AI images",
    buttonText: "Contact Sales",
    isPopular: false,
  },
];


function PricingBasic() {
  return (
<div className="flex justify-center items-center sm:mx-3 md:mx-7 gap-3 h-full rounded-lg">
<Pricing 
        plans={demoPlans}
        title="Simple, Transparent Pricing"
        description="Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support."
      />
    </div>
  );
}

export { PricingBasic };
