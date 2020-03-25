import React from 'react';





function ProjectCard(props){

    return(
        <div className="project__card">
            <div className="project__title">
                <p>{props.title}</p>
            </div>

            <div className="project__discription">
                <p>{props.description}</p>
            </div>

            <div className="project__link">
                <a href={props.link} target="_blank" rel="noopener noreferrer" ><i class="fas fa-link"></i><p>Visit Site</p> </a>
            </div>

            <div className="project__tag">
                <p>{props.tag}</p>
            </div>

            <div className="project__tech">
                <p><span className="project__techTitle">Tech: </span>{props.tech}</p>
            </div>
        </div>
    )

}


export default ProjectCard;