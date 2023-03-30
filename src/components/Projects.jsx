import projects from '../json/projects.json';
import { ProjectsContainer, ProjectCard, ProjectImage, ProjectLink } from '../styledcomponents/Projects.js';


export default function Projects() {
    return (
    <ProjectsContainer>
        {projects.map((project) => (
            <ProjectCard key={project.title}>
                <h2>{project.description}</h2>
                <ProjectImage src={project.image} alt={project.title} />
                <p>{project.description}</p>
                <ProjectLink href={project.github}>GitHub</ProjectLink>
                <ProjectLink href={project.live}>Deployed</ProjectLink>
                </ProjectCard>
        ))}
    </ProjectsContainer>)
}