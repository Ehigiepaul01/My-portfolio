import { html, css, js, tailwind, react, main, mentor, music, crypto, digisec,bank } from "../assets";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
export const NavLinks = [
  {
    id: 1,
    title: "Home",
    link: "#home",
  },
  {
    id: 2,
    title: "About",
    link: "#about",
  },
  {
    id: 3,
    title: "Projects",
    link: "#projects",
  },
  {
    id: 4,
    title: "Contact",
    link: "#contact",
  },
];

export const Skills = [
  {
    id: 1,
    icon: html,
    text: "HTML",
  },
  {
    id: 2,
    icon: css,
    text: "CSS",
  },
  {
    id: 3,
    icon: js,
    text: "JavaScript",
  },
  {
    id: 4,
    icon: tailwind,
    text: "Tailwind CSS",
  },
  {
    id: 5,
    icon: react,
    text: "React JS",
  },
];

export const Projects = [
  {
    id: 1,
    image: digisec,
    name: "HTML | CSS | JavaScript",
    work: "FixMyRide",
    github: "https://github.com/Solexgreat/FixMyRide",
    live: "https://fix-my-ride.netlify.app/",
  }, 
  {
    id: 2,
    image: main,
    name: "HTML | CSS | JavaScript",
    work: "Migospay",
    github: "https://github.com/Ehigiepaul01/Migospay",
    live: "https://www.migospay.com/",
  },
  {
    id: 3,
    image: crypto,
    name: "HTML | CSS | JavaScript",
    work: "Healthical",
    github: "https://github.com/Ehigiepaul01/Healthical",
    live: "https://healthical.netlify.app/",
  },
  {
    id: 4,
    image: music,
    name: "HTML | CSS | JavaScript",
    work: "Casmi Store",
    github: "https://github.com/Ehigiepaul01/casmi_store",
    live: "https://casmi-store.netlify.app/",
  },
  {
    id: 5,
    image: mentor,
    name: "HTML | CSS | Bootstrap| JavaScript",
    work: "Bolster",
    github: "https://github.com/ceceukoha/Bolster",
    live: "https://bolsterapp.netlify.app/",
  },
  // {
  //   id: 6,
  //   image: bank,
  //   name: "React | Tailwind-CSS",
  //   work: "HooBank",
  //   github: "https://github.com/TRIPLE-ADE/bank-modern-app",
  //   live: "https://modern-bank-web-app.netlify.app/",
  // },
];

{Projects.map((project) => (
  <div key={project.id}>
    <a href={project.live} target="_blank" rel="noopener noreferrer">
      <img src={project.image} alt={project.work} />
    </a>
    <h3>{project.name}</h3>
    <p>{project.work}</p>
    <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
  </div>
))}



export const FootersLink = [
    {
        id: 1,
        icon: <FaTwitter/>,
        link: 'https://twitter.com/ehigie_paul?t=d_0cPg41-gDYLhCQJ0Elxg&s=09'
    },
    {
        id: 2,
        icon: <FaLinkedinIn/>,
        link: 'https://www.linkedin.com/in/paulehigie'
    },
    {
        id: 3,
        icon: <FaGithub/>,
        link: 'https://github.com/Ehigiepaul01'
    },
]

