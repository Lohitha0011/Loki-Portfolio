import ProjectCard from '../components/ProjectCard.jsx';


const allProjects = [
    {
      id: 1,
      title: "Campus Connect",
      description: "A web platform connecting college students with freelancing opportunities.",
      technologies: ["React.js", "Node.js", "Express.js", "Firebase"],
      features: [
        "Built client selection system and integrated payment functionality.",
        "Designed intuitive interface for managing tasks, profiles, and transactions."
      ],
      gradient: "from-blue-600 to-cyan-600",
      emoji: "🏫",
      filters: ["React.js", "Node.js", "Express.js", "Firebase"]
    },
    {
      id: 2,
      title: "PrepMaster",
      description: "A web platform to help students excel in placements through a structured approach.",
      technologies: ["React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB"],
      features: [
        "Integrated progress tracking tools and curated placement resources.",
        "Built a collaborative community forum for peer discussions and mentorship."
      ],
      gradient: "from-purple-600 to-pink-600",
      emoji: "📚",
      filters: ["React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB"]
    },
    {
      id: 3,
      title: "Alumni Association Platform",
      description: "A web application for the Alumni Association to enhance alumni engagement.",
      technologies: ["React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB"],
      features: [
        "Integrated job portals, donation modules, and seamless event registration.",
        "Designed user-friendly interfaces for alumni engagement."
      ],
      gradient: "from-green-600 to-blue-600",
      emoji: "👥",
      filters: ["React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB"]
    },
    // Removed AI/ML project
    {
      id: 5,
      title: "DNX Dashboard",
      description: "Task management & community platform with React + Vite and Express backend.",
      technologies: ["React", "Vite", "TailwindCSS", "Express.js", "MongoDB", "Socket.io"],
      features: [
        "Responsive dashboard with charts and messaging.",
        "Real-time updates via Socket.io and REST APIs."
      ],
      gradient: "from-cyan-600 to-blue-600",
      emoji: "📊",
      filters: ["React", "Vite", "TailwindCSS", "Express.js", "MongoDB", "Socket.io"],
      demo: "https://task-mngmt-2m14.vercel.app",
      github: "https://github.com/Lohitha0011/Task-Mngmt"
    }
  ];



const Projects = () => {
  return (
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
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <section className="content-section py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">My Projects</h1>
              <p className="text-lg sm:text-xl text-cosmic-silver">A showcase of my work across various technologies</p>
            </div>
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project) => {
                let link = undefined;
                if (project.title === "Campus Connect") link = "/projects/campus-connect";
                else if (project.title === "PrepMaster") link = "/projects/prepmaster";
                else if (project.title === "Alumni Association Platform") link = "/projects/alumni-association";
                // Face Emotion project removed
                else if (project.title === "DNX Dashboard") link = "/projects/chatbot-genai";
                // Only main projects get links; others stay static
                return <ProjectCard key={project.id} project={project} link={link} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
