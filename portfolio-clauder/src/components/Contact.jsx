"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const name = useRef("");
  const mensage = useRef("");
  const email = useRef("");
  const phone = "5581994528411";

  const handleSubmit = (e) => {
    e.preventDefault();
    const texto = `Olá me chamo ${name.current.value}, ${mensage.current.value} `;
    const msgFormat = encodeURIComponent(texto);

    const url = `https://wa.me/${phone}?text=${msgFormat}`;
    console.log(url);

    window.open(url, "_blank");
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      className="mb-16 px-4 rounded-xl bg-muted py-16 from-[#1f1c2c] via-[#928dab] to-[#1f1c2c]"
      id="contato"
    >
      <h2 className="text-2xl font-semibold text-center mb-6">Contato</h2>
      <motion.form
        onSubmit={handleSubmit}
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto flex flex-col gap-4 text-slate-900"
      >
        <input
          ref={name}
          type="text"
          placeholder="Seu nome"
          className="border border-input bg-background text-foreground px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:shadow-md hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          ref={email}
          type="email"
          placeholder="Seu email"
          className="border border-input bg-background text-foreground px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:shadow-md hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          ref={mensage}
          placeholder="Mensagem"
          rows={5}
          className="border border-input bg-background text-foreground px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:shadow-md hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg"
        >
          Enviar
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
