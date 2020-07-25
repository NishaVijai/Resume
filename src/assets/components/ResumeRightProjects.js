import React, { Component } from 'react'
import ExperienceContainer from './ExperienceContainer'
import expData from './experienceData'

export default class ResumeRightProjects extends Component {
    render() {
        // const experienceComponent = expData.map((exp) => <ExperienceContainer date={exp.date} title={exp.title} project={exp.project} githubText={exp.githubText} githubLink={exp.githubLink} githubName={exp.githubName} projectLanguages={exp.projectLanguages} projectTextOne={exp.projectTextOne} projectLink={exp.projectLink} projectName={exp.projectName} projectTextTwo={exp.projectTextTwo} linkOne={exp.linkOne} linkTwo={exp.linkTwo} /> )

        // const experienceComponent = expData.map((exp) => <ExperienceContainer date={exp.date} title={exp.title} project={exp.project} linkOne={exp.linkOne} linkTwo={exp.linkTwo} /> )

        const experienceComponent = expData.map((exp) => <ExperienceContainer date={exp.date} title={exp.title} project={exp.project} description={exp.description} links={exp.links} /> )
        return (
            <article id="second">
				<h2 className="h2-experience">experience</h2>
                {experienceComponent}
            </article>
        )
    }
}
