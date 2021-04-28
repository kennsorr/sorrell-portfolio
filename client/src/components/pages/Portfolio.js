import React from 'react'
import PageHeader from '../layout/PageHeader'
import ProjectList from '../layout/ProjectList'
function Portfolio() {
    return (
        <div id="main" className="Contact" style={{backgroundColor:'red'}}>
                <PageHeader title="Contact" desc="Let's connect" display="none"></PageHeader>
                <div class="center container">
                <h1>Projects</h1>
                    <ProjectList/>
                </div>
            </div>
    )
}

export default Portfolio
