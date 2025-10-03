import ProjectInfo from "./ProjectInfo"

const Projects = () => {
  return (
    <div id="projects"> 
      <div className="projects-preamble">
        <h1>Projects</h1>
        <p>These are some projects I have worked on or am working on!</p>
      </div>
      <div id="fullstack-bar">
        <ProjectInfo className="fullstack"
          title={"Fullstack Open"} 
          description={"Built full-stack projects including a phonebook app, a blog platform with authentication, and a notes application. Focused on modern web development practices through both front-end and back-end implementation, testing, and deployment."}
          technologies={"React, Redux, Node.js, Express, MongoDB, REST APIs, Playwright (E2E testing), Jest, Git, Deployment (Render)"}
          url={"https://github.com/adityas0204/fullstack-open"}
          link={"GitHub"}
        />
      </div>
      <ProjectInfo
        title={"AIESEC.ca Revamp"}
        description={"Moving AIESEC's site to a modern tech stack with tools such as a content manager and a file manager"}
        technologies={"Go"}
        url={""}
        link={""}
      />
      <ProjectInfo
        title={""}
        description={""}
        technologies={""}
        url={""}
        link={""}
      />
    </div>
  )
}

export default Projects