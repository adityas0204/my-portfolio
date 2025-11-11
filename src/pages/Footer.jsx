const Footer = () => {
  const linkClass = "text-lightbrown hover:text-greendark hover:italic transition-colors";

  return (
    <footer className="p-9 px-[4%] font-black bg-cream text-brownlight">
      <div className="font-caesar font-black text-7xl mb-9">
        <span className="text-browndark">ADITYA </span>
        <span className="italic">SONI</span>
      </div>

      <div className="flex text-lg gap-5">
        <div className="flex flex-col gap-2">
          <p className="m-0 italic text-browndark">Navigate</p>
          <a href="#home-container" className={linkClass}>1. Home</a>
          <a href="#about-container" className={linkClass}>2. About</a>
          <a href="#projects-container" className={linkClass}>3. Projects</a>
        </div>

        <div className="flex flex-col gap-2">
          <p className="m-0 italic text-browndark">Social</p>
          <a href="https://www.linkedin.com/in/aditya-soni-91b9238a/" target="_blank" className={linkClass}>1. LinkedIn</a>
          <a href="https://github.com/adityas0204" target="_blank" className={linkClass}>2. GitHub</a>
        </div>
      </div>

      <div className="mt-9 text-sm">blah blah copy rght</div>
    </footer>
  )
}

export default Footer 