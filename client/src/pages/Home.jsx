import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard.jsx';
import { MdMail as Mail, MdPhone as Phone, MdDesignServices } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaPython, FaJava, FaFigma, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaLinux, FaCloud, FaBrain } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiBootstrap, SiTableau, SiCplusplus, SiFirebase, SiKubernetes } from 'react-icons/si';
const PROFILE_IMG = "/images/lohitha.jpg";

const Home = () => {

  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTypingComplete(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  const featuredProjects = [
    {
      id: 1,
      title: "Campus Connect",
      description: "A web platform connecting college students with freelancing opportunities.",
      longDescription: "Campus Connect bridges the gap between students and real-world freelancing opportunities. The platform allows students to showcase their skills, connect with clients, and manage projects efficiently. It features a secure payment system, task management, and a user-friendly dashboard for both students and clients.",
      technologies: ["React.js", "Node.js", "Express.js", "Firebase"],
      features: [
        "Built client selection system and integrated payment functionality.",
        "Designed intuitive interface for managing tasks, profiles, and transactions.",
        "Real-time notifications and messaging between students and clients.",
        "Secure authentication and role-based access."
      ],
      gradient: "from-nebula-blue to-star-white",
      emoji: "🏫",
      demo: "https://campus-connect-lyart.vercel.app/",
      github: "https://github.com/Lohitha0011/CampusConnect"
    },
    {
      id: 2,
      title: "PrepMaster",
      description: "A web platform to help students excel in placements through a structured approach.",
      longDescription: "PrepMaster offers a comprehensive suite of tools for placement preparation, including curated resources, progress tracking, and a collaborative forum. Students can set goals, monitor their progress, and participate in mock interviews and quizzes.",
      technologies: ["React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB"],
      features: [
        "Integrated progress tracking tools and curated placement resources.",
        "Built a collaborative community forum for peer discussions and mentorship.",
        "Mock interview scheduling and feedback system.",
        "Personalized dashboard and analytics."
      ],
      gradient: "",
      emoji: "📚",
      demo: undefined,
      github: "https://github.com/Lohitha0011/PREPMASTERS"
    },
    {
      id: 3,
      title: "Alumni Association Platform",
      description: "A web application for the Alumni Association to enhance alumni engagement.",
      longDescription: "This platform connects alumni with their alma mater and each other. It features event management, job portals, donation modules, and seamless event registration. Alumni can update their profiles, join interest groups, and participate in community discussions.",
      technologies: ["React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB"],
      features: [
        "Integrated job portals, donation modules, and seamless event registration.",
        "Designed user-friendly interfaces for alumni engagement.",
        "Interest groups and community forums.",
        "Profile management and alumni directory."
      ],
      gradient: "from-green-600 to-blue-600",
      emoji: "👥",
      demo: "https://alumnii.netlify.app/",
      github: "https://github.com/Lohitha0011/ALUMNI-PORTAL"
    }
  ];

  const [activeSkillCategory, setActiveSkillCategory] = useState('Languages');

  const skillCategories = [
    'Languages',
    'UI/UX Designing', 
    'Data Analytics',
    'Core Subjects',
    'Web Development',
    'Cloud Computing & DevOps'
  ];

  // Map category to icon
  const skillCategoryIcons = {
    'Languages': <FaPython className="mr-2" />, // Python as generic icon
    'UI/UX Designing': <MdDesignServices className="mr-2" />, 
    'Data Analytics': <FaDatabase className="mr-2" />, 
    'Core Subjects': <FaBrain className="mr-2" />, 
    'Web Development': <FaHtml5 className="mr-2" />, 
    // Removed AI-ML category
    'Cloud Computing & DevOps': <FaCloud className="mr-2" />
  };

  const skillsData = {
    'Languages': [
      { name: 'Python', logo: <FaPython />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'Java', logo: <FaJava />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'C', logo: <SiCplusplus />, bgColor: 'bg-gray-800', textColor: 'text-white' }
    ],
    'UI/UX Designing': [
      { name: 'Figma', logo: <FaFigma />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'Wireframing', logo: <MdDesignServices />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'Prototyping', logo: <MdDesignServices />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'Design Systems', logo: <MdDesignServices />, bgColor: 'bg-gray-800', textColor: 'text-white' }
    ],
    'Data Analytics': [
      { name: 'Data Visualization', logo: <FaDatabase />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'SQL', logo: <FaDatabase />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'Excel', logo: <FaDatabase />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'Power BI', logo: <FaDatabase />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'Tableau', logo: <SiTableau />, bgColor: 'bg-gray-800', textColor: 'text-white' }
    ],
    'Core Subjects': [
      { name: 'DSA', logo: <FaBrain />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'System Design', logo: <FaBrain />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'Cryptography', logo: <FaBrain />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'Network Security', logo: <FaBrain />, bgColor: 'bg-gray-800', textColor: 'text-white' }
    ],
    'Web Development': [
      { name: 'HTML', logo: <FaHtml5 />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'CSS', logo: <FaCss3Alt />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'JavaScript', logo: <FaJs />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'TailwindCSS', logo: <SiTailwindcss />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'Bootstrap', logo: <SiBootstrap />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'React.js', logo: <FaReact />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'Node.js', logo: <FaNodeJs />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'Express.js', logo: <SiExpress />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'MongoDB', logo: <SiMongodb />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'Firebase', logo: <SiFirebase />, bgColor: 'bg-gray-800', textColor: 'text-white' }
    ],
    // Removed AI-ML skills
    'Cloud Computing & DevOps': [
      { name: 'AWS Cloud', logo: <FaAws />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'Docker', logo: <FaDocker />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'Kubernetes', logo: <SiKubernetes />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'Git', logo: <FaGitAlt />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'GitHub', logo: <FaGithub />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'Linux', logo: <FaLinux />, bgColor: 'bg-gray-800', textColor: 'text-white' },
      { name: 'CI/CD Pipelines', logo: <FaCloud />, bgColor: 'bg-gray-800', textColor: 'text-white' }
    ]
  };

  const achievements = [
    {
      title: "Top 35 teams - SIH 2024 Internal Hackathons",
      icon: "🏆",
      color: "border-star-white"
    },
    {
      title: "Student Coordinator for Institution's Innovation Council (IIC) - CS&BS Branch",
      icon: "👨‍💼",
      color: "border-nebula-blue"
    },
    {
      title: "Solved 250+ problems on LeetCode, 200+ on GeeksforGeeks, 250+ on CodeChef",
      icon: "💻",
      color: "border-green-500"
    },
    {
      title: "Participated in SIH, GDSC Hackathon, and other hackathons",
      icon: "🚀",
      color: "border-purple-500"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Video */}
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
      {/* Hero Section */}
      <section className="content-section min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center lg:items-stretch">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
                <span className="text-white">Hi, I'm</span>
                <span className="text-star-white block typing-text">Bonthu Lohitha</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-cosmic-silver">
                Full Stack Developer
              </p>
              <p className="text-base sm:text-lg lg:text-lg text-gray-300 max-w-lg">
                I build modern, user‑centric web applications.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">

  <Link href="/projects" className="w-full sm:w-auto group inline-flex justify-center items-center bg-gray-800 text-white px-6 py-3 rounded-full border border-gray-600 transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-white/20 hover:scale-105 animate-fadeInUp cursor-pointer font-semibold text-lg">
    View My Work
  </Link>

  <a
    href="/images/Lohitha_SDE.pdf"
    download
    className="w-full sm:w-auto group inline-flex justify-center items-center bg-gray-800 text-white px-6 py-3 rounded-full border border-gray-600 transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-white/20 hover:scale-105 animate-fadeInUp cursor-pointer font-semibold text-lg"
  >
    Resume
  </a>
</div>

            <div className="flex gap-4 mt-4">
              <a href="mailto:lohitha0801@gmail.com"><Mail className="h-7 w-7 text-white hover:text-gray-300" /></a>
              <a href="tel:6303197497"><Phone className="h-7 w-7 text-white hover:text-gray-300" /></a>
              <a href="https://github.com/Lohitha0011"><FaGithub className="h-7 w-7 text-white hover:text-gray-300" /></a>
              <a href="https://linkedin.com/in/lohithabonthu"><FaLinkedin className="h-7 w-7 text-white hover:text-gray-300" /></a>
            </div>
          </div>
          {/* Right: Profile Image */}
          <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-center mt-8 lg:mt-0">
            <div className="relative w-72 h-[28rem] sm:w-96 sm:h-[32rem] md:w-[28rem] md:h-[36rem] overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
              <img
                src={PROFILE_IMG}
                alt="Bonthu Lohitha"
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                loading="lazy"
                style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
              />
              <div className="absolute -top-6 -right-6 w-12 h-12 sm:w-16 sm:h-16"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 sm:w-12 sm:h-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="content-section py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-cosmic-silver">Check out some of my recent work</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0,1,2].map((i) => {
              const project = [
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
                  demo: "https://campus-connect-lyart.vercel.app/",
                  github: "https://github.com/Lohitha0011/CampusConnect",
                  link: "/projects/campus-connect"
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
                  demo: "https://prepmaster.netlify.app/",
                  github: "https://github.com/Lohitha0011/PREPMASTERS",
                  link: "/projects/prepmaster"
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
                  demo: "https://alumnii.netlify.app/",
                  github: "https://github.com/Lohitha0011/ALUMNI-PORTAL",
                  link: "/projects/alumni-association"
                }
              ][i];
              return <ProjectCard key={project.id} project={project} link={project.link} />;
            })}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projects">
              <button className="group inline-flex items-center bg-gray-800 text-white px-4 py-2 rounded-full border border-gray-600 transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-white/20 hover:scale-105 animate-fadeInUp cursor-pointer focus:outline-none focus:ring-0">
                View All Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="content-section py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Technical Skills</h2>
            <p className="text-xl text-cosmic-silver">My expertise across various technologies and tools</p>
          </div>

          {/* Skill Categories Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 bg-gray-900 bg-opacity-50 backdrop-blur-sm p-2 rounded-2xl border border-cosmic-silver border-opacity-30">
            {skillCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveSkillCategory(category)}
                className={`group inline-flex items-center bg-gray-800 text-white px-4 py-2 rounded-full border border-gray-600 transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-white/20 hover:scale-105 animate-fadeInUp cursor-pointer focus:outline-none ${
                  activeSkillCategory === category
                    ? 'bg-gray-700 text-white border-white shadow-lg'
                    : ''
                }`}
              >
                <span className="flex items-center">{skillCategoryIcons[category]}{category}</span>
              </button>
            ))}
          </div>

          {/* Skills Grid - Badge Style */}
          <div className="flex flex-wrap justify-center gap-3">
              {skillsData[activeSkillCategory]?.map((skill, index) => (
                <div 
                  key={`${activeSkillCategory}-${index}`}
                  className={`group inline-flex items-center bg-gray-800 text-white px-4 py-2 rounded-full border border-gray-600 transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-white/20 hover:scale-105 animate-fadeInUp cursor-pointer focus:outline-none focus:ring-0`}
                  style={{ 
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  {/* Logo/Icon */}
                  <span className="text-sm font-medium mr-2 transition-all duration-300 group-hover:scale-110">
                    {skill.logo}
                  </span>
                  
                  {/* Skill Name */}
                  <span className="text-sm font-medium transition-all duration-300 group-hover:text-white">
                    {skill.name}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="content-section py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Achievements</h2>
            <p className="text-xl text-cosmic-silver">Recognition and milestones from my technical journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index} 
                className={`bg-gray-900 bg-opacity-50 backdrop-blur-sm p-8 rounded-xl border ${achievement.color} border-opacity-50`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center mr-4 text-xl`}>
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
