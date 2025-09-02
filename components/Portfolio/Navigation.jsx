import React from "react";
import { Sun, Moon } from "lucide-react";

export default function Navigation({
  activeSection,
  scrollToSection,
  isDarkMode,
  toggleTheme,
}) {
  return (
    <nav
      className={`fixed top-0 w-full backdrop-blur-sm z-50 border-b transition-colors duration-300 ${
        isDarkMode
          ? "bg-gray-900/90 border-gray-700"
          : "bg-white/90 border-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
            className={`text-2xl font-bold transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="animated-name">Victor Adeleke</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex space-x-8">
              {["home", "about", "cv", "portfolio", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item
                      ? "text-blue-500"
                      : isDarkMode
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {item === "cv" ? "Resume" : item}
                </button>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isDarkMode
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
