import React from 'react';
import projectArr from './projectArr';
import ProjectCard from './projectCard';






function Projects(){

    return <div>

        <p className="main-title" id="projects">
            Project
            </p>

        <div className="project project__flex">
            
            <div className="relative">
                <div className="projectAnimate">
                    
                </div>
            </div>

            {
                projectArr.map(item=>(
                    <ProjectCard 
                    
                    key = {item.id}
                    title = {item.title}
                    description = {item.description}
                    link = {item.link}
                    tag = {item.tag}
                    tech = {item.techs}

                    />
                ))
            }
        </div>
    </div>

}


export default Projects;