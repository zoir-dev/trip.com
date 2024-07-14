import React, { useState } from "react";

const plans = [
  {
    name: "None",
    price: "$0.00/person",
    benefits: [false, false, false, false],
  },
  {
    name: "Essential Plan",
    price: "$10.90/person",
    recommended: true,
    benefits: [true, true, true, false],
  },
  {
    name: "Complete Plan",
    price: "$18.20/person",
    benefits: [true, true, true, true],
  },
];

const PlanSelection = () => {
  const [selectedPlan, setSelectedPlan] = useState("Essential Plan");

  return (
    <div className="w-full h-[400px] max-w-5xl mx-auto p-4 shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white  rounded-lg overflow-hidden">
        <div className="flex flex-col p-4">
          <ul>
            <li className="mb-2 text-[14px] text-[#8592a6]">Up to €6,000.00 (approx. $6,531.00) for additional expenses (lost baggage or missed hotel bookings)</li>
            <li className="mb-2 text-[14px] text-[#8592a6]">24/7 live chat support from AirHelp</li>
            <li className="mb-2 text-[14px] text-[#8592a6]">AirHelp's specialists handle the entire process of getting your compensation</li>
            <li className="mb-2 text-[14px] text-[#8592a6]">Access to a VIP lounge if your flight is delayed by more than 1 hour or canceled less than 6 hours before departure.</li>
          </ul>
          <a href="#" className="text-blue-600 mt-4">Learn More</a>
        </div>
        <div className="flex gap-x-1 w-full md:w-3/3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col h-full bg-[red] items-center w-1/3 p-4 border ${
                selectedPlan === plan.name ? "border-blue-500" : "border-gray-300"
              } rounded-lg`}
              onClick={() => setSelectedPlan(plan.name)}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 mt-2 mr-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">
                  Recommended
                </div>
              )}
              <p className="text-[15px] whitespace-nowrap font-semibold">{plan.name}</p>
              <div className="mt-4">
                {plan.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center">
                    <span className="mr-2">{benefit ? "✔" : "✘"}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-col justify-center gap-y-3">
                <p className="text-[14px] whitespace-nowrap font-bold text-blue-500 mt-2">{plan.price}</p>
                <input
                  type="radio"
                  name="plan"
                  value={plan.name}
                  checked={selectedPlan === plan.name}
                  onChange={() => setSelectedPlan(plan.name)}
                  className="form-radio"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanSelection;
