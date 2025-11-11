const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-name">
        <span>ADITYA </span> <span className="last">SONI</span>
      </div>

      <div className="footer-navs">
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
      <div className="copyright">
        © {currentYear} Aditya Soni. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer