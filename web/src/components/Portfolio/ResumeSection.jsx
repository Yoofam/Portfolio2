import React from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  GraduationCap,
  Award,
} from "lucide-react";

export default function ResumeSection({ isDarkMode, experiences, education }) {
  return (
    <section
      id="cv"
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
            Resume
          </h2>
          <p
            className={`max-w-2xl mx-auto transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A comprehensive overview of my professional journey, skills, and
            achievements in web design and graphic design.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Professional Summary */}
          <div className="lg:col-span-3">
            <div
              className={`p-6 rounded-lg transition-colors duration-300 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Professional Summary
              </h3>
              <p
                className={`text-lg leading-relaxed transition-colors duration-300 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Creative and detail-oriented Website Designer and Graphic
                Designer with over 5 years of experience crafting compelling
                digital experiences. Specialized in creating responsive
                websites, brand identities, and marketing materials that drive
                business growth. Proven track record of delivering high-quality
                designs that balance aesthetics with functionality, resulting in
                improved user engagement and client satisfaction.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="lg:col-span-2">
            <div
              className={`p-6 rounded-lg transition-colors duration-300 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-6 flex items-center gap-2 transition-colors duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <Briefcase size={24} />
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4
                        className={`text-lg font-semibold transition-colors duration-300 ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {exp.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                      <span
                        className={`font-medium transition-colors duration-300 ${
                          isDarkMode ? "text-blue-400" : "text-blue-600"
                        }`}
                      >
                        {exp.company}
                      </span>
                      <span
                        className={`text-sm flex items-center gap-1 transition-colors duration-300 ${
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className={`text-sm transition-colors duration-300 ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <div
              className={`p-6 rounded-lg mb-6 transition-colors duration-300 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-6 flex items-center gap-2 transition-colors duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <GraduationCap size={24} />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h4
                      className={`font-semibold transition-colors duration-300 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {edu.degree}
                    </h4>
                    <p
                      className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 text-xs">
                      <span
                        className={`flex items-center gap-1 transition-colors duration-300 ${
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        <MapPin size={12} />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div
              className={`p-6 rounded-lg transition-colors duration-300 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-4 flex items-center gap-2 transition-colors duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <Award size={24} />
                Key Achievements
              </h3>
              <ul className="space-y-2">
                <li
                  className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  • Designed 10+ websites across various industries
                </li>
                <li
                  className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  • Increased client satisfaction by 40%
                </li>
                <li
                  className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  • Successfully launched 50+ brand identities
                </li>
                <li
                  className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  • Expertise in modern web technologies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
