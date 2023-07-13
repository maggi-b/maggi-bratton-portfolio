import github from "../img/github-repo-gallery-thumbnail.png";
import sticky from "../img/super-sticky-notes-app-thumbnail.png";
import word from "../img/guess-the-word-thumbnail.png";
import unplugged from "../img/responsive-unplugged-thumbnail.png";
import rogue from "../img/responsive-rogue-pickings-thumbnail.png";



const projects = [
    {
        id: "001",
        name: "GitHub Repo Gallery",
        explanation: "This site uses GitHub's API to access my profile and repositories. Users can click on each repository to see more details and a link to the repository on GitHub.",
        image: github,
        skills: "JavaScript",
        tools: "Rest APIs, GitHub Pages",
        siteLink: "https://maggi-b.github.io/github-repo-gallery/"
    },
    {
        id: "002",
        name:"Unplugged",
        explanation: "Unplugged is a responsive multi-page site that I coded using Flexbox. It includes many sections with different layouts that can be reused on other sites.",
        image: unplugged,
        skills: "HTMl, CSS, Flexbox",
        tools: "GitHub Pages, Chrome DevTools",
        siteLink: "https://maggi-b.github.io/unplugged/"
    },
    {
        id: "003",
        name: "Super Sticky Notes",
        explanation: "Super Sticky Notes is a web app developed using multiple React components. The user can create, delete, edit, and search for sticky notes.",
        image: sticky,
        skills: "React, JSX, Components",
        tools: "CodeSandBox, Props, State",
        siteLink: "https://t3d05f.csb.app/"
    },
    {
        id: "004",
        name: "Rogue Pickings",
        explanation: "Rogue Pickings is a straightforward home page that was originally a static site that I updated to be responsive using Flexbox.",
        image: rogue,
        skills: "HTML, CSS, Flexbox",
        tools: "GitHub Pages, Chrome DevTools",
        siteLink: "https://maggi-b.github.io/responsive-rogue-pickings/#menu",
    },
    {
        id: "005",
        name: "Guess the Word Game",
        explanation: "When playing this game, the user will enter one letter at a time to guess the word. If they guess all the letters correctly before they run out of guesses, they win!",
        image: word,
        skills: "JavaScript",
        tools: "GitHub Pages, JSON",
        siteLink: "https://maggi-b.github.io/guess-the-word-game/",
    }
];

export default projects;