import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../componetns/Footer/Footer";

const Contact = () => {
  return (
    <>
      {/* Main Section */}
      <div
        className="py-16 px-6 text-gray-100"
        style={{ backgroundColor: "#1f0f1a" }}
      >
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
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
            <div className="space-y-6">
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
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-amber-700">
              <h3 className="text-2xl font-semibold text-amber-400 mb-6">
                Send a Message
              </h3>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
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
                    placeholder="Enter subject"
                    className="w-full px-4 py-3 rounded-lg border border-amber-800 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Type your message..."
                    className="w-full px-4 py-3 rounded-lg border border-amber-800 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-black py-3 rounded-lg font-semibold transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
