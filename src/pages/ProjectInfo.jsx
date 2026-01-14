import ProjectTechnologies from './ProjectTechnologies'

const ProjectInfo = ({ title, description, technologies, url, link }) => {
  return (
    <div className='max-w-[750px] p-8 my-3 rounded-3xl bg-browndark text-cream'>
      <h3 className='text-xl mb-4'>{title}</h3>
      <p className='text-lg mb-4'>{description}</p>
      <ProjectTechnologies tech={technologies}/>
      {url && (
        <a href={url} target="_blank" className="inline-flex items-center gap-2 no-underline text-greendark text-lg hover:italic hover:text-brownlight">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="1em" height="1em" fill="currentColor"><title>Arrow Up Right</title><g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none"><polyline points="18.7 12.4 18.7 5.3 11.6 5.3"/><line x1="5.3" y1="18.7" x2="17.1" y2="6.9"/></g></svg>
          {link}
        </a>
      )}
    </div>
  )
}

export default ProjectInfo