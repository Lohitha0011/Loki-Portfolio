
import { useState } from 'react';
import SkillCard from '../components/SkillCard.jsx';

const About = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState('Languages');

  const skillCategories = [
    'Languages',
    'UI/UX Designing',
    'Data Analytics',
    'Core Subjects',
    'Web Development',
    'Cloud Computing & DevOps'
  ];

  const skillsData = {
    'Languages': [
      { name: 'Python', icon: '🐍', gradient: 'from-blue-400 to-yellow-400' },
      { name: 'Java', icon: '☕', gradient: 'from-red-500 to-orange-500' },
      { name: 'C', icon: '⚡', gradient: 'from-blue-600 to-blue-800' }
    ],
    'UI/UX Designing': [
      { name: 'Figma', icon: '🎨', gradient: 'from-purple-500 to-pink-500' },
      { name: 'Wireframing', icon: '📐', gradient: 'from-gray-500 to-gray-700' },
      { name: 'Prototyping', icon: '🖼️', gradient: 'from-green-500 to-teal-500' },
      { name: 'Design Systems', icon: '🎭', gradient: 'from-indigo-500 to-purple-500' }
    ],
    'Data Analytics': [
      { name: 'Data Visualization', icon: '📊', gradient: 'from-blue-500 to-cyan-500' },
      { name: 'SQL', icon: '🗄️', gradient: 'from-orange-500 to-red-500' },
      { name: 'Excel', icon: '📈', gradient: 'from-green-600 to-green-800' },
      { name: 'Power BI', icon: '⚡', gradient: 'from-yellow-500 to-orange-500' },
      { name: 'Tableau', icon: '📉', gradient: 'from-blue-600 to-purple-600' }
    ],
    'Core Subjects': [
      { name: 'DSA', icon: '🧮', gradient: 'from-red-500 to-pink-500' },
      { name: 'System Design', icon: '🏗️', gradient: 'from-gray-600 to-gray-800' },
      { name: 'Cryptography', icon: '🔐', gradient: 'from-purple-600 to-indigo-600' },
      { name: 'Network Security', icon: '🛡️', gradient: 'from-green-600 to-blue-600' }
    ],
    'Web Development': [
      { name: 'HTML', icon: '🌐', gradient: 'from-orange-500 to-red-500' },
      { name: 'CSS', icon: '🎨', gradient: 'from-blue-500 to-purple-500' },
      { name: 'JavaScript', icon: '⚡', gradient: 'from-yellow-400 to-orange-400' },
      { name: 'TailwindCSS', icon: '💨', gradient: 'from-cyan-400 to-blue-500' },
      { name: 'Bootstrap', icon: '🅱️', gradient: 'from-purple-600 to-indigo-600' },
      { name: 'React.js', icon: '⚛️', gradient: 'from-cyan-400 to-blue-500' },
      { name: 'Node.js', icon: '🟢', gradient: 'from-green-500 to-green-700' },
      { name: 'Express.js', icon: '🚂', gradient: 'from-gray-600 to-gray-800' },
      { name: 'MongoDB', icon: '🍃', gradient: 'from-green-600 to-teal-600' },
      { name: 'Firebase', icon: '🔥', gradient: 'from-orange-500 to-red-500' }
    ],
    'Cloud Computing & DevOps': [
      { name: 'AWS Cloud', icon: '☁️', gradient: 'from-orange-400 to-yellow-400' },
      { name: 'Docker', icon: '🐳', gradient: 'from-blue-500 to-cyan-500' },
      { name: 'Kubernetes', icon: '⚙️', gradient: 'from-blue-600 to-indigo-600' },
      { name: 'Git', icon: '🌿', gradient: 'from-orange-500 to-red-500' },
      { name: 'GitHub', icon: '🐱', gradient: 'from-gray-700 to-black' },
      { name: 'Linux', icon: '🐧', gradient: 'from-blue-600 to-purple-600' },
      { name: 'CI/CD Pipelines', icon: '🔄', gradient: 'from-green-500 to-blue-500' }
    ]
  };

  const stats = [
    { number: '250+', label: 'LeetCode Problems', color: 'text-star-white' },
    { number: '5+', label: 'Major Projects', color: 'text-nebula-blue' },
    { number: '10+', label: 'Technologies', color: 'text-green-400' },
    { number: '3+', label: 'Hackathons', color: 'text-purple-400' }
  ];

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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">About Me</h1>
              <p className="text-lg sm:text-xl text-cosmic-silver">Get to know more about my background and skills</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
              <div className="space-y-6">
                <div>
      
                  <h2 className="text-xl sm:text-2xl font-bold text-star-white mb-4">Who I Am</h2>
                  <p className="text-gray-300 leading-relaxed">
                    I'm Bonthu Lohitha, a passionate Full Stack Developer and Computer Science student at Vishnu Institute of Technology, Bhimavaram. I enjoy building innovative web applications to solve real-world problems.
                  </p>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    My expertise spans Python, Java, C, React.js, Node.js, Express.js, MongoDB, and cloud platforms like AWS. I have a strong foundation in data structures, algorithms, and data analytics.
                  </p>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    I'm particularly interested in the intersection of web development and have developed several projects and participated in hackathons to further my skills.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Education */}
                <div className="p-6 rounded-xl">
                  <h3 className="text-xl sm:text-xl font-bold text-star-white mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white">Bachelor of Technology (CS&BS)</h4>
                      <p className="text-cosmic-silver">Vishnu Institute of Technology, Bhimavaram</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-400">2022 – 2026</span>
                        <span className="text-star-white font-semibold">82%</span>
                      </div>
                      <p className="text-gray-400 text-sm">Bhimavaram</p>
                    </div>
                  </div>
                </div>

                
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="p-4 rounded-xl text-center">
                      <div className={`text-2xl font-bold ${stat.color}`}>{stat.number}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

           
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
