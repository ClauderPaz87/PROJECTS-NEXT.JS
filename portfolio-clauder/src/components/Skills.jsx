"use client";
import { FaPython, FaRegKeyboard } from "react-icons/fa";
import { PiUserCircleGearDuotone } from "react-icons/pi";
import { BiAtom } from "react-icons/bi";
import {
  SiNextdotjs,
  SiReact,
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiStripe,
  SiPrisma,
} from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "React.js", icon: <SiReact /> },
    { name: "Zustand", icon: <BiAtom /> },
    { name: "React Hook Form", icon: <FaRegKeyboard /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "SQL/MySQL", icon: <SiMysql /> },
    { name: "Prisma", icon: <SiPrisma /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "Shadcn UI", icon: <BiAtom /> },
    { name: "Clerk", icon: <PiUserCircleGearDuotone /> },
    { name: "Stripe", icon: <SiStripe /> },
    { name: "Python", icon: <FaPython size={32} /> },
  ];
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return <section className="mb-20">
          <h2 className="text-2xl font-semibold text-center mb-8">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map(({ name, icon }) => (
              <motion.div
                key={name}
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-[#2c2c3e] rounded-lg p-4 flex flex-col items-center"
              >
                <div className="text-3xl text-cyan-400 mb-2">{icon}</div>
                <p className="text-sm font-medium text-center">{name}</p>
              </motion.div>
            ))}
          </div>
        </section>
};

export default Skills;
