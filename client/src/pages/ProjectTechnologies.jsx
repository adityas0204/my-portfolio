const colorMap = {
  brown: 'bg-brownlight',
  green: 'bg-greenlight',
};

const ProjectTechnologies = ({ tech, variant = 'brown' }) => {
  const bgClass = colorMap[variant] || colorMap.brown;

  return (
    <div className="flex flex-wrap text-md mb-4">
      {tech.split(', ').map((t) => (
        <span key={t} className={`px-2 py-1 m-1 rounded-2xl ${bgClass}`}>
          {t}
        </span>
      ))}
    </div>
  );
};

export default ProjectTechnologies;