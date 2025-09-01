import React from "react";

export default function Footer({ isDarkMode }) {
  return (
    <footer
      className={`py-8 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-900 text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © 2025 Victor Adeleke. All rights reserved. Designed with passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
