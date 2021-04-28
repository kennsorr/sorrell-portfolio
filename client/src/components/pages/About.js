import React from 'react'
import PageHeader from '../layout/PageHeader'
function About() {
    return (
        <div id="main" className="About me" style={{backgroundColor:'red'}}>
            <PageHeader title="About" desc="Learn more about me." display="none"></PageHeader>
            <div class="center container">
                <div className="wrapper">
                    <h1>About</h1>
                        <h3>Hello, my name is Kenneth Sorrell.</h3>
                        <p>I am full-stack web developer with experience in marketing solutions and animation.
                        For more info about me, visit my Github, LinkedIn, or download my resume.
                        Feel free to take a look at my latest projects on the web portfolio page as well.
                        </p>
                        <p>Remotely available during work hours Eastern Time at kennsorr@gmail.com.</p>
                </div>
            </div>
        </div>
    )
}

export default About
