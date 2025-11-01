import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import footer_bg_img from "../../assets/footer_bg_img.png";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Footer = () => {
  useScrollAnimation();

  return (
    <footer
      className="relative text-gray-100 pt-16 pb-10 overflow-hidden"
      style={{
        backgroundImage: `url(${footer_bg_img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center flex flex-col items-center space-y-10">
        {/* Logo & Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 tracking-wide drop-shadow-lg">
          South Gold Company
        </h2>

        {/* Tagline */}
        <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
          Trusted by thousands across Bangalore, South Gold Company ensures
          <span className="text-yellow-400 font-medium">
            {" "}
            purity, transparency,{" "}
          </span>
          and <span className="text-yellow-400 font-medium">fair value</span> in
          every gold transaction. Experience seamless service with{" "}
          <span className="font-semibold text-yellow-400">integrity</span> and{" "}
          <span className="font-semibold text-yellow-400">trust</span>.
        </p>

        {/* Divider Line */}
        <div className="h-[2px] w-24 bg-yellow-500 rounded-full"></div>

        {/* Quick Links (React Router Navigation) */}
        <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base font-medium uppercase tracking-wide">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border-b border-yellow-500 pb-1"
                : "hover:text-yellow-400 transition duration-300 hover:scale-105"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border-b border-yellow-500 pb-1"
                : "hover:text-yellow-400 transition duration-300 hover:scale-105"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border-b border-yellow-500 pb-1"
                : "hover:text-yellow-400 transition duration-300 hover:scale-105"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border-b border-yellow-500 pb-1"
                : "hover:text-yellow-400 transition duration-300 hover:scale-105"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-5 mt-6">
          {/* Facebook - Linked to your profile */}
          <a
            href="https://www.facebook.com/share/15xfpB7R8K/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-500/80 text-white backdrop-blur-md border border-yellow-400/30 transition-transform duration-300 hover:scale-110 shadow-md"
            title="Follow us on Facebook"
          >
            <FaFacebookF className="text-lg" />
          </a>
          
          {/* Instagram - Linked to your profile */}
          <a
            href="https://www.instagram.com/south_gold_company?igsh=ZHBkbmZ0ZGpld2d2"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-500/80 text-white backdrop-blur-md border border-yellow-400/30 transition-transform duration-300 hover:scale-110 shadow-md"
            title="Follow us on Instagram"
          >
            <FaInstagram className="text-lg" />
          </a>
          
          {/* WhatsApp - Business contact */}
          <a
            href="https://wa.me/918400400916?text=Hello%20South%20Gold%20Company,%20I%20would%20like%20to%20inquire%20about%20your%20gold%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-500/80 text-white backdrop-blur-md border border-yellow-400/30 transition-transform duration-300 hover:scale-110 shadow-md"
            title="Chat with us on WhatsApp"
          >
            <FaWhatsapp className="text-lg" />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-yellow-600/30 w-full mt-10 pt-6">
          <p className="text-sm md:text-base text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="text-yellow-400 font-semibold">
              South Gold Company
            </span>
            . All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Subtle Glow at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-yellow-500/20 to-transparent blur-xl"></div>
    </footer>
  );
};

export default Footer;
