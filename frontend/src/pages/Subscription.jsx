import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Subscription = () => {
  const [billingCycle, setBillingCycle] = useState("monthly"); // monthly or yearly
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [currentPlan, setCurrentPlan] = useState("free");
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    // Get current subscription from localStorage
    const savedPlan = localStorage.getItem("userSubscription");
    if (savedPlan) {
      setCurrentPlan(savedPlan);
    }
  }, []);

  const plans = [
    {
      id: "free",
      name: "Free",
      price: { monthly: 0, yearly: 0 },
      description: "Perfect for trying out TextCraft AI",
      features: [
        "10 images per month",
        "Fast model only",
        "Standard resolution (512x512)",
        "Community gallery access",
        "Basic support",
      ],
      limitations: ["No commercial use", "TextCraft watermark"],
      color: "zinc",
      gradient: "from-zinc-600 to-gray-600",
      popular: false,
    },
    {
      id: "pro",
      name: "Pro",
      price: { monthly: 19, yearly: 190 },
      description: "For creators and professionals",
      features: [
        "500 images per month",
        "All models (Fast, Balanced, Premium)",
        "High resolution (1024x1024)",
        "Priority generation queue",
        "No watermark",
        "Commercial use license",
        "Private gallery",
        "Email support",
        "Advanced editing tools",
      ],
      limitations: [],
      color: "purple",
      gradient: "from-purple-600 to-pink-600",
      popular: true,
      badge: "Most Popular",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: { monthly: 99, yearly: 990 },
      description: "For teams and businesses",
      features: [
        "Unlimited images",
        "All models + exclusive models",
        "Ultra-high resolution (2048x2048)",
        "Instant generation (no queue)",
        "API access",
        "Custom model training",
        "Team collaboration",
        "Dedicated account manager",
        "24/7 priority support",
        "White-label options",
        "Advanced analytics",
      ],
      limitations: [],
      color: "cyan",
      gradient: "from-cyan-600 to-blue-600",
      popular: false,
      badge: "Best Value",
    },
  ];

  const handleSelectPlan = async (planId) => {
    setSelectedPlan(planId);

    if (planId === "free") {
      alert("You are already on the free plan!");
      return;
    }

    // Save subscription to localStorage
    localStorage.setItem("userSubscription", planId);
    setCurrentPlan(planId);

    // Try to update backend if user is logged in
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await fetch(`${API_URL}/user/update-subscription`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ subscription: planId }),
        });

        if (response.ok) {
          // Subscription updated successfully
        }
      } catch (error) {
        // Backend update failed, but subscription saved locally
      }
    }

    alert(`Successfully upgraded to ${planId.toUpperCase()} plan! 🎉`);

    // Redirect to home page after a short delay
    setTimeout(() => {
      navigate("/genimg");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-purple-950 text-white">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-8 py-8 md:py-16">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors mb-8 text-sm sm:text-base"
        >
          <i className="ri-arrow-left-line text-lg sm:text-xl"></i>
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-4 animate-gradient">
            Choose Your Plan
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Unlock unlimited AI-powered creativity with TextCraft's flexible
            pricing plans
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span
              className={`text-sm sm:text-base ${
                billingCycle === "monthly"
                  ? "text-white font-medium"
                  : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "yearly" : "monthly"
                )
              }
              className="relative w-16 h-8 bg-zinc-800 rounded-full transition-colors hover:bg-zinc-700 border-2 border-purple-500/30"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-transform shadow-lg ${
                  billingCycle === "yearly" ? "translate-x-8" : ""
                }`}
              ></div>
            </button>
            <span
              className={`text-sm sm:text-base ${
                billingCycle === "yearly"
                  ? "text-white font-medium"
                  : "text-gray-500"
              }`}
            >
              Yearly
            </span>
            {billingCycle === "yearly" && (
              <span className="ml-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs sm:text-sm font-medium border border-green-500/30">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-purple-500 shadow-2xl shadow-purple-500/30 transform scale-105"
                  : "border border-zinc-700 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20"
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div
                  className={`absolute top-0 right-0 px-4 py-1 bg-gradient-to-r ${plan.gradient} text-white text-xs sm:text-sm font-medium rounded-bl-2xl`}
                >
                  {plan.badge}
                </div>
              )}

              <div className="p-6 sm:p-8">
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      ${plan.price[billingCycle]}
                    </span>
                    <span className="text-gray-400 text-base sm:text-lg">
                      /{billingCycle === "monthly" ? "mo" : "yr"}
                    </span>
                  </div>
                  {billingCycle === "yearly" && plan.price.yearly > 0 && (
                    <p className="text-sm text-gray-500 mt-2">
                      ${(plan.price.yearly / 12).toFixed(2)}/month
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-300 mb-3 uppercase tracking-wider">
                    Features
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
                      >
                        <i className="ri-checkbox-circle-fill text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="mb-6 pb-6 border-b border-zinc-700">
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-500 text-xs sm:text-sm"
                        >
                          <i className="ri-close-circle-fill text-red-500 text-base mt-0.5 flex-shrink-0"></i>
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <button
                  onClick={() => handleSelectPlan(plan.id)}
                  disabled={currentPlan === plan.id}
                  className={`w-full py-3 sm:py-4 rounded-xl font-medium text-sm sm:text-base transition-all transform hover:scale-105 ${
                    currentPlan === plan.id
                      ? "bg-green-900/30 border-2 border-green-500 text-green-400 cursor-not-allowed"
                      : plan.id === "free"
                      ? "bg-zinc-800 border border-zinc-600 hover:bg-zinc-700 hover:border-purple-500"
                      : `bg-gradient-to-r ${plan.gradient} text-white shadow-lg hover:shadow-2xl`
                  }`}
                >
                  {currentPlan === plan.id
                    ? "✓ Current Plan"
                    : plan.id === "free"
                    ? "Get Started"
                    : "Upgrade Now"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Can I change my plan later?",
                a: "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle.",
              },
              {
                q: "What happens to my images if I cancel?",
                a: "Your generated images remain accessible in your account. However, you won't be able to generate new images until you subscribe again.",
              },
              {
                q: "Do you offer refunds?",
                a: "We offer a 7-day money-back guarantee on all paid plans. If you're not satisfied, contact support for a full refund.",
              },
              {
                q: "Is there a free trial for paid plans?",
                a: "Yes! All paid plans come with a 7-day free trial. No credit card required to start.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-4 sm:p-6 border border-zinc-700 hover:border-purple-500/50 transition-all"
              >
                <h3 className="text-lg sm:text-xl font-medium mb-2 text-purple-400">
                  {faq.q}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            Need help choosing a plan or have questions?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50 font-medium text-sm sm:text-base"
          >
            <i className="ri-mail-line"></i>
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
