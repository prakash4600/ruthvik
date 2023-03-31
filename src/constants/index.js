import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  kotlin,
  // docker,
  meta,
  starbucks,
  tesla,
  shopify,
  // carrent,
  // jobit,
  tripguide,
  threejs,
  csswinner,
  algo_visual,
  mobile_pro
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Student",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "IIT Tirupathi",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including react.js, product managers, and other developers to create high-quality products.",
      "Implementing responsive design that uses machine learning and deep learning",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Developer",
    company_name: "innmotive",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - July 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including Hardware developers, product managers, and other developers to create high-quality products.",
      "Developed a device that synchronizes with near by devices and can be used for advertising",
    ],
  },
  {
    title: "Web Developer",
    company_name: "coding shuttle",
    icon: shopify,
    iconBg: "#383E56",
    date: "July 2022 - March 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with people who are eager to learn about react.js.",
      "Contributed for the improvemnt of the website application.",
      "Learnt many amazing things on web developmnet from the best developers and enterpruners.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
    "I've never met a web developer who truly cares about their clients' success like Ruthvik does.",
    name: "Bhanu Prakash",
    designation: "Cloud and devops Engineer",
    company: "Centific Solutions",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ruthvik proved me wrong.",
    name: "Devisree",
    designation: "Software engineer",
    company: "DXC technology",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "After working with him for 6 months,I can certify he is a person who cares about his clients", 
    name: "Karthikeyan",
    designation: "Project Manager",
    company: "Care eco",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Algorithm Visualizer",
    description:
      "Web-based platform that allows user to see how does an algorithm work. We can see the path pattern from a start node to end node ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
    ],
    image: algo_visual,
    source_code_link: "https://github.com/Ruthvik2707/path_finding_visualiser_algorithm",
  },
  {
    name: "CSS Winner",
    description:
      "Cloned a web application with few features that are reliant and coherent. These website was featured in css winner awards",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: csswinner,
    source_code_link: "https://github.com/Ruthvik2707/Portfolio_website",
  },
  {
    name: "Mobile application",
    description:
      "Developed a mobile application that gives a desired output for a set of inputs. These application is heavily based on kotlin",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: mobile_pro,
    source_code_link: "https://github.com/Ruthvik2707",
  },
];

export { services, technologies, experiences, testimonials, projects };
