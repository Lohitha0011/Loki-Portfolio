import { FaReact, FaNodeJs } from 'react-icons/fa';


import { SiExpress, SiFirebase, SiTailwindcss, SiMongodb } from 'react-icons/si';
import { Link } from 'wouter';

const techIcons = {
  'React.js': <FaReact className="text-cyan-400" />,
  'Node.js': <FaNodeJs className="text-green-500" />,
  'Express.js': <SiExpress className="text-gray-300" />,
  'Firebase': <SiFirebase className="text-yellow-400" />,
  'TailwindCSS': <SiTailwindcss className="text-blue-400" />,
  'MongoDB': <SiMongodb className="text-green-400" />,
};


const ProjectCampusConnect = () => (
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
          src="/images/campus pic.jpg"
          alt="Campus Connect Screenshot"
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      {/* Divider */}
      {/* Divider removed for plain look */}
      <div className="p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1">Campus Connect</h1>
        <h2 className="text-lg text-cosmic-silver mb-2 font-semibold">Web Platform for College Freelancing</h2>
        <p className="text-base text-gray-300 mb-2">A web platform connecting college students with freelancing opportunities.</p>
        <p className="text-gray-400 text-sm mb-6">
          Campus Connect bridges the gap between students and real-world freelancing opportunities. The platform allows students to showcase their skills, connect with clients, and manage projects efficiently. It features a secure payment system, task management, and a user-friendly dashboard for both students and clients. Real-time notifications, messaging, and role-based access ensure a seamless and secure experience for all users. The project emphasizes intuitive UX, robust backend integration, and scalable cloud deployment, making it a comprehensive solution for student freelancers and clients alike.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-6">
          {["React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "Firebase"].map((tech) => (
            <span key={tech} className="flex items-center gap-2 text-white px-3 py-1 text-sm font-medium">
              {techIcons[tech]} {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-star-white mb-3">Key Features</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Built client selection system and integrated payment functionality.</li>
            <li>Designed intuitive interface for managing tasks, profiles, and transactions.</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 justify-between items-center mt-8">
          <Link href="/projects">
            <button className="text-white px-5 py-2 focus:outline-none">
              ← Back to Projects
            </button>
          </Link>
            <a
              href="https://campus-connect-lyart.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            className="group inline-flex items-center bg-gray-800 text-white px-4 py-2 rounded-full border border-gray-600 transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-white/20 hover:scale-105 animate-fadeInUp cursor-pointer focus:outline-none focus:ring-0"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Lohitha0011/CampusConnect"
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

export default ProjectCampusConnect;
