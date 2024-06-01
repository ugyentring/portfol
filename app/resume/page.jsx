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

const Resume = () => {
  return <div>resumepage</div>;
};

export default Resume;
