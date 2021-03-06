import ProjectGiveBack from "./assets/project-give-back.png";
import PasswordGenerator from "./assets/Password-Generator-Image.png";
import WorkdayPlanner from "./assets/work-day-planner.png";
import EatDaBurger from "./assets/eat-da-burger.png";


export let projects = [
  {
    id: 1,
    name: "Project Give Back",
    description:
      "The purpose of Project-Give-Back is to provide information to consumers about the fast fashion industry's impact and the effects it has on our environment. This site provides consumers with companies in fast fashion that are trying to minimizes their damage.",
    media: ProjectGiveBack,
    languages: "HTML, Javascript, CSS",
    github: "https://github.com/TASoko/project-give-back",
    deployed: "https://tasoko.github.io/project-give-back/",
  },
  {
    id: 2,
    name: "Password Generator",
    description:
      "This website is a password generator that can be used by anyone who wants to randomly generate a password. The project successfully allows a user to generate a random password that meets their criteria. It offers 8 - 128 characters, upper and lower case letters, numbers and special characters. Once the specifications are chosen the password will display in the text box.",
    media: PasswordGenerator,
    languages: "HTML, Javascript, CSS",
    github: "https://github.com/TASoko/Password-Generator",
    deployed: "https://tasoko.github.io/Password-Generator/",
  },
  {
    id: 3,
    name: "Work Day Planner",
    description:
      "The purpose of this assingment was to create a simple calendar application that allows a user to save events for each hour of the day. The app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.The colours of the time slots change according to the past, present and future hours.",
    media: WorkdayPlanner,
    languages: "HTML, Javascript, CSS",
    github: "https://github.com/TASoko/Planner",
    deployed: "https://tasoko.github.io/Planner/",
  },
  {
    id: 4,
    name: "Eat Da Burger",
    description:
      "The purpose of this assingment was to create an application where a user can create, devour and delete a burger. This app utilized the full aspect of MVC.",
    media: EatDaBurger,
    languages: "Handlebars, Javascript, CSS",
    github: "https://github.com/TASoko/Burger-App",
    deployed: "https://mighty-journey-51575.herokuapp.com/",
  },
];