"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiSolidity,
  SiBootstrap,
} from "react-icons/si";

//about myself
const about = {
  title: "About Me",
  description:
    "Hi, I'm Ugyen, a computer science student from Bhutan. I have a passion for programming and love creating innovative projects. I'm always excited to explore new technologies and discuss the latest trends in tech.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ugyen Tshering",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+975) 17964942",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Instagram",
      fieldValue: "ut_yuji",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bhutanese",
    },
    {
      fieldName: "Email",
      fieldValue: "dev.ugyen@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Hindi, Nepali, Dzongkha",
    },
  ],
};

//experience
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Huge love for programming and learn new technologies and mastering them. And I love crafting ideas in reality",
  items: [
    {
      company: "Royal University of Bhutan",
      position: "Student",
      duration: "2022-2026",
    },
    {
      company: "TashiCell",
      position: "Intern",
      duration: "Summer 2023",
    },
    {
      company: "Social Media Startup",
      position: "Freelance Web Developer",
      duration: "2023-2024",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "Spring 2024",
    },
  ],
};

//education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Always been a geek from my childhood. Loved exploring tech gadgets and learning about it",
  items: [
    {
      institution: "Gyalpozhing College of Information Technology",
      degree: "Computer Science",
      duration: "2022-2026",
    },
    {
      institution: "Pakshikha Central School",
      degree: "Science (PCM)",
      duration: "2020-2021",
    },
    {
      institution: "Kamji Central School",
      degree: "Information Technology",
      duration: "2016-2019",
    },
    {
      institution: "Kezari Primary School",
      degree: "Basic Education",
      duration: "2009-2015",
    },
  ],
};

//my skillset
const skills = {
  title: "My Skills",
  description: "I have pretty good knowledge in these technologies",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiSolidity />,
      name: "solidity",
    },
    {
      icon: <SiBootstrap />,
      name: "bootstrap",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
 

const Resume = () => {
  return <div>resumepage</div>;
};

export default Resume;
