const Home = () => {
  return (
    <div id="home" className="h-screen flex justify-center items-center bg-greenlight"> 
      <div className="flex flex-col justify-center items-center font-caesar text-5xl md:text-[7rem] uppercase leading-tight">
        <div className="text-5xl md:text-9xl font-black text-center">
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
