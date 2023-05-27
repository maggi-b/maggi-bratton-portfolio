import { render } from "@testing-library/react";
import projects from "./data";
import '../App.css';

const RenderProject = (project) => (
    <li className="projects-list" key={project.id}>
        <img src={project.image} alt={project.name}></img>
        <p>{project.name}</p>
        <p>{project.explanation}</p>
        <p>Skills: {project.skills}</p>
        <p>Tools: {project.tools}</p>
        <a href={project.siteLink}target="_blank" className="images">Live Page</a>
    </li>
);

export default RenderProject;