const ProjectInfo = ({ className, title, description, technologies, url, link }) => {
  return (
    <div className={`project-info ${className}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Technologies: {technologies}</p>
      <a href={url} target="_blank"><i>{link}</i></a>
    </div>
  )
}

export default ProjectInfo