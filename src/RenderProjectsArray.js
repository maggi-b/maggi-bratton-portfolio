import { render } from "@testing-library/react";
import projects from "./data";

const RenderProject = (project) => (
    <li key={project.id}>
        <img src={project.image} alt={project.name}></img>
        <p>{project.name}</p>
        <p>{project.explanation}</p>
        <p>Skills: {project.skills}</p>
        <p>Tools: {project.tools}</p>
        <button onClick={() => window.open(project.siteLink)}>Live Page</button>
    </li>
);

export default RenderProject;