import { FaLinkedin,FaGithub } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';


export default function Home() {
  return (
    <div className='wrapper'>
      <section id='home' className='home'>
        <div className='intro'>
          <h1>Hey, I'm Alex!</h1>
          <div className='typewrite'>
              <Typewriter
                options={{
                  strings: ['Javascript', 'Java', 'Python', 'CSS', 'HTML', 'SQL'],
                  autoStart: true,
                  loop: true,
                }}
              />
          </div>
          <span className='links'>
            <a href="#contact" className="btn">Contact Me</a>
            <ContactPoint link="https://www.linkedin.com/in/alex-trepasso/" type="linkedin"><FaLinkedin/></ContactPoint>
            <ContactPoint link="https://github.com/GrandomGamer" type="github"><FaGithub/></ContactPoint>
          </span>
        </div>
        <div className='profile'>
            <img src="https://placeimg.com/192/192/people" />
        </div>
      </section>
      <section id='skills' className='skills'>

      </section>
    </div>
  )

  
}

function ContactPoint({ children, link, type }){

  return (
      <a target={link.charAt(0) != '#' ? '_blank' : ''} href={link} className={`link ${type}`}>
        {children}
      </a>
  );
}
