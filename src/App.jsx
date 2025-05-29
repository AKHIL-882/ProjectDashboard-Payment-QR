import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal if clicked outside the image container
  const handleOutsideClick = (e) => {
    if (e.target.id === "modalOverlay") {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">BTechCareerGuide</h1>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-xl font-semibold mb-2">Project: FitFeo</h2>
        <p className="text-gray-600 mb-2">
          Web Developer Assignment:{" "}
          <strong>Healthcare Dashboard (React - Static Display)</strong>
        </p>

        {/* Pricing */}
        <div className="mb-2">
          <span className="text-red-500 line-through text-lg mr-2">
            Rs. 1500
          </span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            Offer: Rs. 1000/-
          </span>
        </div>

        {/* Demo Button */}
        <div className="mb-4 mt-2">
          <a
            href="https://healthcare-pink-ten.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            🔍 View Demo
          </a>
        </div>

        {/* QR Image Preview */}
        <div
          className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden cursor-pointer mb-4"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src="/payment_qr.jpg"
            alt="Payment QR"
            className="object-contain h-full"
          />
        </div>

        <p className="text-sm text-gray-700">
          Once done with the payment, ping me on Instagram or LinkedIn with your
          GitHub email address to get access to the code.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-4 text-2xl">
          <a
            href="https://www.instagram.com/btechcareerguide/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/duggirala-akhil-151768187/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.youtube.com/@btechcareerguide"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
            title="LinkedIn"
            color="red"
          >
            <FaYoutube className="text-red-600 hover:text-red-800" />
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-6">
          Disclaimer: Purchasing this project does not guarantee selection to
          the next round. You may need to review and modify the code as per your
          specific requirements to meet desired outcomes.
        </p>
      </div>

      {/* Modal for Enlarged QR */}
      {isModalOpen && (
        <div
          id="modalOverlay"
          className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center"
          onClick={handleOutsideClick}
        >
          <div className="bg-white p-4 rounded-lg max-w-xl max-h-[90vh] overflow-auto relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>

            {/* Enlarged Image */}
            <img
              src="/payment_qr.jpg"
              alt="Full Payment QR"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
