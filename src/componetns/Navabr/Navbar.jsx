import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // ✅ Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Detect scroll for zoom-in effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-white/80 shadow-lg scale-[1.03]"
          : "bg-white/90 shadow-md scale-100"
      }`}
    >
      {/* Left Logo */}
      <div className="nav-logo flex items-center gap-2 z-50 transition-all duration-300">
        <img
          src={logo}
          alt="South Gold Logo"
          className={`object-contain transition-all duration-300 ${
            scrolled ? "w-24 h-16" : "w-22 h-14"
          }`}
        />
      </div>

      {/* Center Menu (Desktop) */}
      <ul className="hidden md:flex gap-10 text-gray-700 font-medium absolute left-1/2 transform -translate-x-1/2">
        {["/", "/about", "/services", "/contact"].map((path, i) => {
          const labels = ["HOME", "ABOUT", "SERVICES", "CONTACT"];
          return (
            <li key={path}>
              <NavLink
                to={path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-600 border-b-2 border-yellow-500 pb-1"
                    : "hover:text-yellow-600 transition"
                }
              >
                {labels[i]}
              </NavLink>
            </li>
          );
        })}
      </ul>

      {/* 🟡 Social Icons (Right Side) */}
      <div className="hidden md:flex items-center gap-3">
        {[FaFacebookF, FaInstagram, FaTwitter, FaPinterestP].map(
          (Icon, index) => (
            <a
              key={index}
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-yellow-600 text-gray-700 hover:bg-yellow-500 hover:text-white transition-all duration-300"
            >
              <Icon size={16} />
            </a>
          )
        )}
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden text-3xl text-gray-700 cursor-pointer z-50"
        onClick={toggleMenu}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Dropdown Menu (Mobile) */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-500 ease-in-out origin-top ${
          menuOpen
            ? "scale-y-100 opacity-100 visible"
            : "scale-y-0 opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center py-6 space-y-5 text-gray-700 font-medium">
          {["/", "/about", "/services", "/contact"].map((path, i) => {
            const labels = ["HOME", "ABOUT", "SERVICES", "CONTACT"];
            return (
              <li
                key={path}
                className={`transition-all duration-300 ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[-10px] opacity-0"
                }`}
                style={{ transitionDelay: menuOpen ? `${i * 70}ms` : "0ms" }}
              >
                <NavLink
                  to={path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-600 border-b-2 border-yellow-500 pb-1"
                      : "hover:text-yellow-600 transition"
                  }
                >
                  {labels[i]}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* 🟡 Social Icons in Mobile Menu */}
        <div className="flex justify-center gap-4 pb-6">
          {[FaFacebookF, FaInstagram, FaTwitter, FaPinterestP].map(
            (Icon, index) => (
              <a
                key={index}
                href="#"
                className={`w-10 h-10 flex items-center justify-center rounded-full border border-yellow-600 text-gray-700 hover:bg-yellow-500 hover:text-white transition-all duration-300 ${
                  menuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
                style={{
                  transitionDelay: menuOpen ? `${280 + index * 60}ms` : "0ms",
                }}
              >
                <Icon size={16} />
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
