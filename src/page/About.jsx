import React from "react";
import { FaCheckCircle, FaAward, FaHandshake, FaClock } from "react-icons/fa";
import aboutImg from "../assets/baneer1.jpeg"; // 🟡 Replace with your actual image path
import ringImg from "../assets/banner2.jpeg"; // optional decorative image
import Footer from "../componetns/Footer/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About = () => {
  useScrollAnimation();

  return (
    <>
      <section className="relative bg-gradient-to-b from-[#1f0f1a] via-[#2a1520] to-[#3e1e35] text-gray-100 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

        {/* Heading Section */}
        <div className="text-center pt-16 pb-8 fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 tracking-wide mb-4">
            About Us
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Story Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Text Content */}
            <div className="space-y-6 slide-left">
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 leading-snug">
                Welcome to <span className="text-white">South Gold Company</span>
              </h2>

              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-gray-300">
                  <span className="font-semibold text-yellow-300 text-xl">
                    The first Gold Company for Gold Selling & Buying in Bangalore
                  </span>{" "}
                  — We are a trusted name where{" "}
                  <span className="font-semibold text-yellow-300">
                    purity meets value
                  </span>
                  . We specialize in providing transparent, reliable, and
                  customer-first gold services that redefine the way people sell and
                  value their gold.
                </p>

                <p className="text-lg leading-relaxed text-gray-300">
                  Our mission is to ensure that every customer receives the best and 
                  most accurate gold rate, backed by trust, integrity, and professionalism. 
                  We follow a smooth, transparent, and legal process, offering instant 
                  evaluation, honest pricing, and immediate payments.{" "}
                  <span className="font-semibold text-yellow-300">
                    We create a very comfortable atmosphere during every transaction
                  </span>
                  .
                </p>
              </div>

              {/* Core Values */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all">
                  <FaCheckCircle className="text-yellow-400 text-3xl mb-2" />
                  <h4 className="font-bold text-white">Certified</h4>
                  <p className="text-sm text-gray-400">100% Authentic</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all">
                  <FaAward className="text-yellow-400 text-3xl mb-2" />
                  <h4 className="font-bold text-white">Best Rates</h4>
                  <p className="text-sm text-gray-400">Market Leading</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all">
                  <FaHandshake className="text-yellow-400 text-3xl mb-2" />
                  <h4 className="font-bold text-white">Trusted</h4>
                  <p className="text-sm text-gray-400">Since Day One</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all">
                  <FaClock className="text-yellow-400 text-3xl mb-2" />
                  <h4 className="font-bold text-white">Instant</h4>
                  <p className="text-sm text-gray-400">Quick Payment</p>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative slide-right">
              <div className="relative">
                <img
                  src={aboutImg}
                  alt="About South Gold Company"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover border-4 border-yellow-400/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              </div>
              {/* Floating decorative image */}
              <div className="absolute -bottom-8 -right-8 hidden md:block">
                <img
                  src={ringImg}
                  alt="Gold Ring"
                  className="w-40 h-40 rounded-full shadow-2xl border-4 border-yellow-400 object-cover animate-pulse"
                />
              </div>
            </div>
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 fade-in">
            <div className="bg-gradient-to-br from-yellow-400/10 to-amber-600/10 p-8 rounded-2xl border-2 border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="text-5xl">✨</div>
                <div>
                  <h3 className="text-2xl font-bold text-yellow-300 mb-3">
                    New Gold Ornaments
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    You can make{" "}
                    <span className="font-semibold text-yellow-300">
                      New Gold Ornaments
                    </span>{" "}
                    by giving old Gold or jewellery with{" "}
                    <span className="font-semibold text-yellow-300">
                      no making charges
                    </span>{" "}
                    and the wastage at just{" "}
                    <span className="font-semibold text-yellow-300 text-lg">6-8%</span>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-400/10 to-amber-600/10 p-8 rounded-2xl border-2 border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🏠</div>
                <div>
                  <h3 className="text-2xl font-bold text-yellow-300 mb-3">
                    Convenient Service
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We{" "}
                    <span className="font-semibold text-yellow-300">
                      release your pledged Gold and pledge at your convenient place
                    </span>
                    , making the entire process hassle-free and comfortable for you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Gold Gallery Section */}
          <div className="py-12">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-3">
                Our Gold Collection
              </h3>
              <p className="text-gray-300 text-lg">
                Explore the finest selection of authentic gold
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {/* Gold Image 1 */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/29/12/13/wedding-1808235_1280.jpg"
                  alt="Gold Bangles"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white font-semibold text-sm">Gold Bangles</p>
                </div>
              </div>

              {/* Gold Image 2 */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&h=400&fit=crop&q=80"
                  alt="Gold Bars"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white font-semibold text-sm">Gold Bars</p>
                </div>
              </div>

              {/* Gold Image 3 */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop&q=80"
                  alt="Gold Chain"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white font-semibold text-sm">Gold Chain</p>
                </div>
              </div>

              {/* Gold Image 4 */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&q=80"
                  alt="Gold Earrings"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white font-semibold text-sm">Gold Earrings</p>
                </div>
              </div>

              {/* Gold Image 5 */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&q=80"
                  alt="Wedding Rings"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white font-semibold text-sm">Wedding Rings</p>
                </div>
              </div>

              {/* Gold Image 6 */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop&q=80"
                  alt="Gold Pendant"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white font-semibold text-sm">Gold Pendant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
