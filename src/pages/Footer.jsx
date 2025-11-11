const Footer = () => {
  return (
    <footer className="p-9 px-[4%] font-black bg-cream text-brownlight">
      <div className="font-caesar font-black text-7xl mb-9">
        <span className="text-browndark">ADITYA </span> <span className="italic">SONI</span>
      </div>

      <div className="flex text-lg gap-5">
        <div className="nav-container">
          <p>Navigate</p>
          <a href="#home-container">1. Home</a>
          <a href="#about-container">2. About</a>
          <a href="#projects-container">3. Projects</a>
        </div>
        <div className="nav-container">
          <p>Social</p>
          <a href="https://www.linkedin.com/in/aditya-soni-91b9238a/" target="_blank">1. LinkedIn</a>
          <a href="https://github.com/adityas0204" target="_blank">2. GitHub</a>
        </div>
      </div>
      <div className="copyright">blah blah copy rght</div>
    </footer>
  )
}

export default Footer