"use client";
import Image from "next/image";
import imageTop from "../../public/My_image.jpg";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="sobre"
      className="min-h-[60vh] flex items-center justify-center px-4 py-12 bg-gradient-to-b from-slate-800 to-slate-950 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:w-2xl w-xl w-full flex flex-col md:flex-row items-center gap-8"
      >
        <motion.div
          whileHover={{ rotate: 3, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-full h-96 rounded-full overflow-hidden border-4 border-slate-500 shadow-xl"
        >
          <Image
            src={imageTop}
            alt="Foto de Clauder Paz"
            className="w-full h-full md:object-cover"
            width={700}
            height={100}
          />
        </motion.div>

        <div className="text-center md:text-left space-y-4 pl-5">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold"
          >
            Sobre mim
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            Sou um desenvolvedor front-end apaixonado por criar interfaces
            modernas, funcionais e com ótima performance. Tenho experiência
            sólida com React.js e Next.js, e estou sempre buscando entregar
            aplicações escaláveis e bem estruturadas, tanto no front quanto no
            back-end. Atuo como freelancer autônomo e já desenvolvi soluções
            para diversos clientes, sempre focado em boas práticas,
            responsividade e usabilidade. No back-end, utilizo Node.js e estou
            me aprofundando em bancos de dados relacionais com MySQL e
            Sequelize.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-lg text-gray-400"
          >
            Recentemente também iniciei meus estudos em Python para expandir
            ainda mais meu leque de habilidades. Tecnologias que utilizo com
            frequência:
            <strong>
              React.js, Next.js e Zustand Tailwind CSS, ShadCN UI Node.js,
              MySQL, Prisma e Sequelize Clerk, Stripe, Axios React Query
            </strong>
            e integrações com APIs externas Atualmente estudando Python Tenho 1
            ano e 8 meses de experiência no desenvolvimento web e estou sempre
            pronto para encarar novos desafios e criar soluções que realmente
            façam a diferença. 🚀
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
