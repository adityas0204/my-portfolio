import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight - 60) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${showHeader ? 'header-visible' : 'header-hidden'} flex items-center justify-between px-4 md:px-12 py-4 fixed left-0 top-0 right-0 h-15 z-2 bg-greenlight transition-opacity duration-300`}
    >
      <div className="flex-1 font-caesar font-black text-xl md:text-base">
				ADITYA SONI
      </div>

      <nav className="flex-1 hidden md:flex gap-6 justify-center">
        <a
          href="#home"
          className="text-sm font-bold text-browndark no-underline hover:italic hover:text-brownlight"
        >
					Home
        </a>
        <a
          href="#about"
          className="text-sm font-bold text-browndark no-underline hover:italic hover:text-brownlight"
        >
					About
        </a>
        <a
          href="#projects"
          className="text-sm font-bold text-browndark no-underline hover:italic hover:text-brownlight"
        >
					Projects
        </a>
      </nav>

      <div className="flex-1 hidden md:flex gap-4 justify-end">
        <a
          className="w-8.5 fill-browndark hover:fill-brownlight"
          href="https://www.linkedin.com/in/aditya-soni-91b9238a/"
          target="_blank"
        >
          <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <path d="M96,80a8,8,0,1,1-8-8A7.99993,7.99993,0,0,1,96,80Zm-8,28.001a4,4,0,0,0-4,4v64a4,4,0,1,0,8,0v-64A4,4,0,0,0,88,108.001Zm60,0a31.92463,31.92463,0,0,0-24,10.86767V112.001a4,4,0,0,0-8,0v64a4,4,0,1,0,8,0v-36a24,24,0,0,1,48,0v36a4,4,0,1,0,8,0v-36A32.03619,32.03619,0,0,0,148,108.001ZM224,44V212a12.01375,12.01375,0,0,1-12,12H44a12.01375,12.01375,0,0,1-12-12V44A12.01359,12.01359,0,0,1,44,32H212A12.01359,12.01359,0,0,1,224,44Zm-8,0a4.00458,4.00458,0,0,0-4-4H44a4.00458,4.00458,0,0,0-4,4V212a4.00458,4.00458,0,0,0,4,4H212a4.00458,4.00458,0,0,0,4-4Z" />
          </svg>
        </a>
        <a
          className="w-8.5 fill-browndark hover:fill-brownlight"
          href="https://github.com/adityas0204"
          target="_blank"
        >
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            {' '}
            <path d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5" />
          </svg>
        </a>
      </div>

      <MobileMenu />
    </header>
  );
};

export default Header;
