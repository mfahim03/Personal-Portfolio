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
      ["Capstone project for Certificate in Full Stack Java with AI",
       "A system where users can browse activities and register as volunteers or participants. Admins manage activities and monitor participation.",
       "This capstone is intended to test my understanding of the full stack, not to build a large commercial platform.",
      ],
    image: "/images/project-placeholder-2.png",
    tags: ["React", "Java", "Spring Boot","Node.js", "MongoDB", "JWT Authentication", "BCrypt","RESTful API", "Maven"],
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
    title: "Speed Trials 2D - Real-Time and Concurrent Software Development",
    description:
      "This assignment is to develop and analyze a concurrent, multi-threaded control system for a selfdriving car simulation using RTOS principles to investigate how task scheduling, priority, and timing requirements directly affect the vehicle's real-time responsiveness and stability.",
    image: "/images/project-placeholder-5.png",
    tags: ["Python", "ASP.NET", "Real-Time Operating Systems", "Multi-threading", "Concurrent Programming"],
    videoLink: "https://youtu.be/25N8Iu907-I?si=Rr0qkDIRut_Qp_Lt",
    githubLink: "https://github.com/mfahim03/Speed-Trials-2D",
  },
  {
    id: "project-6",
    title: "UTMRunify - Running Event Registration and Management Application",
    description:
      "The UTM Running Application is a user-centered mobile platform designed to streamline the organization and participation of running events at Universiti Teknologi Malaysia (UTM).",
    image: "/images/project-placeholder-6.png",
    tags: ["Flutter", "Firebase", "Clockify", "Jira", "Figma", "Agile Scrum", "Mobile Application Development"],
    videoLink: null,
    githubLink: "https://github.com/Apps-Builder/utmrunify",
  },
  {
    id: "project-7",
    title: "CI/CD Pipeline Implementation with GitLab, DigitalOcean,Jira and SonarQube",  
    description:
      ["The objective of this project is to allow students to apply an industrial-level software development workflow by setting up a complete CI/CD environment using GitLab, DigitalOcean, Jira Cloud, and SonarQube.",
       "We are required to demonstrate how software development, deployment, issue tracking, and code quality analysis can be automated in a real DevOps environment.",
      ],
    image: "/images/project-placeholder-7.png",
    tags: ["GitLab", "Docker", "DigitalOcean", "Jira", "SonarQube"],
    videoLink: "https://youtu.be/kj-iIkXi068?si=AtxGno6scQUO9EBV",
    githubLink: null,
  },
  {
    id: "project-8",
    title: "Katalon Test Execution and Reporting Automation",  
    description:
      ["This project aims to automate the execution of Katalon test cases and generate comprehensive reports for efficient test management.",
       "We are required to demonstrate how test automation can be streamlined and how reporting can be automated for better visibility and tracking of test results.",
      ],
    image: "/images/project-placeholder-8.png",
    tags: ["Katalon Studio", "TestLink", "Test Automation", "Reporting", "Mobile Testing"],
    videoLink: "https://youtu.be/WQMt6xD8cLE",
    githubLink: null,
  },
];





