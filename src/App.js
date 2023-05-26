import './App.css';

//Importing array of project objects
import projects from './data';


//Importing mapped array
import ProjectMap from './ProjectMap';



function App() {
    return(
<div className="App">
    <ProjectMap projects={projects} />
</div>
);
}

export default App;
