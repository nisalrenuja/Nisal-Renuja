import React from 'react'
import "./about.css"
import {FaAward} from 'react-icons/fa'
import {FaCertificate} from 'react-icons/fa'
import {FaShoppingBag} from 'react-icons/fa'
import {FiSettings} from 'react-icons/fi'

const About = () => {
  return (
    <section id='about' className='get__to'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me"></div>
        <div className="about__content">
          <div className="about__cards">

            <div className="about__card">
              <FaShoppingBag className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years</small>
            </div>

            <div className="about__card">
              <FiSettings className='about__icon'/>
              <h5>Projects</h5>
              <small>10+</small>
            </div>

            <div className="about__card">
              <FaCertificate className='about__icon'/>
              <h5>Certifications</h5>
              <small>3</small>
            </div>

            <div className="about__card">
              <FaAward className='about__icon'/>
              <h5>Awards</h5>
              <small>7</small>
            </div>
          
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem unde suscipit aspernatur animi, 
              voluptas ex asperiores dignissimos saepe esse laudantium! Modi repellat cum consectetur at sapiente itaque 
              odit vitae fugit.</p>
          {/* <a href='#contact' className='btn btn-primary'>Contact Me</a> */}
        </div>
     
      </div>

    </section>
  )
}

export default About