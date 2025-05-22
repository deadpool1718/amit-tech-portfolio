import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:bg-gradient-to-b from-blue-950 to-gray-900 ">
              <h2 className="text-xl font-bold mb-2 ">Cloud Platform</h2>
              <p className="text-gray-400 mb-3">
                Scalable cloud infrastructure management with real-time
                monitoring and automated scaling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "AWS",
                  "Node.js",
                  "Docker",
                  "MongoDB",
                  "TailwindCss",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-300 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:bg-gradient-to-b from-blue-950 to-gray-900 ">
              <h2 className="text-xl font-bold mb-2 ">Cloud Platform</h2>
              <p className="text-gray-400 mb-3">
                Scalable cloud infrastructure management with real-time
                monitoring and automated scaling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "AWS",
                  "Node.js",
                  "Docker",
                  "MongoDB",
                  "TailwindCss",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-300 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:bg-gradient-to-b from-blue-950 to-gray-900 ">
              <h2 className="text-xl font-bold mb-2 ">Cloud Platform</h2>
              <p className="text-gray-400 mb-3">
                Scalable cloud infrastructure management with real-time
                monitoring and automated scaling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "AWS",
                  "Node.js",
                  "Docker",
                  "MongoDB",
                  "TailwindCss",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-300 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:bg-gradient-to-b from-blue-950 to-gray-900 ">
              <h2 className="text-xl font-bold mb-2 ">Cloud Platform</h2>
              <p className="text-gray-400 mb-3">
                Scalable cloud infrastructure management with real-time
                monitoring and automated scaling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "AWS",
                  "Node.js",
                  "Docker",
                  "MongoDB",
                  "TailwindCss",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-300 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
