import { Bike, Compass, Lightbulb, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const aboutParagraphs = [
  "I studied Computer Science and Engineering at Independent University, Bangladesh, and I’ve spent the months since turning that foundation into real web products. Coursework in algorithms, databases and software engineering became a daily habit of building: interfaces, authentication flows, APIs and deployments.",
  "What I enjoy most is watching a whole product come together: designing the interface, wiring up auth and data, then shipping it live. Next.js and TypeScript are my home base, with Node.js, Express and MongoDB behind them. I use AI-assisted tools like Cursor too, but I care most about understanding every line I ship, because that’s what lets me debug it, explain it and improve it.",
  "I’m early in my career and I don’t pretend otherwise. I learn by building, breaking things and fixing them, and I’m looking for a team where I can keep doing that alongside people better than me.",
];

export const hobbies: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Travelling",
    text: "New places and new perspectives, and plenty of stories to bring back.",
    icon: Compass,
  },
  {
    title: "Meeting people",
    text: "Good conversations are where I learn the most.",
    icon: Users,
  },
  {
    title: "Philosophy",
    text: "I like asking “why”, in life as much as in code.",
    icon: Lightbulb,
  },
  {
    title: "Cycling",
    text: "Long rides to clear my head and reset.",
    icon: Bike,
  },
];