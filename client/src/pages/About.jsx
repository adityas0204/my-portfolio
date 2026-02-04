import picture from '../assets/aditya_soni.png';
import useScrollTracking from '../util/scrollTracking';

const About = () => {
  const scrollRef = useScrollTracking('ABOUT');
  const textClass = 'md:text-2xl text-lg font-medium mb-2';

  return (
    <div
      id="about"
      ref={scrollRef}
      className="md:h-screen flex flex-col justify-center items-center bg-bone py-12 md:py-0"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-[2%] p-2">
        <img src={picture} className="w-80 md:w-100 rounded-2xl" />
        <div className="flex flex-col w-80 md:w-100 text-left">
          <h2 className="md:text-2xl text-xl font-semibold mb-2 italic">
						About Me
          </h2>
          <p className={textClass}>Hi, my name is Aditya Soni!</p>
          <p className={textClass}>
						I'm studying{' '}
            <b className="text-brownlight">Computer Science</b> at the
						University of Alberta, and I'm interested in{' '}
            <b className="text-brownlight">Software Development</b>.
          </p>
          <p className={textClass}>
						When I'm not coding I enjoy playing{' '}
            <i className="text-greendark font-bold">sports</i> with my
						friends, spending time with my{' '}
            <i className="text-greendark font-bold">family</i> and playing{' '}
            <i className="text-greendark font-bold">games</i> (currently
						playing GoW).
          </p>
          <p className={textClass}>Thanks for checking out my site!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
