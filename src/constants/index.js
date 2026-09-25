import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import pusatani from "../assets/projects/pusatani.png";
import rasakita from "../assets/projects/rasakita.jpg";

export const HERO_CONTENT = `I am a passionate technology enthusiast and an undergraduate student at Politeknik Negeri Bali.Driven by curiosity and a love for innovation, I’ve been exploring the world of tech through hands-on projects and continuous learning. From web development to emerging technologies, I’m committed to building a strong foundation that will empower me to solve real-world problems and create meaningful digital experiences.`;

export const ABOUT_TEXT = `Hi! I’m a tech enthusiast and a current student at Politeknik Negeri Bali, deeply passionate about the ever-evolving world of technology. Although I haven’t graduated yet, I’ve been actively learning and experimenting with various tech tools and concepts outside of the classroom. My interests range from web development and software engineering to emerging fields like artificial intelligence and Internet of Things (IoT). I enjoy turning ideas into real projects, whether it’s building simple applications, exploring UI/UX design, or diving into backend systems. I believe that consistent learning, curiosity, and hands-on experience are the keys to growth in this field — and I’m excited to keep pushing forward, one line of code at a time.`;

export const EXPERIENCES = [
  {
    year: "2025 - 2026",
    role: "Mobile Frontend Developer",
    company: "Diskominfo Badung",
    description: `developed and maintained mobile applications using Flutter and Dart. Collaborated with backend developers to integrate APIs and ensure seamless data flow. Implemented responsive designs and optimized app performance for various devices.`,
    technologies: ["Flutter", "Dart", "figma", "firebase"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    type: "web",
    title: "Pusatani",
    image: pusatani,
    description:
      "An all-in-one web platform for farmers provides real-time weather, local market prices, and expert agricultural guidance in one place. By giving quick access to crop care and soil management data, it helps growers make smart, data-driven decisions to boost yields and profit.",
    link: "https://pusatani.vercel.app/",
    github: "https://github.com/galangdh/pusatani-v2",
    technologies: ["Javascript"],
  },
    {
    type: "Mobile App",
    title: "Rasa Kita",
    image: rasakita,
    description:
      "A tailored mobile application for restaurant discovery matches users with the perfect dining options based on their personal taste preferences, dietary needs, and authentic customer reviews. By analyzing user ratings, location, and cuisine choices in real time, the app eliminates decision fatigue and helps food lovers effortlessly find top-rated local eateries.",
    link: "https://pusatani.vercel.app/",
    github: "https://github.com/galangdh/pusatani-v2",
    technologies: ["flutter","firebase"],
  },
];

export const CONTACT = {
  address: "Jl. Campuhan II, gang sanda V, no. 2,sibanggede, abiansemal, badung, bali",
  phoneNo: "+62 898-7689-393",
  email: "galang.dharmaputra@gmail.com",
};
