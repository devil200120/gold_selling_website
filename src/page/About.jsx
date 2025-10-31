import React from "react";
import aboutImg from "../assets/baneer1.jpeg"; // 🟡 Replace with your actual image path
import ringImg from "../assets/banner2.jpeg"; // optional decorative image
import Footer from "../componetns/Footer/Footer";

const About = () => {
  return (
    <>
      <section className="bg-[#1f0f1a] text-gray-100">
        {/* Heading */}
        <h1 className="text-center text-4xl font-bold pt-10 text-yellow-400 tracking-wider">
          About
        </h1>

        {/* Main Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Left: Text Section */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-4xl font-bold text-yellow-400 leading-snug">
              About <span className="text-white">South Gold Company</span>
            </h2>

            <p className="text-lg leading-relaxed text-gray-300">
              Welcome to{" "}
              <span className="font-semibold text-yellow-300">
                South Gold Company
              </span>{" "}
              — a trusted name where{" "}
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
              honest pricing, and immediate payments.
            </p>
          </div>

          {/* Right: Image Section */}
          <div className="md:w-1/2 relative flex justify-center">
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
