/**
 * projects.js
 * -----------
 * All portfolio projects live here as a plain array of objects.
 * To add a new project, just push a new object following the same shape.
 * The Projects component reads this array and renders cards automatically.
 *
 * Fields:
 *   id          – unique string key (used as React key)
 *   title       – project name shown on the card
 *   description – a summary string or an array of bullet points shown on the card
 *   image       – path to a screenshot/thumbnail (relative to /public or a URL)
 *   tags        – array of technology/category label strings
 *   previewLink – (optional) live URL; button shown only if provided
 *   videoLink   – (optional) YouTube demo URL; button shown only if provided
 *   githubLink  – (optional) GitHub repo URL; button shown only if provided
 */

export const projects = [
  {
    id: "project-1",
    title: ["Mobile Application for Courts Facility Management - UTMSports+", " (Final Year Project)"],
    description: [
    "Developed a centralized mobile application for sports facility booking and event management at UTM using Flutter and Firebase.",
    "Integrated MapBox API to provide navigation and location-based services for sports facilities.",
    "Implemented key modules including event management, facility booking, achievement tracking, and user feedback.",
    "Applied MVVM architecture and Firebase Firestore (NoSQL) database design to ensure scalability and maintainability.",
    "Designed system models and documentation, including requirements analysis, use case diagrams, and software architecture artifacts.",
    ],
    image: "/images/project-placeholder-1.png",
    tags: ["Flutter", "Firebase","MapBox", "MVVM Architecture", "NoSQL", "Software Documentation"],
    videoLink: "https://youtu.be/9oNvz9kTZqM?si=Bsod_n1puFYx-870",
    githubLink: "https://github.com/mfahim03/utmsportsV2",
  },
  {
    id: "project-2",
    title: "VolunTier - Volunteer & Activity Regisrtration System",
    description:
      "Capstone project for Certificate in Full Stack Java with AI",
    image: "/images/project-placeholder-2.png",
    tags: ["React", "Java", "Spring Boot","Node.js", "MongoDB", "JWT Authentication", "BCrypt","REST APIs", "Maven"],
    githubLink: "https://github.com/mfahim03/VolunTier",
  },  
  {
    id: "project-3",
    title: "Foreign Contract Worker Masterlist",
    description:  
      "Designed and developed HR systems managing more than 500 records for foreign worker data management including passport and permit tracking with visualisation dashboards.",
    image: "/images/project-placeholder-3.png",
    tags: ["PHP", "MS SQL","HTML", "JavaScript", "CSS"],
    githubLink: "https://github.com/mfahim03/FCW-Masterlist",
  },
  {
    id: "project-4",
    title: "Door Access Management System",
    description:
      "Developed Door Access Management system to track and monitor employee entry access to improve control over workplace security.",
    image: "/images/project-placeholder-4.png",
    tags: ["PHP", "MS SQL","HTML", "JavaScript", "CSS"],
    githubLink: "https://github.com/mfahim03/ALMA-Door-Access-Management-System",
    videoLink: null,
  },
  {
    id: "project-5",
    title: "Javascript Mastery (Learning Template/Guides)",
    description:
      "My personal Javascript learning journey based on W3Schools. Code, detailed comments, and syllabus tracking.",
    image: "/images/project-placeholder-5.png",
    tags: ["JavaScript", "HTML", "CSS", "W3Schools", "Learning Template", "Code Comments", "Syllabus Tracking"],
    videoLink: null,
    githubLink: "https://github.com/tenenggg/javascript-mastery-notes.git",
  },
  {
    id: "project-6",
    title: "NodeJS Mastery (Learning Template/Guides)",  
    description:
      " A complete, well-organized template with detailed code comments and structure guides to help you understand how to build a professional Node.js backend featuring MySQL, JWT auth, and Socket.io. Whether you're learning for the first time or building your first real project, this template shows you exactly how everything fits together.",
    image: "/images/project-placeholder-6.png",
    tags: ["Node.js", "Express.js", "JavaScript", "MySQL", "JWT Authentication", "Socket.io"],
    videoLink: null,
    githubLink: "https://github.com/tenenggg/nodejs-expressjs-template.git",
  },
];





