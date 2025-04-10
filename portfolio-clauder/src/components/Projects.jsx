"use client";
import twitter from "../../public/projeto_twitter.png";
import platform from "../../public/projeto_usuarios.png";
import weather from "../../public/projeto_weather.png";
import dashgo from "../../public/projeto_dashgo.png";
import dashboard from "../../public/projeto_dashboard.png";
import ecommerce from "../../public/projeto_ecommerce.png";
import streamer from "../../public/projeto_streamer.png";
import control from "../../public/projeto_control.png";
import delivery from "../../public/projeto_delivery.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


const Projects = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const projetos = [
    {
      title: "Clone do Twitter",
      desc: "Clone do twitter interativo e responsivo, com tweets gerados automaticamente.",
      link: "https://projeto-twitter-clone.vercel.app/",
      image: twitter,
    },
    {
      title: "Plataforma de usuários",
      desc: "Plataforma com autenticação, cadastro, formulário avançado e dados persistidos em banco de dados.",
      link: "https://projeto-plataformadeusuarios.vercel.app/",
      image: platform,
    },
    {
      title: "App de Tempo",
      desc: "Aplicativo de clima usando a API do OpenWeather. Interface limpa e responsiva.",
      link: "https://projeto-appweather.vercel.app/",
      image: weather,
    },
    {
      title: "App dashGo",
      desc: "Dashboard com formulários, validações e UI moderna, feito em Next.js.",
      link: "https://projeto-dashgo.vercel.app/CardDashboard",
      image: dashgo,
    },
    {
      title: "Dashboard",
      desc: "Interface moderna usando Shadcn UI e responsiva para análise de dados.",
      link: "https://projects-dashboard-beta.vercel.app/",
      image: dashboard,
    },
    {
      title: "E-commerce",
      desc: "E-commerce completo baseado no Mercado Livre, com Stripe e funcionalidades inteligentes.",
      link: "https://projeto-ecommerce-eight.vercel.app/",
      image: ecommerce,
    },
    {
      title: "Streamer",
      desc: "Projeto de streaming de filmes com consumo de API e UI dinâmica.",
      link: "https://projeto-streamer-5chw2qrru-clauder-pazs-projects.vercel.app/",
      image: streamer,
    },
    {
      title: "Controle Financeiro",
      desc: "Ferramenta simples e prática para controle de finanças pessoais.",
      link: "https://projeto-controlfinance.vercel.app/",
      image: control,
    },
    {
      title: "Delivery",
      desc: "Aplicativo de delivery fullstack com API própria e visual moderno.",
      link: "https://projeto-delivery-beige.vercel.app/",
      image: delivery,
    },
  ];
  return (
    <section className="mb-20 mt-14" id="projetos">
      <h2 className="text-2xl font-semibold text-center mb-10">Projetos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projetos.map(({ title, desc, link, image }) => (
          <motion.div
            key={title}
            whileHover={{ scale: 1.05 }}
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg bg-gray-800"
          >
            <Link href={link} target="_blank">
              <Image
                src={image}
                alt={title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-cyan-300">
                  {title}
                </h3>
                <p className="text-sm text-gray-300">{desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
