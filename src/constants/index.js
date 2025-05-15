import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I’m a passionate CSE student and front-end web developer with 2 years of self-learning experience. Skilled in HTML, CSS, JavaScript, React.js, and Next.js — with backend knowledge in Node.js, Express.js, and MongoDB — I build sleek, responsive, and scalable web experiences.`;

export const ABOUT_TEXT = `I'm a CSE student with a strong passion for technology and web development. Since 2022, I've been self-learning and building web projects that reflect my love for creating digital experiences.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },

];

export const PROJECTS = [
  {
    title: "Coffee Shop Website",
    image: project1,
    description:
      "A modern front-end coffee shop website featuring a responsive design, navigation using React Router, and a dynamic menu section to showcase various coffee items.",
    technologies: ["HTML", "CSS", "JavaScript"],
    href:"https://coffee-shop-website-lemon.vercel.app/"
  },
  {
    title: "Furniture Shop Website",
    image: project2,
    description:
      "A responsive front-end furniture shop website built with React, featuring smooth navigation using React Router and optimized for mobile devices.",
    technologies: ["HTML", "CSS", "React","JavaScript", "Tailwind CSS"],
    href: ""
  },
  {
    title: "Movie App",
    image: project3,
    description:
      "A dynamic movie app with features like search, liking movies, and adding favorites. Movie data is fetched from an external API for real-time content updates.",
    technologies: ["HTML", "CSS", "React", "JavaScript"],
    href:"https://rad-ganache-bcd104.netlify.app/"
  },
];

export const CONTACT = {
  address: "Tusherdhara R/A, Dhaka-1362, Bangladesh ",
  phoneNo: "0 1819 2686 49 ",
  email: "mdabdurrahmanminhaz@gmail.com",
};
