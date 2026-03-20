export interface Skill {
  name: string;
  category: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Contact {
  emails: string[];
  github: string;
  linkedin: string;
  location: string;
  instagram: string;
  facebook: string;
  twitter: string;
  telegram: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  summary: string;
  about: string;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  contact: Contact;
}

export const portfolioData: PortfolioData = {
  name: "SK MOHAMMAD ALI",
  title: "Electrical Engineering Student",
  summary: "Highly motivated Engineering student pursuing B.Tech in Electrical Engineering, eager to apply knowledge and develop practical skills.",
  about: `I am an Electrical Engineering student at Aliah University, graduating in 2028. I build systems that connect hardware and software to solve real problems.
My work sits at the intersection of:
IoT and embedded systems
Full-stack web development
SaaS product building
I enjoy taking ideas from concept to working product. I focus on building things that are practical, scalable, and useful.
I have worked on projects involving connected devices, web applications, and system integration. Each project helps me understand how technology works beyond theory.
Right now, I am looking for opportunities to:
Work on real-world engineering problems
Contribute to meaningful projects
Learn from experienced developers and engineers
I am focused on consistent learning, hands-on building, and growing into a well-rounded engineer.`,
  skills: [
    { name: "Communication", category: "Soft Skills", icon: "MessageCircle" },
    { name: "Public Speaking", category: "Soft Skills", icon: "Mic" },
    { name: "Critical Thinking", category: "Soft Skills", icon: "Brain" },
    { name: "Leadership", category: "Management", icon: "Shield" },
    { name: "Full stack web development", category: "Web", icon: "Layout" },
    { name: "SaaS", category: "Web", icon: "Cloud" },
    { name: "IoT Development", category: "Engineering", icon: "Cpu" },
    { name: "Project Management", category: "Management", icon: "Briefcase" },
    { name: "Designing", category: "Design", icon: "Palette" },
    { name: "Creativity", category: "Design", icon: "Zap" }
  ],
  projects: [
    {
      title: "Voice Control Wheel Chair",
      description: "An innovative engineering project focused on enhancing accessibility for individuals with mobility impairments. This system allows users to control the wheelchair's movement—forward, backward, left, and right—using simple voice commands. Built using IoT technologies and voice recognition modules, this project demonstrates the practical application of embedded systems in improving quality of life.",
      image: "/projects/wheelchair.png",
      tags: ["Engineering", "Voice Control", "IoT"],
      link: "#"
    }
  ],
  experience: [
    {
      role: "Leadership",
      company: "Various",
      period: "May 2023 - Present",
      description: "Taking on pivotal leadership roles in various academic and extracurricular projects, guiding teams towards successful project completion while fostering a collaborative environment."
    },
    {
      role: "Project Management",
      company: "Various",
      period: "Nov 2024 - Present",
      description: "Overseeing the entire lifecycle of technical projects, from initial concept to final delivery, ensuring that all technical tasks are executed efficiently and deadlines are met."
    },
    {
      role: "Event Management",
      company: "Various",
      period: "May 2025 - Present",
      description: "Organizing and coordinating large-scale engineering and social events, managing logistics, and ensuring a seamless experience for all participants."
    }
  ],
  education: [
    {
      institution: "Aliah University",
      degree: "B.Tech - Electrical Engineering",
      period: "2024 - 2028"
    },
    {
      institution: "Al-Ameen Mission",
      degree: "Intermediate - Science",
      period: "2022 - 2024"
    },
    {
      institution: "Al-Ameen Mission",
      degree: "High School",
      period: "2018 - 2022"
    }
  ],
    contact: {
      emails: ["connect@skmohammadali.in", "skmohammadaliofficail@gmail.com"],
      github: "https://github.com/skmohammadali786",
      linkedin: "https://www.linkedin.com/in/skmohammadali?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      location: "Kolkata, India",
      instagram: "https://www.instagram.com/skmohammadali_?igsh=MTlpbzltcTU3eDNmag==",
      facebook: "https://www.facebook.com/share/17nMRusRwv/",
      twitter: "https://x.com/Skmohammadali_",
      telegram: "https://t.me/skmohammadali"
    }
};
