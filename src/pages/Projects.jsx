import ProjectInfo from "./ProjectInfo"

const Projects = () => {
  return (
    <section id="projects"> 
      <h2>Projects</h2>
      <div className="timeline">
        <div className="timeline-line"></div>        
        <ProjectInfo
          title={"Fullstack Open"} 
          description={"Built full-stack projects including a phonebook app, a blog platform with authentication, and a notes application. Focused on modern web development practices through both front-end and back-end implementation, testing, and deployment."}
          technologies={"React, Redux, Node.js, Express, MongoDB, REST APIs, Playwright (E2E testing), Jest, Git, Deployment (Render)"}
          url={"https://github.com/adityas0204/fullstack-open"}
          link={"GitHub"}
        />
        <ProjectInfo
          title={"AIESEC.ca Revamp"}
          description={"Moving AIESEC's site to a modern tech stack. Creating tools for non-technical people such as a Content Manager and a Responsive File Manager"}
          technologies={"Go, React"}
          url={""}
          link={""}
        />
        <ProjectInfo
          title={"Shablam"}
          description={"Built an ML-powered web app with a team in 24 hours with backend and frontend development for HACKED Beta Hackathon, securing 3rd place. Repurposed ResNet-50 for image-to-movie matching using convolutional features."}
          technologies={"JS, HTML, CSS, Python"}
          url={"https://github.com/Captiosus510/shablam"}
          link={"GitHub"}
        />
      </div>
    </section>
  )
}

export default Projects
