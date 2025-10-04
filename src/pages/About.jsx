import picture from '../assets/maheep_smiling.png'

const About = () => {
  return (
    <div id="about-container">
      <div id='img-content'>
        <img src={picture} width={400}/> 
        <div id='content'>
          <h2>About Me</h2>
          <p>Hi, my name is Aditya Soni!</p>
          <p>I'm studying <b>Computer Science</b> at the University of Alberta, and I'm interested in <b>Software Development</b>.</p> 
          <p>When I'm not coding I enjoy playing <i>sports</i> with my friends, spending time with my <i>family</i> and playing <i>games</i> (currently playing GoW).</p>
          <p>Thanks for checking out my site!</p>
        </div>
      </div>
    </div>
  )
}

export default About