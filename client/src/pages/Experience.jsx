import ExperienceInfo from "./ExperienceInfo";
import useScrollTracking from '../util/scrollTracking';

const Experience = () => {
  const scrollRef = useScrollTracking('EXPERIENCE');

  return (
    <section
      id="experience"
      ref={scrollRef}
      className="min-h-screen flex flex-col items-center px-4 py-16 md:py-40 bg-greendark font-black"
    >
      <h2 className="text-7xl mb-4 text-cream">Experience</h2>
      <div className="timeline">
        <div className="timeline-line">
        <ExperienceInfo 
          title={'AVAROS - Software Engineer Intern'}
          description={'Re-architected a legacy document processing pipeline into a serverless workflow using AWS Lambda and Textract, resolving scaling bottlenecks and compute contention during traffic bursts. Built a full-stack AI inbox proof-of-concept to auto-summarize clinical documents for physicians, and led frontend modernization for clinic scheduling preference tools.'}
          technologies={'React, TypeScript, Ruby on Rails, AWS Lambda, AWS Textract, S3, MUI'}
        />
        </div>
      </div>
    </section>
  )
};

export default Experience;