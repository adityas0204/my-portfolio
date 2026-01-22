import pingService from '../services/ping';
import { useRef } from 'react';
import useScrollTracking from '../util/scrollTracking';


const Home = () => {
  const scrollRef = useScrollTracking('HOME');
  const hoverRef = useRef(false);
  const hoverBufferRef = useRef(0);

  const handleMouseEnter = () => {
    hoverBufferRef.current += 1; 
    if (!hoverRef.current) {
      hoverRef.current = true;
      
      setTimeout(async () => {
        await pingService.updateLog({ 
          type: 'HOVER',
          amount: hoverBufferRef.current 
        });

        hoverRef.current = false;
        hoverBufferRef.current = 0;
      }, 3000);
    }
  };

  return (
    <div id="home" ref={scrollRef} className="h-screen flex justify-center items-center bg-greenlight"> 
      <div className="flex flex-col justify-center items-center font-caesar text-5xl md:text-[7rem] uppercase leading-tight">
        <div className="text-5xl md:text-9xl font-black text-center">
          Aditya Soni
        </div>

        <a className="home-menu-link-w" href="#about" onMouseEnter={handleMouseEnter}>
          <div className="text-menu-link">
            {('about').split('').map((char, index) => (
              <span key={index} className="char" style={{ transitionDelay: `${index * 0.05}s` }}>
                {char}
              </span>
            ))}
          </div>
        </a>

        <a className="home-menu-link-w" href="#projects" onMouseEnter={handleMouseEnter}>
          <div className="text-menu-link">
            {('projects').split('').map((char, index) => (
              <span key={index} className="char" style={{ transitionDelay: `${index * 0.05}s` }}>
                {char}
              </span>
            ))}
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
