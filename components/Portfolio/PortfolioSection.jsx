import React from "react";
import { ExternalLink } from "lucide-react";

export default function PortfolioSection({ isDarkMode, projects }) {
  return (
    <section
      id="portfolio"
      className={`py-16 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            My Portfolio
          </h2>
          <p
            className={`max-w-2xl mx-auto transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Here's a selection of my recent work showcasing my expertise in web
            design and graphic design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className={`text-xl font-bold transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p
                  className={`mb-4 transition-colors duration-300 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
                <button
                  className={`flex items-center gap-2 transition-colors ${
                    isDarkMode
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-700"
                  }`}
                >
                  View Project <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
