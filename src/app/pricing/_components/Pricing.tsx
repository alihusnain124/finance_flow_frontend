import Button from "@/app/_components/Button";
import React from "react";
import { FaExchangeAlt, FaChartBar, FaWallet, FaClock } from "react-icons/fa";

const pricingPlans = [
  {
    tier: "Basic",
    badgeColor: "bg-[#1a52e1]",
    price: "$ 100 USD",
    description:
      "Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.",
    features: [
      "Everything included in Basic",
      "Trading up to $1MM per month",
      "Windows & macOS App",
      "Premium Support",
    ],
  },
  {
    tier: "Pro",
    badgeColor: "bg-[#4dacff]",
    price: "$ 100 USD",
    description:
      "Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.",
    features: [
      "Everything included in Basic",
      "Trading up to $1MM per month",
      "Windows & macOS App",
      "Premium Support",
    ],
  },
  {
    tier: "Expert",
    badgeColor: "bg-[#0379ff]",
    price: "$ 100 USD",
    description:
      "Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.",
    features: [
      "Everything included in Basic",
      "Trading up to $1MM per month",
      "Windows & macOS App",
      "Premium Support",
    ],
  },
];

const topFeatures = [
  { icon: <FaExchangeAlt />, label: "Send & receive" },
  { icon: <FaChartBar />, label: "Trading Charts" },
  { icon: <FaWallet />, label: "Wallet" },
  { icon: <FaClock />, label: "Real Time Trading" },
];

const PricingSection = () => {
  return (
    <section className="text-white py-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl text-start md:text-center font-bold mb-4">
          Pricing
        </h2>
        <p className="text-white/70 text-start md:text-center mx-auto mb-12 text-sm max-w-xl ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aenean dis placerat. Scelerisque
        </p>

        <div className="flex md:flex-wrap md:flex-row flex-col justify-between w-[94%] m-auto gap-6 mb-16">
          {topFeatures.map((item, i) => (
            <div key={i} className="flex items-center text-sm gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1a52e1] text-white text-lg">
                {item.icon}
              </div>
              <p className="text-white/70">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#060d3b] rounded-2xl w-full p-6 text-left flex flex-col justify-between h-full"
            >
              <span
                className={`text-xs font-semibold text-white uppercase px-3 py-1 w-[100px] rounded-full tracking-wide mb-4 inline-block ${plan.badgeColor}`}
              >
                {plan.tier}
              </span>

              <h3 className="text-2xl font-bold mb-2">{plan.price}</h3>
              <p className="text-sm text-white/70 mb-6">{plan.description}</p>

              <div className="mb-6">
                <h4 className="text-[13px] font-semibold mb-2 uppercase text-white/60">
                  Features
                </h4>
                <ul className="space-y-2 text-sm text-white/80 pl-4 list-disc marker:text-blue-400">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <Button content="Contact Us" isBlue={true} width={80} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
