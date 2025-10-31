import React from "react";
import { Diamond, Eye, Clock, Scale, ShieldCheck, Home } from "lucide-react";
import service_img from "../assets/service_img.png";
import service_img1 from "../assets/service_img1.png";
import service_img2 from "../assets/service_img2.png";
import service_img3 from "../assets/service_img3.png";
import service_img4 from "../assets/service_img4.png";
import service_img5 from "../assets/service_img5.png";

const services = [
  {
    icon: <Scale className="w-10 h-10 text-amber-400" />,
    title: "Sell Gold @ South Gold",
    desc: "Sell your gold jewelry and get the best return on the money invested with South Gold Company.",
    bg: "bg-[#fff]",
    img: service_img,
    span: "md:col-span-2",
  },
  {
    icon: <Eye className="w-10 h-10 text-amber-400" />,
    title: "Eye Catching Returns",
    desc: "Get best ROI (Return on Investment) on your financial needs with South Gold Company.",
    bg: "bg-[#3a1a2e]",
    img: service_img1,
    span: "md:col-span-1",
  },
  {
    icon: <Diamond className="w-10 h-10 text-amber-400" />,
    title: "Smooth & Transparent Process",
    desc: "We run our business legally, pay taxes, and take fair service charges for a transparent process.",
    bg: "bg-[#2b1624]",
    img: service_img2,
    span: "md:col-span-1",
  },
  {
    icon: <Clock className="w-10 h-10 text-amber-400" />,
    title: "Timely Rates",
    desc: "Rates are updated regularly with online gold market trends for accurate and fair valuation.",
    bg: "bg-[#fff]",
    img: service_img3,
    span: "md:col-span-2",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-amber-400" />,
    title: "End-to-End Security Service for Your Gold and Cash Payments",
    desc: "We support and take care of our customers by providing additional safety measures to ensure customer protection from South Gold Company.",
    bg: "bg-[#fff]",
    img: service_img4,
    span: "md:col-span-2",
  },
  {
    icon: <Home className="w-10 h-10 text-amber-400" />,
    title: "Doorstep Service for Female Safety and Security",
    desc: "We provide doorstep service and pickup/drop support to ensure the best and safest service experience in the industry.",
    bg: "bg-[#3a1a2e]",
    img: service_img5,
    span: "md:col-span-1",
  },
];

export default function Services() {
  return (
    <section className="w-full py-16 bg-[#1f0f1a] text-gray-100">
      {/* Section Header */}
      <div className="text-center mb-12 px-4">
        <p className="text-yellow-500 tracking-wider text-4xl font-bold mb-2">
          Our Services
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Unlock Your Gold's Potential.
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          South Gold Company is the 1st gold buying company in Bangalore that
          provides the best gold rates for our valued customers.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {services.map((service, i) => (
          <div
            key={i}
            className={`relative flex flex-col justify-center items-center text-center p-10 rounded-2xl overflow-hidden ${service.bg} ${service.span} border border-amber-700`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: `url(${service.img})` }}
            ></div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 max-w-md">
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-yellow-400">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-300">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
