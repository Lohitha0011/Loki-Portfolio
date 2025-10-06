const SkillCard = ({ skill, isActive = false }) => {
  return (
    <div className={`skill-card bg-gray-900 bg-opacity-50 backdrop-blur-sm p-6 rounded-xl border border-cosmic-silver border-opacity-30 text-center transition-all duration-300 ${
      isActive ? 'border-star-white border-opacity-80 shadow-lg' : ''
    }`}>
      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${skill.gradient} rounded-lg flex items-center justify-center`}>
        {skill.icon ? (
          <span className="text-2xl">{skill.icon}</span>
        ) : (
          <span className="text-xl font-bold text-white">{skill.name.charAt(0)}</span>
        )}
      </div>
      <h3 className="text-white font-semibold">{skill.name}</h3>
    </div>
  );
};

export default SkillCard;
