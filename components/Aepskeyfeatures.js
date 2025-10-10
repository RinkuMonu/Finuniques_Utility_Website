"use client";
import React from "react";
import Image from "next/image";
import { Shield, Users, Award, CheckCircle, Headphones, Rocket } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Shield className="text-orange-400 w-8 h-8" />,
    title: "Security You Can Trust",
    description: "Your business data stays safe, always.",
  },
  {
    id: 2,
    icon: <Users className="text-pink-400 w-8 h-8" />,
    title: "Chosen by Businesses Worldwide",
    description: "Thousands rely on us for success.",
  },
  {
    id: 3,
    icon: <Award className="text-blue-400 w-8 h-8" />,
    title: "Experts Recognized Globally",
    description: "Celebrated for creativity and innovation.",
  },
  {
    id: 4,
    icon: <CheckCircle className="text-green-400 w-8 h-8" />,
    title: "Success That Speaks for Itself",
    description: "Delivering measurable growth across industries.",
  },
  {
    id: 5,
    icon: <Headphones className="text-purple-400 w-8 h-8" />,
    title: "Support Without Boundaries",
    description: "Round-the-clock assistance when you need it most.",
  },
  {
    id: 6,
    icon: <Rocket className="text-red-400 w-8 h-8" />,
    title: "Launch at Lightning Speed",
    description: "Seamless setup with zero delays.",
  },
];

const Aepskeyfeatures = () => {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/image/aeps-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <h3 className="text-4xl md:text-5xl font-bold mb-4">
Key Benefits
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-left flex items-start space-x-4 shadow-lg hover:bg-white/20 transition"
            >
              <div>{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aepskeyfeatures;
