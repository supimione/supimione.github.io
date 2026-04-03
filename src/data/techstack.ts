import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiMongodb,
  SiCypress,
  SiJest,
  SiGit,
  SiBitbucket,
  SiJira,
  SiFigma,
  SiPostman,
  SiWebpack,
} from "react-icons/si";
import { FaMobileAlt, FaRobot, FaServer } from "react-icons/fa";
import type { IconType } from "react-icons";

export interface TechItem {
  name: string;
  icon: IconType;
  color: string;
}

export interface Category {
  name: string;
  icon: string;
  gradient: string;
  items: TechItem[];
}

export const categories: Category[] = [
  {
    name: "Frontend",
    icon: "🎨",
    gradient: "from-blue-500 to-cyan-400",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React Native", icon: FaMobileAlt, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Material UI", icon: SiMui, color: "#007FFF" },
      { name: "Kendo UI", icon: FaServer, color: "#FF6358" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "REST APIs", icon: FaServer, color: "#06B6D4" },
    ],
  },
  {
    name: "Tools & AI",
    icon: "🛠️",
    gradient: "from-slate-400 to-violet-400",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Bitbucket", icon: SiBitbucket, color: "#0052CC" },
      { name: "Jira", icon: SiJira, color: "#0052CC" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
      { name: "Claude AI", icon: FaRobot, color: "#D4A574" },
      { name: "Codex", icon: FaRobot, color: "#10A37F" },
      { name: "Cypress", icon: SiCypress, color: "#69D3A7" },
      { name: "Jest", icon: SiJest, color: "#C21325" },
    ],
  },
];
