import React from 'react'
import "./contact.css"
import linkedin from "../../img/linkedin.png"
import Git from "../../img/git.png"
import Mail from "../../img/mail.png"
import {BrowserRouter as Router, Link} from 'react-router-dom';



const contact = () => {
  return (
    <div className='c'>
    <div className='c-left'>
      <div className="c-left-wrapper">
         
          <h1 className='c-name'>Connect with Me </h1>
    <div className="c-items">
        <div className="c-icons">
        <a href="https://www.linkedin.com/in/elton-mehmeti-0721911a7/"><img className='c-img-l' src={linkedin} alt="LinkedIn"  /></a>
   
        <a href="https://github.com/EltonMehmeti"> <img className='c-img' src={Git} alt="GitHub"  /></a>
        <a href="mailto:eltonmhmt@gmail.com"> <img className='c-img' src={Mail} alt="GitHub"  /></a>
        </div>
        </div>
          
      </div>
      
    </div>
    <div className="c-right">
    
      <div className="c-bg">
      
      </div>
    
    </div>
      </div>
  )
}

export default contact