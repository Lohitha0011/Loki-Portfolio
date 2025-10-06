import { SiNodedotjs, SiMongodb, SiSocketdotio } from 'react-icons/si';
import { Link } from 'wouter';

const techIcons = {
  'React': <span className="text-sky-400 font-bold">React</span>,
  'Vite': <span className="text-yellow-300 font-bold">Vite</span>,
  'Tailwind CSS': <span className="text-cyan-300 font-bold">Tailwind</span>,
  'Node.js': <SiNodedotjs className="text-green-400" />,
  'Express.js': <span className="text-gray-300 font-bold">Express</span>,
  'MongoDB': <SiMongodb className="text-emerald-400" />,
  'Socket.io': <SiSocketdotio className="text-white" />,
};

const ProjectChatbotGenAI = () => (
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
      <div className="w-full h-64 sm:h-80 flex items-center justify-center overflow-hidden bg-[#0b1020]">
        <img
          src="/images/dnx-dashboard.svg"
          alt="DNX Dashboard illustration"
          className="object-contain w-full h-full"
          loading="lazy"
        />
      </div>
      {/* Divider */}
      {/* Divider removed for plain look */}
      <div className="p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1">DNX Dashboard</h1>
        <h2 className="text-lg text-cosmic-silver mb-2 font-semibold">Task Management & Community Platform</h2>
        <p className="text-base text-gray-300 mb-2">Full‑stack dashboard built with React + Vite frontend and Express/MongoDB backend.</p>
        <p className="text-gray-400 text-sm mb-6">
          Responsive dashboard with charts and real‑time messaging. Frontend uses React 18, Vite, Tailwind CSS; backend uses Node.js, Express.js, MongoDB Atlas, and Socket.io for live updates.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-6">
          {["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Socket.io"].map((tech) => (
            <span key={tech} className="flex items-center gap-2 text-white px-3 py-1 text-sm font-medium">
              {techIcons[tech]} {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-star-white mb-3">Key Features</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Built a real-time, interactive interface for user queries.</li>
            <li>Combined retrieval and generative techniques for context-aware responses.</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-between items-center mt-8">
          <Link href="/projects">
            <button className="text-white px-5 py-2 focus:outline-none">
              ← Back to Projects
            </button>
          </Link>
            <a href="https://task-mngmt-2m14.vercel.app" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center bg-gray-800 text-white px-4 py-2 rounded-full border border-gray-600 transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-white/20 hover:scale-105 animate-fadeInUp cursor-pointer focus:outline-none focus:ring-0">Live Demo</a>
            <a href="https://github.com/Lohitha0011/Task-Mngmt" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center bg-gray-800 text-white px-4 py-2 rounded-full border border-gray-600 transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-white/20 hover:scale-105 animate-fadeInUp cursor-pointer focus:outline-none focus:ring-0">View Source</a>
          
        </div>
      </div>
    </div>
    </div>
  </>
);

export default ProjectChatbotGenAI;
