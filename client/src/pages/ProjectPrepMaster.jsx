
import { FaReact, FaNodeJs } from 'react-icons/fa';

import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { Link } from 'wouter';

const techIcons = {
  'React.js': <FaReact className="text-cyan-400" />,
  'Node.js': <FaNodeJs className="text-green-500" />,
  'Express.js': <SiExpress className="text-gray-300" />,
  'MongoDB': <SiMongodb className="text-green-400" />,
  'TailwindCSS': <SiTailwindcss className="text-blue-400" />,
};

const ProjectPrepMaster = () => (
  <>
    <video
      autoPlay
      loop
      muted
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover z-0"
      style={{ pointerEvents: 'none' }}
    >
      <source src="/videos/background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-2xl mx-auto">
      {/* Project Image */}
      <div className="w-full h-64 sm:h-80 flex items-center justify-center overflow-hidden">
        <img
          src="/images/prepmaster.jpg"
          alt="PrepMaster Screenshot"
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      {/* Divider */}
      {/* Divider removed for plain look */}
      <div className="p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1">PrepMaster</h1>
        <h2 className="text-lg text-cosmic-silver mb-2 font-semibold">Placement Preparation Platform</h2>
        <p className="text-base text-gray-300 mb-2">A web platform to help students excel in placements through a structured approach.</p>
        <p className="text-gray-400 text-sm mb-6">
          PrepMaster offers a comprehensive suite of tools for placement preparation, including curated resources, progress tracking, and a collaborative forum. Students can set goals, monitor their progress, and participate in mock interviews and quizzes. The platform provides a personalized dashboard, analytics, and a feedback system to help students improve and succeed in their placement journey.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-6">
          {["React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB"].map((tech) => (
            <span key={tech} className="flex items-center gap-2 text-white px-3 py-1 text-sm font-medium">
              {techIcons[tech]} {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-star-white mb-3">Key Features</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Integrated progress tracking tools and curated placement resources.</li>
            <li>Built a collaborative community forum for peer discussions and mentorship.</li>
            <li>Mock interview scheduling and feedback system.</li>
            <li>Personalized dashboard and analytics.</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-between items-center mt-8">
          <Link href="/projects">
            <button className="text-white px-5 py-2 focus:outline-none">
              ← Back to Projects
            </button>
          </Link>
          <a
              href="https://prepmaster.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            className="group inline-flex items-center bg-gray-800 text-white px-4 py-2 rounded-full border border-gray-600 transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-white/20 hover:scale-105 animate-fadeInUp cursor-pointer focus:outline-none focus:ring-0"
            >
              Live Demo
            </a>
          <a
            href="https://github.com/Lohitha0011/PREPMASTERS"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center bg-gray-800 text-white px-4 py-2 rounded-full border border-gray-600 transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-white/20 hover:scale-105 animate-fadeInUp cursor-pointer focus:outline-none focus:ring-0"
          >
            View Source
          </a>
         
        </div>
      </div>
    </div>
    </div>
  </>
);

export default ProjectPrepMaster;
