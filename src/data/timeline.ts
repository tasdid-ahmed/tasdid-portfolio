export type TimelineItem = {
  title: string;
  place: string;
  period: string;
  description: string;
  tags?: string[];
};

export const education: TimelineItem[] = [
  {
    title: "B.Sc. in Computer Science & Engineering",
    place: "Independent University, Bangladesh (IUB)",
    period: "Spring 2022 – Summer 2026",
    description:
      "Completed the full CSE coursework, with the final internship requirement still ahead. Supporting area: Human Resource Management.",
    tags: [
      "Data Structures",
      "Algorithms",
      "Database Systems",
      "Software Engineering",
      "Operating Systems",
      "Networking",
      "Artificial Intelligence",
      "Mobile App Development",
    ],
  },
  {
    title: "CCNA: Introduction to Networks",
    place: "Cisco Networking Academy, via IUB",
    period: "Aug 2026",
    description:
      "A 70-hour Cisco course on network fundamentals, IP addressing, and the basics of switching and routing.",
  },
];

export const journey: TimelineItem[] = [
  {
    title: "AI Driven Full Stack Web Engineering",
    place: "Programming Hero",
    period: "2026 – Present",
    description:
      "A self-driven learning sprint from HTML and CSS through JavaScript, TypeScript, React and Next.js, then authentication, MongoDB and Node.js. Built and deployed multiple projects along the way, earning full marks on several graded assignments.",
    tags: ["Next.js", "TypeScript", "BetterAuth", "MongoDB", "Express"],
  },
  {
    title: "Durbar Group & Code Lab",
    place: "Programming Hero",
    period: "2026 – Present",
    description:
      "Invited into Durbar Group, a performance-based group within the course, after strong early assignments. I compete in Code Lab algorithm contests and complete career-focused tasks, like building this portfolio.",
    tags: ["Problem solving", "JavaScript", "Contests"],
  },
];