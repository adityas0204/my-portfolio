const ProjectTechnologies = ({tech}) => {
    return (
        <div className="flex flex-wrap text-md mb-4">
            {tech.split(", ").map(
                (t) => {
                    console.log(t) 
                    return (
                        <span className="px-2 py-1 m-1 rounded-2xl bg-brownlight">{t}</span>
                )})}
        </div>
    )
}

export default ProjectTechnologies