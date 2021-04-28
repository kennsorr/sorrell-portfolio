import React from 'react'
import imgPlaceholder from "../../assets/images/image-not-found.png";
import "../../styles/layout/ProjectItem.scss"
function ProjectItem(props) {
    let { project } = props;
    if (project["cover-image"] === "") {
        project["cover-image"] = imgPlaceholder;
    }
    return (
        <div className={`project-item ${props.key}`}>
            <img src={project["cover-image"]} />
            <h2>{project.title}</h2>
        </div>
    )
}

export default ProjectItem
