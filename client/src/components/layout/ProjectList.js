import React from 'react'
import projectsData from '../../global-data/project-data.json'
import ProjectItem from '../layout/ProjectItem';
import "../../styles/layout/ProjectList.scss"
function ProjectList() {
    return (
        <div id="project-list">
            {projectsData['project-list'].map(function (project, i) {
                return <ProjectItem project={project} key={i}></ProjectItem>
            })}
        </div>
    )
}

export default ProjectList
