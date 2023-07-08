
import React from 'react';
import "./project.css";
import RepoCard from "react-repo-card";



const Project = ({gitUN,repoN}) => {

   
    
  return (
    
    <div className='p'>
   
       
   
    <RepoCard username={gitUN} repository={repoN} />
  </div>
  )
}


export default Project