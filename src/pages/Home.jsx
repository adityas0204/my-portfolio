const Home = () => {
  return (
    <div id="home"> 
      <div className="home-menu-links-list">
        <div className="home-menu-links-title">
          Aditya Soni
        </div>
        <a className="home-menu-link-w" href="#about">
          <div className="text-menu-link">
            {("about").split("").map((char, index) => (
                <span key={index} className="char" style={{ transitionDelay: `${index * 0.05}s` }}>
                  {char}
                </span>
            ))}
          </div>
        </a>
        <a className="home-menu-link-w" href="#projects">
          <div className="text-menu-link">
            {("projects").split("").map((char, index) => (
                <span key={index} className="char" style={{ transitionDelay: `${index * 0.05}s` }}>
                  {char}
                </span>
            ))}
          </div>
        </a>
      </div>
    </div>
  )
}

export default Home