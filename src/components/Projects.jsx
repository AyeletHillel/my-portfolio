import projects from '../json/projects.json';
import { ProjectContainer } from '../styledcomponents/Projects';


export default function Projects() {
    return (
    <div>
        {projects.map((project) => (
            <ProjectContainer key={project.title}>
                <h2>{project.description}</h2>
                <img src={project.image} alt={project.title} />
                <p>{project.description}</p>
                <a href={project.github}>GitHub</a>
                <a href={project.live}>Deployed</a>
                </ProjectContainer>
        ))}
    </div>)
}