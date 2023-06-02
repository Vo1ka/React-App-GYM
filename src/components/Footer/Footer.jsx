import React from 'react'
import './footer.css'
import Github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'


export const Footer = () => {
  return (
    <div className="footer">
        <hr />
        <div className="footer__content">
            <div className="social-links">
                <img src={Github} alt="Github" />
                <img src={instagram} alt="instagram" />
                <img src={linkedin} alt="linkedin" />
            </div>
            <div className="footer__logo">
              <img src={logo} alt="Logo" />
            </div>
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer;