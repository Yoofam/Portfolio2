import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function ContactSection({ isDarkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus({
        type: "error",
        message: error.message || "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
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
            Get In Touch
          </h2>
          <p
            className={`max-w-2xl mx-auto transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Ready to start your next project? I'd love to hear from you and
            discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3
              className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Let's Work Together
            </h3>
            <p
              className={`mb-8 transition-colors duration-300 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Whether you need a stunning website, compelling graphics, or a
              complete brand identity, I'm here to help your business make a
              lasting impression.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    isDarkMode ? "bg-blue-900/50" : "bg-blue-100"
                  }`}
                >
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <p
                    className={`font-medium transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Email
                  </p>
                  <p
                    className={`transition-colors duration-300 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    victoradeleke55@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    isDarkMode ? "bg-blue-900/50" : "bg-blue-100"
                  }`}
                >
                  <Phone className="text-blue-600" size={20} />
                </div>
                <div>
                  <p
                    className={`font-medium transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Phone
                  </p>
                  <p
                    className={`transition-colors duration-300 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    +2349132891389
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`p-8 rounded-lg transition-colors duration-300 ${
              isDarkMode ? "bg-gray-700" : "bg-gray-50"
            }`}
          >
            {submitStatus && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-100 text-green-700 border border-green-200"
                    : "bg-red-100 text-red-700 border border-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                    isDarkMode
                      ? "bg-gray-600 border-gray-500 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                    isDarkMode
                      ? "bg-gray-600 border-gray-500 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                    isDarkMode
                      ? "bg-gray-600 border-gray-500 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg transition-colors ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
