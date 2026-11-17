import type { IconType } from "react-icons";
import { FaCss3Alt, FaHtml5, FaJava } from "react-icons/fa6";
import {
  SiDart,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiPytorch,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export type SkillLevel = "Strong" | "Working" | "Familiar";

export type Skill = {
  name: string;
  icon: IconType;
  color: string;
  level: SkillLevel;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: "Strong" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: "Strong" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: "Strong" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: "Strong" },
      { name: "React", icon: SiReact, color: "#61DAFB", level: "Strong" },
      { name: "Next.js", icon: SiNextdotjs, color: "currentColor", level: "Strong" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: "Strong" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E", level: "Working" },
      { name: "Express.js", icon: SiExpress, color: "currentColor", level: "Working" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#FB015B", level: "Working" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: "Working" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1", level: "Familiar" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: "Familiar" },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E", level: "Familiar" },
    ],
  },
  {
    title: "Languages & Mobile",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB", level: "Familiar" },
      { name: "Java", icon: FaJava, color: "#ED8B00", level: "Familiar" },
      { name: "PHP", icon: SiPhp, color: "#777BB4", level: "Familiar" },
      { name: "Dart", icon: SiDart, color: "#0175C2", level: "Familiar" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B", level: "Familiar" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C", level: "Familiar" },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032", level: "Working" },
      { name: "GitHub", icon: SiGithub, color: "currentColor", level: "Working" },
      { name: "Vercel", icon: SiVercel, color: "currentColor", level: "Working" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7", level: "Working" },
    ],
  },
];