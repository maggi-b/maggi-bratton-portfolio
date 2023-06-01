//Importing array of project objects
import projects from './projects/data';


//Importing mapped array
import ProjectMap from './projects/ProjectMap'



function App() {
    return(
<div className="App">
    <ProjectMap projects={projects} />
</div>
);
}

export default App;
