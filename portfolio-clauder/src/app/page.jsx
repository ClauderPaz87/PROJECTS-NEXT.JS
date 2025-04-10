"use client";
import { motion } from "framer-motion";

import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";

export default function Portfolio() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-4 py-10 mt-12">
      {/* Inicio */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeLeft}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold">Olá, sou Clauder Paz</h1>
        <p className="text-lg md:text-xl text-cyan-300 mt-4">
          Desenvolvedor Front-end apaixonado por tecnologia e boas práticas.
        </p>
      </motion.section>

      {/* Skills */}
      <section>
        <Skills/>
      </section>

      {/* Sobre mim */}
      <section>
        <AboutMe/>
      </section>

      {/* Projetos */}
      <section>
        <Projects/>
      </section>

      {/* Contato */}
      <section>
        <Contact/>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-zinc-400">
        &copy; {new Date().getFullYear()} Clauder Paz. Todos os direitos reservados.
      </footer>
    </main>
  );
}
