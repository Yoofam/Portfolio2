import React from "react";
import {
  Github,
  Linkedin,
  Code,
  FileCode,
  Component,
  Image,
  PenTool,
  Figma,
  Palette,
  Brush,
} from "lucide-react";

const iconMap = {
  Code,
  FileCode,
  Component,
  Image,
  PenTool,
  Figma,
  Palette,
  Brush,
};

const SkillIcon = ({ name, icon, isDarkMode }) => {
  const IconComponent = iconMap[icon];

  return (
    <div className="flex flex-col items-center p-4 group">
      <div
        className={`p-4 rounded-lg transition-all duration-300 ${
          isDarkMode
            ? "bg-gray-700 group-hover:bg-gray-600"
            : "bg-white group-hover:bg-gray-50"
        } shadow-lg group-hover:shadow-xl`}
      >
        <IconComponent
          size={32}
          className={`transition-colors duration-300 ${
            isDarkMode ? "text-blue-400" : "text-blue-600"
          }`}
        />
      </div>
      <span
        className={`mt-2 text-sm font-medium text-center transition-colors duration-300 ${
          isDarkMode ? "text-gray-200" : "text-gray-700"
        }`}
      >
        {name}
      </span>
    </div>
  );
};

export default function AboutSection({ isDarkMode, skills }) {
  return (
    <section
      id="about"
      className={`py-16 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            About Me
          </h2>
          <p
            className={`max-w-2xl mx-auto transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I'm a passionate designer with over 5 years of experience in
            creating stunning websites and compelling graphic designs that help
            businesses stand out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3
              className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              My Story
            </h3>
            <p
              className={`mb-4 transition-colors duration-300 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              With a keen eye for detail and a passion for innovation, I
              specialize in creating digital experiences that not only look
              beautiful but also drive results. My expertise spans across web
              design, graphic design, and brand identity.
            </p>
            <p
              className={`mb-6 transition-colors duration-300 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I believe in the power of good design to transform businesses and
              create meaningful connections with audiences. Every project I work
              on is an opportunity to solve problems creatively and deliver
              exceptional value.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Yoofam"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  isDarkMode
                    ? "text-gray-400 hover:text-blue-400"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/victor-adeleke-86700a374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  isDarkMode
                    ? "text-gray-400 hover:text-blue-400"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3
              className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <SkillIcon key={index} {...skill} isDarkMode={isDarkMode} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
