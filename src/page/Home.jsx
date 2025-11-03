import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaWhatsapp, FaGem, FaStar, FaShieldAlt } from "react-icons/fa";
import homeImage from "../assets/home.jpeg";
import ringVideo from "../assets/video/video.mp4";
import whatsappVideo from "../WhatsApp Video 2025-11-03 at 12.28.44_37074b5a.mp4";
import Footer from "../componetns/Footer/Footer";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const texts = ["Sell Your Gold", "for the Best Price."];

const Home = () => {
  useScrollAnimation();

  const whatsappNumber = "918400400916";
  const message = encodeURIComponent("Hello! how can i help you.");
  const videoRef = useRef(null);
  const videoRef2 = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showButton2, setShowButton2] = useState(true);

  // 🟡 Typing animation states
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const typingSpeed = isDeleting ? 80 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1200); // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length); // Loop between texts
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
    setShowButton(false);
  };

  const handlePlayPause2 = () => {
    if (!videoRef2.current) return;
    if (isPlaying2) {
      videoRef2.current.pause();
    } else {
      videoRef2.current.muted = false;
      videoRef2.current.play();
    }
    setIsPlaying2(!isPlaying2);
    setShowButton2(false);
  };

  return (
    <>
      {/* 🟡 Hero Section */}
      <section
        className="relative bg-gradient-to-b from-[#1f0f1a] to-[#3e1e35] min-h-screen"
        style={{
          backgroundColor: "#1f0f1a",
        }}
      >
        {/* Top Text & Image Section */}
        <div className="container mx-auto px-4 pt-24 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Text Content */}
            <div className="text-white space-y-4 text-center lg:text-left slide-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-400">
                South Gold Company
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight min-h-16 flex items-center justify-center lg:justify-start">
                <span className="border-r-4 border-amber-400 pr-3 animate-pulse whitespace-nowrap text-white">
                  {displayText}
                </span>
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Transparent valuations, live market rates, and instant payment.
                Your trusted partner in gold.
              </p>
              
              {/* WhatsApp CTA Button */}
              <div className="flex gap-4 justify-center lg:justify-start pt-2">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-amber-400 hover:bg-amber-300 text-black font-semibold px-8 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                    <FaWhatsapp size={20} />
                    Contact Us
                  </button>
                </a>
              </div>
            </div>

            {/* Right: Featured Image */}
            <div className="relative slide-right">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-amber-400/30 max-h-96">
                <img
                  src={homeImage}
                  alt="South Gold Company"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Bottom Video Section */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            {/* Video Title */}
            <div className="text-center mb-6 fade-in">
              <h3 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-2">
                Experience Excellence
              </h3>
              <p className="text-gray-300 text-base sm:text-lg">
                Watch how we redefine gold buying and selling
              </p>
            </div>

            {/* Video Player */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400/30 slide-up max-h-96"
              onMouseEnter={() => setShowButton(true)}
              onMouseLeave={() => setShowButton(false)}
            >
              <video
                ref={videoRef}
                src={ringVideo}
                loop
                muted
                playsInline
                className="w-full h-96 object-cover"
              />

              {/* Play / Pause Button */}
              <button
                onClick={handlePlayPause}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 bg-black/20 ${
                  showButton ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="bg-amber-500 hover:bg-amber-400 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-2xl transition-all duration-300 transform hover:scale-110">
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </span>
              </button>

              {/* Glow effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1/2 bg-amber-400 rounded-full blur-3xl opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎠 Continuous Scrolling Carousel Strip */}
      <section className="relative py-8 bg-gradient-to-r from-[#3e1e35] via-[#1f0f1a] to-[#3e1e35] overflow-hidden border-y-2 border-amber-400/30">
        {/* Scrolling Content Container */}
        <div className="relative">
          {/* First Scrolling Strip - Left to Right */}
          <div className="flex whitespace-nowrap animate-scroll-left mb-4">
            {/* Duplicate content for seamless loop */}
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="flex items-center gap-8 mx-8">
                  <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-400/30">
                    <FaGem className="text-amber-400 text-2xl" />
                    <span className="text-white font-semibold text-lg">100% Pure Gold</span>
                  </div>
                  <div className="text-amber-400 text-3xl">✦</div>
                  
                  <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-400/30">
                    <FaStar className="text-amber-400 text-2xl" />
                    <span className="text-white font-semibold text-lg">Best Market Rates</span>
                  </div>
                  <div className="text-amber-400 text-3xl">✦</div>
                  
                  <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-400/30">
                    <FaShieldAlt className="text-amber-400 text-2xl" />
                    <span className="text-white font-semibold text-lg">Trusted & Secure</span>
                  </div>
                  <div className="text-amber-400 text-3xl">✦</div>
                  
                  <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-400/30">
                    <FaWhatsapp className="text-amber-400 text-2xl" />
                    <span className="text-white font-semibold text-lg">Instant Payment</span>
                  </div>
                  <div className="text-amber-400 text-3xl">✦</div>
                  
                  <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-400/30">
                    <FaGem className="text-amber-400 text-2xl" />
                    <span className="text-white font-semibold text-lg">No Hidden Charges</span>
                  </div>
                  <div className="text-amber-400 text-3xl">✦</div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Scrolling Strip - Right to Left */}
          <div className="flex whitespace-nowrap animate-scroll-right">
            {/* Duplicate content for seamless loop */}
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="flex items-center gap-8 mx-8">
                  <div className="flex items-center gap-3 bg-amber-400/10 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-400/40">
                    <span className="text-amber-400 font-bold text-lg">500+ Happy Customers</span>
                  </div>
                  <div className="text-amber-400 text-3xl">★</div>
                  
                  <div className="flex items-center gap-3 bg-amber-400/10 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-400/40">
                    <span className="text-amber-400 font-bold text-lg">First in Bangalore</span>
                  </div>
                  <div className="text-amber-400 text-3xl">★</div>
                  
                  <div className="flex items-center gap-3 bg-amber-400/10 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-400/40">
                    <span className="text-amber-400 font-bold text-lg">Transparent Process</span>
                  </div>
                  <div className="text-amber-400 text-3xl">★</div>
                  
                  <div className="flex items-center gap-3 bg-amber-400/10 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-400/40">
                    <span className="text-amber-400 font-bold text-lg">₹1Cr+ Transactions</span>
                  </div>
                  <div className="text-amber-400 text-3xl">★</div>
                  
                  <div className="flex items-center gap-3 bg-amber-400/10 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-400/40">
                    <span className="text-amber-400 font-bold text-lg">24/7 Support</span>
                  </div>
                  <div className="text-amber-400 text-3xl">★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔸 Other Sections */}
      <About />
      <Services />

      {/* 🌟 Premium Gold Experience Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#3e1e35] to-[#1f0f1a] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-amber-400 mb-4">
              Why Choose South Gold Company?
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Experience the perfect blend of tradition, trust, and transparency in every transaction
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Video */}
            <div className="slide-left">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400/40"
                onMouseEnter={() => setShowButton2(true)}
                onMouseLeave={() => setShowButton2(false)}
              >
                <video
                  ref={videoRef2}
                  src={whatsappVideo}
                  loop
                  muted
                  playsInline
                  className="w-full h-96 object-cover"
                />
                
                {/* Play / Pause Button */}
                <button
                  onClick={handlePlayPause2}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 bg-black/30 ${
                    showButton2 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="bg-amber-500 hover:bg-amber-400 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-2xl transition-all duration-300 transform hover:scale-110">
                    {isPlaying2 ? <FaPause /> : <FaPlay />}
                  </span>
                </button>
              </div>
            </div>

            {/* Right: Features */}
            <div className="space-y-6 slide-right">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-amber-400/30 hover:border-amber-400/60 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-400 p-3 rounded-lg">
                    <FaGem className="text-2xl text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-400 mb-2">Premium Quality</h3>
                    <p className="text-gray-300">
                      100% certified and hallmarked gold with guaranteed purity and authenticity
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-amber-400/30 hover:border-amber-400/60 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-400 p-3 rounded-lg">
                    <FaStar className="text-2xl text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-400 mb-2">Best Market Rates</h3>
                    <p className="text-gray-300">
                      Get the highest returns with our transparent, real-time market pricing
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-amber-400/30 hover:border-amber-400/60 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-400 p-3 rounded-lg">
                    <FaShieldAlt className="text-2xl text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-400 mb-2">Trusted & Secure</h3>
                    <p className="text-gray-300">
                      Safe, legal transactions with instant payment and complete documentation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gold Images Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 fade-in">
            <div className="relative group overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&h=400&fit=crop"
                alt="Gold Jewelry"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">Fine Jewelry</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop"
                alt="Gold Coins"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">Gold Coins</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop"
                alt="Gold Necklace"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">Necklaces</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop"
                alt="Gold Rings"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">Gold Rings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />

      {/* 🟢 Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center z-50 animate-bounce"
      >
        <FaWhatsapp size={28} />
      </a>
    </>
  );
};

export default Home;
