import { render } from "@testing-library/react";
import projects from "./data";
import '../App.css';

const RenderProject = (project) => (
    <li className="projects-list" key={project.id}>
        <img src={project.image} alt={project.name}></img>
        <p className="project-name">{project.name}</p>
        <p className="project-description">{project.explanation}</p>
        <p className="skills-container">Skills: {project.skills}</p>
        <p className="tools-container">Tools: {project.tools}</p>
        <a href={project.siteLink}target="_blank" rel="noreferrer" className="site-link">Live Page</a>
    </li>
);

export default RenderProject;