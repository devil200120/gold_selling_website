import React from "react";
import aboutImg from "../assets/baneer1.jpeg"; // 🟡 Replace with your actual image path
import ringImg from "../assets/banner2.jpeg"; // optional decorative image
import Footer from "../componetns/Footer/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About = () => {
  useScrollAnimation();

  return (
    <>
      <section className="bg-[#1f0f1a] text-gray-100">
        {/* Heading */}
        <h1 className="text-center text-4xl font-bold pt-10 text-yellow-400 tracking-wider fade-in">
          About
        </h1>

        {/* Main Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Left: Text Section */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left slide-left">
            <h2 className="text-4xl md:text-4xl font-bold text-yellow-400 leading-snug">
              About <span className="text-white">South Gold Company</span>
            </h2>

            <p className="text-lg leading-relaxed text-gray-300">
              Welcome to{" "}
              <span className="font-semibold text-yellow-300">
                South Gold Company
              </span>{" "}
              — <span className="font-semibold text-yellow-300">
                the first Gold Company for Gold Selling & Buying in Bangalore
              </span>. We are a trusted name where{" "}
              <span className="font-semibold text-yellow-300">
                purity meets value
              </span>
              . We specialize in providing transparent, reliable, and
              customer-first gold services that redefine the way people sell and
              value their gold.
            </p>

            <p className="text-lg leading-relaxed text-gray-300">
              At South Gold Company, our mission is to ensure that every
              customer receives the best and most accurate gold rate, backed by
              trust, integrity, and professionalism. We follow a smooth,
              transparent, and legal process, offering instant evaluation,
              honest pricing, and immediate payments. <span className="font-semibold text-yellow-300">
                We create a very comfortable atmosphere during every transaction
              </span>.
            </p>

            {/* Additional Services */}
            <div className="space-y-4 pt-4">
              <div className="bg-yellow-400/10 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-300 mb-2">✨ New Gold Ornaments</h4>
                <p className="text-gray-300">
                  You can make <span className="font-semibold text-yellow-300">New Gold Ornaments</span> by giving 
                  old Gold or jewellery with <span className="font-semibold text-yellow-300">no making charges</span> and 
                  the wastage at just <span className="font-semibold text-yellow-300">6-8%</span>.
                </p>
              </div>

              <div className="bg-yellow-400/10 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-300 mb-2">🏠 Convenient Service</h4>
                <p className="text-gray-300">
                  We <span className="font-semibold text-yellow-300">release your pledged Gold and pledge 
                  at your convenient place</span>, making the entire process hassle-free and comfortable for you.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Image Section */}
          <div className="md:w-1/2 relative flex justify-center scale-up">
            <img
              src={aboutImg}
              alt="About South Gold Company"
              className="rounded-3xl shadow-2xl w-full max-w-md object-cover border-4 border-yellow-700"
            />

            {/* Decorative Overlay Image */}
            <img
              src={ringImg}
              alt="Gold Ring"
              className="absolute -bottom-10 -right-10 w-32 md:w-40 rounded-full shadow-lg hidden sm:block border-4 border-yellow-600"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
