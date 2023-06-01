import RenderProject from "./RenderProjectsArray";

const ProjectMap = props => {
    const projectProperties = props.projects.map(RenderProject);
    return <ul className="projects--unordered-list">{projectProperties}</ul>
};
export default ProjectMap;