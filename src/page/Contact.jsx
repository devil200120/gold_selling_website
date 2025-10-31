import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import Footer from "../componetns/Footer/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Contact = () => {
  useScrollAnimation();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success animation
    setShowSuccess(true);

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Main Section */}
      <div
        className="py-16 px-6 text-gray-100"
        style={{ backgroundColor: "#1f0f1a" }}
      >
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold text-yellow-500 mb-3">
              Contact Us
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We’d love to hear from you! Whether you have a question about our
              services, need assistance, or just want to share your feedback,
              feel free to reach out.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Side: Contact Info */}
            <div className="space-y-6 slide-left">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-amber-500 text-2xl" />
                <div>
                  <h4 className="text-lg font-semibold text-amber-400">
                    Our Address
                  </h4>
                  <p className="text-gray-300">
                    South Gold Company #3, Hennur Main Road, Sait Palya,
                    Bangalore - 560084, Karnataka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-amber-500 text-2xl" />
                <div>
                  <h4 className="text-lg font-semibold text-amber-400">
                    Phone Number
                  </h4>
                  <p className="text-gray-300">(+91) 8400 400 916</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-amber-500 text-2xl" />
                <div>
                  <h4 className="text-lg font-semibold text-amber-400">
                    Email Address
                  </h4>
                  <p className="text-gray-300">support@goldlux.com</p>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-xl overflow-hidden mt-6 border border-amber-600 shadow-lg">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58937.0026!2d85.7660!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7d2b9f909b1%3A0x84f259a12cb842b!2sBhubaneswar!5e0!3m2!1sen!2sin!4v1692202200000"
                  width="100%"
                  height="250"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-none"
                ></iframe>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-amber-700 slide-right relative">
              <h3 className="text-2xl font-semibold text-amber-400 mb-6">
                Send a Message
              </h3>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg border border-amber-800 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-amber-800 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    className="w-full px-4 py-3 rounded-lg border border-amber-800 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Type your message..."
                    className="w-full px-4 py-3 rounded-lg border border-amber-800 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-black py-3 rounded-lg font-semibold transition-all hover:scale-105"
                >
                  Send Message
                </button>
              </form>

              {/* Success Animation Modal */}
              {showSuccess && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md rounded-2xl z-50 animate-fadeIn">
                  <div className="text-center animate-scaleIn">
                    <div className="relative">
                      {/* Animated Circle Background */}
                      <div className="w-32 h-32 mx-auto mb-6 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-pulse"></div>
                        <div className="absolute inset-2 bg-[#1f0f1a] rounded-full flex items-center justify-center">
                          <FaCheckCircle className="text-6xl text-amber-400 animate-bounceIn" />
                        </div>
                      </div>

                      {/* Success Text */}
                      <h3 className="text-3xl font-bold text-amber-400 mb-3 animate-slideUp">
                        Message Sent!
                      </h3>
                      <p
                        className="text-gray-300 text-lg animate-slideUp"
                        style={{ animationDelay: "0.2s" }}
                      >
                        Thank you for contacting us.
                      </p>
                      <p
                        className="text-gray-400 text-sm mt-2 animate-slideUp"
                        style={{ animationDelay: "0.3s" }}
                      >
                        We'll get back to you soon!
                      </p>

                      {/* Confetti Effect */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 bg-amber-400 rounded-full animate-confetti"
                            style={{
                              left: `${
                                Math.cos((i * 45 * Math.PI) / 180) * 100
                              }px`,
                              top: `${
                                Math.sin((i * 45 * Math.PI) / 180) * 100
                              }px`,
                              animationDelay: `${i * 0.1}s`,
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
