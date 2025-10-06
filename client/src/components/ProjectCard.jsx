import { Link } from "wouter";

const ProjectCard = ({ project, link }) => {
  const cardContent = (
    <div className="project-card bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden border border-cosmic-silver border-opacity-30 transition-all duration-300">
      <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
        <span className="text-6xl">{project.emoji}</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-cosmic-silver mb-2">{project.description}</p>
        {project.longDescription && (
          <p className="text-gray-400 text-sm mb-4">{project.longDescription}</p>
        )}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => {
            const colors = [
              'bg-blue-600',
              'bg-green-600', 
              'bg-yellow-600',
              'bg-orange-600',
              'bg-purple-600',
              'bg-pink-600',
              'bg-cyan-600',
              'bg-red-600'
            ];
            return (
              <span key={index} className={`px-3 py-1 text-xs ${colors[index % colors.length]} text-white rounded-full`}>
                {tech}
              </span>
            );
          })}
        </div>
        <ul className="text-sm text-gray-300 mb-4 space-y-1">
          {project.features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
        <div className="flex gap-3 mt-4">
          {link && (
            <Link href={link}>
              <span className="group inline-flex items-center bg-gray-800 text-white px-4 py-2 rounded-full border border-gray-600 transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-white/20 hover:scale-105 animate-fadeInUp cursor-pointer focus:outline-none focus:ring-0 font-semibold text-sm">Details</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
  return cardContent;
};

export default ProjectCard;
