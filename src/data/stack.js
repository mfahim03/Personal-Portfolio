/**
 * stack.js
 * --------
 * Your tech stack displayed in the Stack section.
 * Edit the categories / items here — no component changes needed.
 *
 * Each item has:
 *   label  – display name shown under the icon
 *   icon   – a React component from react-icons (imported below)
 *
 * react-icons docs: https://react-icons.github.io/react-icons/
 * To find an icon: search the site above, then import the matching package.
 */

import {
  SiJavascript,
  SiPython,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiCplusplus,
  SiPhp,
  SiDart,
  SiHtml5,
  SiCss,
  SiReact,
  SiVuedotjs,
  SiSpringboot,
  SiNodedotjs,
  SiFlutter,
  SiAndroidstudio,
  SiFirebase,
  SiFigma,
  SiJira,
  SiClockify,
} from "react-icons/si";
import {
  FaChartDiagram,
  FaCode,
  FaDatabase,
  FaDiagramProject,
  FaFlask,
  FaJava,
  FaLayerGroup,
  FaMobileScreenButton,
  FaSitemap,
  FaTable,
  FaUsers,
} from "react-icons/fa6";

/**
 * Stack categories.
 * Each category renders as a labelled group of icon cards.
 * Add / remove items freely — the UI maps over this automatically.
 */
export const stack = [
  {
    category: "Languages",
    items: [
      { label: "JavaScript", icon: SiJavascript },
      { label: "Java", icon: FaJava },
      { label: "Python", icon: SiPython },
      { label: "C++", icon: SiCplusplus },
      { label: "PHP", icon: SiPhp },
      { label: "Dart", icon: SiDart },
    ],
  },
  {
    category: "Frontend",
    items: [
      { label: "HTML5", icon: SiHtml5 },
      { label: "CSS3", icon: SiCss },
      { label: "React", icon: SiReact },
      { label: "Vue.js", icon: SiVuedotjs },
    ],
  },
  {
    category: "Backend",
    items: [
      { label: "Spring Boot", icon: SiSpringboot },
      { label: "Node.js", icon: SiNodedotjs },
      { label: "REST APIs", icon: FaCode },
    ],
  },
  {
    category: "Mobile Development",
    items: [
      { label: "Flutter", icon: SiFlutter },
      { label: "Android Studio", icon: SiAndroidstudio },
    ],
  },
  {
    category: "Databases",
    items: [
      { label: "MySQL", icon: SiMysql },
      { label: "Firebase Firestore", icon: SiFirebase },
      { label: "Microsoft SQL Server", icon: FaDatabase },
      { label: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    category: "Tools",
    items: [
      { label: "Git", icon: SiGit },
      { label: "GitHub", icon: SiGithub },
      { label: "VS Code", icon: FaCode },
      { label: "Figma", icon: SiFigma },
      { label: "Enterprise Architect", icon: FaDiagramProject },
      { label: "Tableau", icon: FaChartDiagram },
      { label: "Jira", icon: SiJira },
      { label: "Clockify", icon: SiClockify },
      { label: "Katalon", icon: FaFlask },
    ],
  },
  {
    category: "Concepts & Architecture",
    items: [
      { label: "Agile", icon: FaUsers },
      { label: "MVC Architecture", icon: FaSitemap },
      { label: "Layered Architecture", icon: FaLayerGroup },
      { label: "MVVM Architecture", icon: FaMobileScreenButton },
      { label: "NoSQL Database Design", icon: FaTable },
    ],
  },
];
