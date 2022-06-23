import React from 'react'
import CTA from './CTA'
import "./header.css"
// import ME from '../../assets/nisal.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <h5>Hello I'm</h5>
        <h2>Nisal Renuja<br></br> Palliyaguru</h2>
        <h5 className='text-light'>FullStack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='hero'><h3>Design <br></br>And<br></br> Develop</h3></div>
        
        {/* <div className="me">
          <img src={ME} alt='nisal renuja'></img>  
        </div> */}
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header