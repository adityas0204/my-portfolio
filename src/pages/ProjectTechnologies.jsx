const ProjectTechnologies = ({tech}) => {
    return (
        <div className="flex text-lg mb-4">
            {tech.split(", ").map(
                (t) => {
                    <span>{t}</span>
                })}
        </div>
    )
}

export default ProjectTechnologies