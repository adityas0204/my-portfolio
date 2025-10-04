const ProjectInfo = ({ title, description, technologies, url, link }) => {
  return (
    <div className="project-info">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Technologies: {technologies}</p>
      {url && (
        <a href={url} target="_blank" className="project-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="1em" height="1em" fill="currentColor"><title>Arrow Up Right</title><g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none"><polyline points="18.7 12.4 18.7 5.3 11.6 5.3"/><line x1="5.3" y1="18.7" x2="17.1" y2="6.9"/></g></svg>
          {link}
        </a>
      )}
    </div>
  )
}

export default ProjectInfo