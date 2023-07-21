//Importing array of project objects
import projects from './projects/data';


//Importing mapped array
import ProjectMap from './projects/ProjectMap'



function App() {
    return(
<div className="App">
  <header className="header-container">
    <div className="content-wrapper site-wrapper">
      <nav>
        <ul>
          <li id="projects"><a href="#projects-heading">Projects</a></li>
          <li id="skills"><a href="#skill-heading">Skills</a></li>
          <li id="about"><a href="#headshot">About</a></li>
          <li id="contact"><a href="#contact-heading">Contact Me</a></li>
        </ul>
      </nav>
      <h1>Hi there, I'm Maggi Bratton!</h1>
      <h2>
        I'm a Front End Web Developer who creates meaningful and engaging
        websites based in Northern Colorado.
      </h2>
    </div>
  </header>

  <section className="projects-container">    
        <div className="content-wrapper site-wrapper">
          <h3 id="projects-heading">Projects</h3>
          <ProjectMap projects={projects} />
        </div>
  </section>

  <section className="skills-section">
        <div className="content-wrapper site-wrapper">
          <h3 id="skill-heading">Skills</h3>
          <div className="dev-skills">
            <h4>Developer Skills</h4>
            <div className="flex-skills">
              <p>HTML and CSS</p>
              <p>JavaScript</p>
              <p>React</p>
              <p>Git and GitHub</p>
            </div>
          </div>
          <div className="tools">
            <h4 className="tech-heading">Tech Stack</h4>
            <div className="flex-skills">
              <p>Visual Studio Code</p>
              <p>GitHub Pages</p>
              <p>Chrome DevTools</p>
              <p>Code Sandbox</p>
            </div>
          </div>
        </div>
  </section>


  <section className="about-container"> 
        <div className="content-wrapper site-wrapper">
          <div className="about-img" id="headshot">
            <img src="img/portfolio-picture.png" alt="Maggi sitting on a yellow couch working on her laptop" />
          </div>
          <div className="about-text">
            <h3 id="about-heading">Hey! I'm Maggi.</h3>
            <h4>
            I'm a Front End Web Developer who loves to create impactful and
            responsive websites.
            </h4>
            <p className="bio">
            I originally went to school to become an elementary teacher. When I graduated,
            I realized that my real passion is in tech. I want to make a
            difference in the world and web development is a place I can do that
            through creating beautiful and meaningful websites. I live in Northern Colorado
            with my husband and three dogs. When I'm not coding, you can find me
            hanging with my dogs, reading a book, or spending time with my
            friends and family.
            </p>
            <p className="sentiment">I'm looking forward to working with you!</p>
          </div>
        </div> 
  </section>


  <footer className="contact-container">
        <div className="content-wrapper site-wrapper">
          <div className="contact-content">
            <h3 id="contact-heading">Get in Touch</h3>
            <div className="flex-contact">
              <div className="hire-container">
                <h4>Let's work together</h4>
                <p>970-568-2169</p>
                <p>
                  <a href="mailto:maggi.bratton@gmail.com"
                    >maggi.bratton@gmail.com</a
                  >
                </p>
              </div>
              <div className="social-container">
                <h4>Social</h4>
                <a href="https://github.com/maggi-b"
                  ><i className="fa-brands fa-github"></i
                ></a>
                <a href="https://www.linkedin.com/in/maggi-bratton/"
                  ><i className="fa-brands fa-linkedin-in"></i
                ></a>
              </div>
              <div className="location-container">
                <h4>Meet me</h4>
                <p>Northern Colorado</p>
                <p>Let's meet for coffee!</p>
              </div>
            </div>
            <div className="copyright">
              <p>Copyright 2023 | Maggi Bratton</p>
            </div>
          </div>
        </div>
  </footer>
</div>
);
}

export default App;
