import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import React, { useState, useEffect } from "react";

// Custom SVG Icons
const Github = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Mail = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const ExternalLink = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ["home", "about", "projects"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      id: 1,
      title: "Building Payment Infrastructure",
      description:
        "Deliver end-to-end OneMoney integrations with merchants, banks, and payment networks, enabling wallet-bank transfers, POS acceptance and fund disbursements",
      image:
        "https://scontent-jnb2-1.cdninstagram.com/v/t39.30808-6/612239496_1309853034520649_1879133359085787814_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzgwNDEwOTYzNzYxMjgyMDUwNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=PFtFc4rV1PkQ7kNvwE_w-wA&_nc_oc=AdksL5VfjN098Iv_NFGmMfU74QOs-RNatE-LCk7K0nLapVSNV9VuWZQlvlNHYEcQsM0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-jnb2-1.cdninstagram.com&_nc_gid=8yw4cMy_yCA5PnEAP5aViA&oh=00_AfuCcDBmBJmg6Ry_aHEXA9dqiVtIaLuhaG9zPFluP0bCyw&oe=698CA9C0",
      tags: ["ISO8583", "SOAP", "REST APIs"],
    },
    {
      id: 2,
      title: "Enterprise CRM System",
      description:
        "Built a comprehensive customer relationship management system with third-party integrations including ERPNext, and custom webhooks for real-time data synchronization.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "PostgreSQL"],
    },
    {
      id: 3,
      title: "API Orchestration Platform",
      description:
        "Developed a microservices orchestration layer that connects 20+ internal and external APIs, reducing integration time by 60% and improving system reliability.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      tags: ["Microservices", "Docker", "Kubernetes"],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-400">&lt;Dev/&gt;</div>
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Left Sidebar Navigation */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <div className="flex flex-col gap-8">
          {["home", "about", "projects"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-sm uppercase tracking-wider transition-all duration-300 text-left ${
                activeSection === section
                  ? "text-blue-400 font-semibold scale-110"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-px transition-all duration-300 ${
                    activeSection === section
                      ? "bg-blue-400 w-12"
                      : "bg-gray-600"
                  }`}
                />
                {section}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-blue-400">
            Software Engineer &
            <br />
            Integration Specialist
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Building seamless connections between systems and crafting elegant
            solutions for complex integration challenges.
          </p>
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative px-8 py-4 bg-blue-600 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            Explore My Work
            <ExternalLink
              className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </button>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(-100vh) translateX(20px);
            }
          }
        `}</style>
      </section>

      {/* About Section - Timeline Style */}
      <section
        id="about"
        className="min-h-screen flex items-center py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-bold mb-4 text-blue-400">My Journey</h2>
          <p className="text-gray-400 mb-16 text-lg">
            Connecting systems, solving problems, building solutions
          </p>

          {/* Interactive Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Card 1 - What I Do */}
            <div className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-white mb-3">
                System Integration
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I make different systems talk to each other. Whether it's
                connecting payment gateways, CRM platforms, or custom APIs, I
                build the bridges that make data flow seamlessly.
              </p>
            </div>

            {/* Card 2 - How I Think */}
            <div className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Problem Solver
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every integration challenge is a puzzle. I thrive on finding
                elegant solutions to complex technical problems, turning chaos
                into organized, efficient workflows.
              </p>
            </div>

            {/* Card 3 - Impact */}
            <div className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Scale Builder
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                From handling thousands of daily transactions to orchestrating
                complex microservices, I build solutions that scale and perform
                under pressure.
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
              <div className="text-3xl font-bold text-blue-400 mb-1">50+</div>
              <div className="text-gray-500 text-sm">Integrations Built</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
              <div className="text-3xl font-bold text-blue-400 mb-1">15+</div>
              <div className="text-gray-500 text-sm">APIs Developed</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
              <div className="text-3xl font-bold text-blue-400 mb-1">20+</div>
              <div className="text-gray-500 text-sm">Platforms Connected</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
              <div className="text-3xl font-bold text-blue-400 mb-1">99.9%</div>
              <div className="text-gray-500 text-sm">Uptime Record</div>
            </div>
          </div>

          {/* Tech Stack Visualization */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Tech Arsenal</h3>
            <div className="space-y-6">
              {/* Backend */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400 uppercase tracking-wider">
                    Backend & APIs
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "JAVA",
                    "Node.js",
                    "REST APIs",
                    "SOAP",
                    "ISO8583",
                    "Webhooks",
                    "Microservices",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Integrations */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400 uppercase tracking-wider">
                    Integration Platforms
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["ERPNext", "OneMoney", "Paynow", "Twilio", "SendGrid"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Infrastructure */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400 uppercase tracking-wider">
                    Infrastructure & DevOps
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "AWS", "PostgreSQL", "MongoDB"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-blue-400">
            Featured Projects
          </h2>
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center group`}
              >
                <div className="md:w-1/2 relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-blue-500 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="group/btn px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2">
                    View Details
                    <ExternalLink
                      className="group-hover/btn:translate-x-1 transition-transform"
                      size={18}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400 mb-4">
            Let's build something amazing together
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-600 text-sm">© 2026 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
