import React from 'react'
import Project from '../Projects/Project';
import "./projectList.css";
import { Projects } from '../../data';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";


const ProjectList = () => {
  return (
    <div className='pl'>
       <div className="pl-texts">
    <h1 className='pl-title'> Some Projects I've Developed</h1>
       <p className='pl-desc'>Let's build together</p>
       </div>
<div className="pl-list">
    {Projects.map((item )=>(
       <Project  key={item} gitUN={item.gitUN} repoN={item.repoN} /> 
    ))}
   

</div>
<ScrollUpButton
 
/>

    </div>
  )
}

export default ProjectList