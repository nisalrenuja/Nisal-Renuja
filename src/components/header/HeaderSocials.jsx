import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='www.facebook.com' target="_blank"><BsFacebook/></a>
        <a href='www.twitter.com' target="_blank"><BsTwitter/></a>
        <a href='www.linkedin.com' target="_blank"><BsLinkedin/></a>
        <a href='www.github.com' target="_blank"><BsGithub/></a>
        <a href='www.instagram.com' target="_blank"><BsInstagram/></a>
        </div>
    
  )
}

export default HeaderSocials