import React from "react";
import { Download } from "lucide-react";

export default function HeroSection({
  isDarkMode,
  scrollToSection,
  downloadCV,
}) {
  return (
    <section
      id="home"
      className={`pt-20 pb-16 transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-800 via-purple-800 to-slate-800"
          : "bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1
              className={`text-4xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Hi, I'm <span className="animated-name">Victor Adeleke👑</span>
            </h1>
            <p
              className={`text-xl mb-8 transition-colors duration-300 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Website Designer & Graphic Designer creating beautiful digital
              experiences and compelling visual identities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Work
              </button>
              <button
                onClick={downloadCV}
                className={`border px-8 py-3 rounded-lg transition-colors flex items-center gap-2 ${
                  isDarkMode
                    ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Download size={20} />
                View Resume
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center p-2">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                <img
                  src="https://raw.createusercontent.com/080cc7a4-04f8-48b6-9b32-7f3ae25f05bc/"
                  alt="Victor Adeleke - Developer Bitmoji"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-lg font-semibold"
                  style={{ display: "none" }}
                >
                  VA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
