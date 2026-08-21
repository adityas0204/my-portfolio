import ProjectInfo from './ProjectInfo';
import useScrollTracking from '../util/scrollTracking';

const Projects = () => {
  const scrollRef = useScrollTracking('PROJECTS');
  return (
    <section
      id="projects"
      ref={scrollRef}
      className="min-h-screen flex flex-col items-center px-4 py-16 md:py-40 bg-white font-black"
    >
      <h2 className="text-7xl mb-4 text-greendark">Projects</h2>
      <div className="timeline">
        <div className="timeline-line"></div>
        <ProjectInfo
          title={'Alberta Heart Chatbot'}
          description={'Developed the Alberta Heart Chatbot, a RAG-based assistant that enables semantic search across an internal document corpus using the OpenAI API. I integrated language models with managed vector stores to facilitate context-aware information retrieval, moving beyond simple keyword matching. My work centered on optimizing retrieval precision by evaluating the performance and cost-efficiency tradeoffs.'}
          technologies={'JavaScript, Node.js, Discord.js, OpenAI API'}
          url={'https://github.com/Cococola315/alberta_heart_bot'}
          link={'GitHub'}
        />
        <ProjectInfo
          title={'Alberta Heart Website'}
          description={'Architected and built the public-facing website from scratch that is search engine optimized. Established a modular design system with custom Tailwind CSS tokens, typography, and reusable components across 6 pages, translating non-technical stakeholder requirements into a maintainable, high-performance web experience.'}
          technologies={'Next.js, React, TypeScript, Tailwind CSS'}
          url={'https://abheart.ca/'}
          link={'Website'}
        />
        <ProjectInfo
          title={'Shablam'}
          description={'Built an ML-powered web app with a team in 24 hours with backend and frontend development for HACKED Beta Hackathon, securing 3rd place. Repurposed ResNet-50 for image-to-movie matching using convolutional features.'}
          technologies={'JavaScript, HTML, CSS, Python'}
          url={'https://github.com/Captiosus510/shablam'}
          link={'GitHub'}
        />
      </div>
    </section>
  );
};

export default Projects;
