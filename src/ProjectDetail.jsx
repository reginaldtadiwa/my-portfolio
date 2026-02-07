// ProjectDetail.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowLeft } from "./Icons"; // Changed import

const ProjectDetail = ({ projects }) => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-400 mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-400 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm border-b border-gray-800">
        <div className="w-full px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-400">
            &lt;Dev/&gt;
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>

            <div className="flex gap-4">
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
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-20">
        <div className="w-full px-6 md:px-12">
          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-blue-400 mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-400">{project.description}</p>
          </div>

          {/* Main Project Image */}
          <div className="mb-12 rounded-2xl overflow-hidden">
            <img
              src={project.images[selectedImage]}
              alt={`${project.title} - Main view`}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Image Gallery */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Project Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg ${
                    selectedImage === index ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`${project.title} - View ${index + 1}`}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Project Details */}
            <div className="md:col-span-2 space-y-12">
              {/* Project Overview */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Project Overview
                </h2>
                <div className="space-y-4">
                  {project.detailedDescription.map((paragraph, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Challenges & Solutions
                </h2>
                <div className="space-y-6">
                  {project.challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">!</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white">
                          Challenge {index + 1}
                        </h3>
                      </div>
                      <p className="text-gray-300">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Outcomes */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Key Outcomes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.outcomes.map((outcome, index) => (
                    <div
                      key={index}
                      className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">✓</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white">
                          Achievement
                        </h3>
                      </div>
                      <p className="text-gray-300">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Technologies Used */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Stats */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Project Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-white font-semibold">6 Months</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Team Size</span>
                    <span className="text-white font-semibold">
                      5 Developers
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Status</span>
                    <span className="text-green-400 font-semibold">
                      Completed
                    </span>
                  </div>
                </div>
              </div>

              {/* Back to Projects Button */}
              <Link
                to="/#projects"
                className="block w-full py-4 bg-blue-600 text-center rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="w-full px-6 text-center">
          <p className="text-gray-400 mb-4">
            Interested in working together? Let's connect!
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
};

export default ProjectDetail;
