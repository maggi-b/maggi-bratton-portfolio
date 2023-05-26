import './App.css';

//Importing array of project objects
import projects from './data';

//Importing callback fuction for rendering each project's properties

//Importing mapped array
import ProjectMap from './projectMap';



function App() {
    return(
<div className="App">
    <ProjectMap projects={projects} />
</div>
);
}

export default App;
