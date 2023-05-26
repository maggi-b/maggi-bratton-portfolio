import RenderProject from "./RenderProjectsArray";

const ProjectMap = props => {
    const projectProperties = props.projects.map(RenderProject);
    return <ul className="projects-list">{projectProperties}</ul>
};
export default ProjectMap;