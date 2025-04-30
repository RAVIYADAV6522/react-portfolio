import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";

export const HERO_CONTENT = `I'm Ravi Yadav, passionate about solving Data Structures and Algorithms (DSA) problems using Java and Python. I love sharing knowledge and building impactful web applications with the MERN stack, aiming to create real-world solutions that make a difference.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

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
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "HealthCare Website",
    image: project1,
    description:
      "A frontend website with features like doctors listing, interactive UI, toastify & routing",
    technologies: ["HTML", "Tailwind CSS", "React"],
    github: "https://github.com/RAVIYADAV6522/DoctApp",
    live: "https://doct-app-azure.vercel.app/",
  },
  {
    title: "Instagram Landing Page",
    image: project2,
    description:
      "A frontend website with features like Signup and login , dropdown with logined userdata , localStorage to store user data and sessionStorage to store current logined user data",
    technologies: ["HTML", "CSS", "javascript"],
    github: "https://github.com/RAVIYADAV6522/InstagramProject",
    live: "https://instagram-project-pi.vercel.app/login.html",
  },

  {
    title: "Todo App",
    image: project3,
    description:
      "A todo app with features like add , delete, edit and localStorage to store data",
    technologies: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/RAVIYADAV6522/todo-project",
    live: "https://todo-project-git-main-ravi-yadavs-projects-e43cef2e.vercel.app/",
  },
];

export const CONTACT = {
  address: "Plot No. 10A Tarak Nagar, Chakrol Dantli, Jaipur (Rajasthan) ",
  phoneNo: "+91 6350225693 ",
  email: "yadavr74839@gmail.com",
};
