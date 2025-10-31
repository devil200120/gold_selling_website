import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaWhatsapp } from "react-icons/fa";
import image from "../assets/home_img.png";
import ringVideo from "../assets/video/video.mp4";
import Footer from "../componetns/Footer/Footer";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const Home = () => {
  const whatsappNumber = "918400400916";
  const message = encodeURIComponent("Hello! how can i help you.");
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(true);

  // 🟡 Typing animation states
  const texts = ["Sell Your Gold", "for the Best Price."];
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

  return (
    <>
      {/* 🟡 Hero Section */}
      <section
        className="relative flex flex-col md:flex-row items-center justify-between bg-cover bg-center bg-no-repeat min-h-screen"
        style={{
          backgroundColor: "#1f0f1a",
          backgroundImage: `url(${image})`,
        }}
      >
        {/* 🟡 Golden Overlay */}
        <div className="absolute inset-0  from-amber-900/50 via-amber-800/40 to-transparent"></div>

        {/* 🟡 Text Content */}
        <div className="relative z-10 px-5 sm:px-10 md:px-10 py-16 md:py-0 text-white max-w-xl ">
          <div className="space-y-15">
            {" "}
            <h1 className="text-3xl sm:text-5xl md:text-4xl font-extrabold ">
              South Gold Company
            </h1>
            <h1 className=" text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-4 min-h-[90px] flex items-center">
              <span className="border-r-4 border-amber-400 pr-2 animate-pulse whitespace-nowrap">
                {displayText}
              </span>
            </h1>
            <p className="text-gray-200 text-base sm:text-lg mb-8">
              Transparent valuations, live market rates, and instant payment.
              Your trusted partner in gold.
            </p>
          </div>

          {/* 🟢 WhatsApp CTA Button */}
          <div className="flex md:justify-start justify-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-amber-400 cursor-pointer hover:bg-amber-300 text-black font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300">
                WhatsApp
              </button>
            </a>
          </div>
        </div>

        {/* 🎥 Video Section */}
        <div
          className="relative z-10 md:w-1/2 w-full px-8 md:px-16 flex justify-center items-center mt-10 md:mt-0"
          onMouseEnter={() => setShowButton(true)}
          onMouseLeave={() => setShowButton(false)}
        >
          <video
            ref={videoRef}
            src={ringVideo}
            loop
            muted
            playsInline
            className="object-cover rounded-2xl shadow-xl transition-all duration-500 mb-6 md:mb-0"
          />

          {/* ▶️ Play / Pause Button */}
          <button
            onClick={handlePlayPause}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
              showButton ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="bg-amber-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-110">
              {isPlaying ? <FaPause /> : <FaPlay />}
            </span>
          </button>
        </div>
      </section>

      {/* 🔸 Other Sections */}
      <About />
      <Services />
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
