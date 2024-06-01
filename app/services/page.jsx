"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Comprehensive full-stack web development using cutting-edge technologies like ReactJS, NextJS, MongoDB, PostgreSQL, JavaScript, Solidity, Blockchain, and more.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Designing beautiful and modern minimalist UI/UX using Figma.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Creating modern logo designs in any format using Adobe Illustrator.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Improving your website to boost web traffic, visibility, and search rankings.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                    {service.num}
                  </div>
                  <Link href={service.href}>
                    <BsArrowDownRight />
                  </Link>
                </div>
                {/* heading */}
                <h2>{service.title}</h2>
                {/* description */}
                <p>{service.description}</p>
                {/* border */}
                <div className="border-b border-black/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
