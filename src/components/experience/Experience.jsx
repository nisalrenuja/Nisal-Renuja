import React from 'react'
import "./experience.css"
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experinece'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experince__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experince__content">
            <article className='experince__details'>
              <BsFillPatchCheckFill className='experince__details-icon'/>
              <div>
                <h4>HRML</h4>
                <small className='text-light'>Experienced</small>
              </div>            
            </article>
          </div>
          <div className="experince__content">
            <article className='experince__details'>
              <BsFillPatchCheckFill className='experince__details-icon'/>
              <div>
                <h4>HRML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
          <div className="experince__content">
            <article className='experince__details'>
              <BsFillPatchCheckFill className='experince__details-icon'/>
              <div>
                <h4>HRML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
          <div className="experince__content">
            <article className='experince__details'>
              <BsFillPatchCheckFill className='experince__details-icon'/>
              <div>
                <h4>HRML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
          <div className="experince__content">
            <article className='experince__details'>
              <BsFillPatchCheckFill className='experince__details-icon'/>
              <div>
                <h4>HRML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experince__content">
            <article className='experince__details'>
              <BsFillPatchCheckFill className='experince__details-icon'/>
              <div>
                <h4>HRML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
          <div className="experince__content">
            <article className='experince__details'>
              <BsFillPatchCheckFill className='experince__details-icon'/>
              <div>
                <h4>HRML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
          <div className="experince__content">
            <article className='experince__details'>
              <BsFillPatchCheckFill className='experince__details-icon'/>
              <div>
                <h4>HRML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
          <div className="experince__content">
            <article className='experince__details'>
              <BsFillPatchCheckFill className='experince__details-icon'/>
              <div>
                <h4>HRML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
          <div className="experince__content">
            <article className='experince__details'>
              <BsFillPatchCheckFill className='experince__details-icon'/>
              <div>
                <h4>HRML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Experience