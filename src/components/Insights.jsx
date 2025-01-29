import React from "react";
import { SiDatabricks, SiGoogleassistant } from "react-icons/si";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg"

const Insights = () => {
  const insightsData = [
    {
    title: "Produtividade acelerada",
    date: "12th July 2024",
    icon: SiGoogleassistant,
    description: "Na Synth Hub entendemos que tempo é um ativo estratégico. Por isso, combinamos metodologias ágeis, ferramentas de automação e uma equipe altamente alinhada para entregar projetos com velocidade sem abrir mão da qualidade. Utilizamos sprints planejados, integração contínua e testes rigorosos para antecipar prazos em até 30%, garantindo que sua empresa esteja no mercado antes da concorrência."
  },
  {
    title: "Assistência especializada",
    date: "30th Oct 2024",
    icon: SiDatabricks,
    description: "Desde o primeiro contato, nossa prioridade é entender suas dores, objetivos e visão de futuro para oferecer soluções que resolvem problemas reais. Com suporte técnico especializado 24/7, treinamentos personalizados e ajustes ágeis, garantimos que sua equipe domine cada ferramenta com confiança."
  }
  ]

  const cardVariant = {
    hidden:{opacity:0, scale:0.8},
    visible:(i)=>({
      opacity:1,
      scale:1,
      transition:{
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeInOut',
      }
    })
  }
  
  return (
    <div className="w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
      <div className="md:w-1/3 space-y-4">
        <motion.h2 initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}} className="text-2xl font-bold">Insight da equipe</motion.h2>
        <motion.p initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}}>Nosso combustível é a paixão por transformar ideias em soluções reais. A cada projeto, enxergamos não só um desafio técnico, mas uma chance de evoluir, aprender e inovar. Queremos ir além: criar sistemas que simplificam operações complexas, landing pages que conquistam clientes e tecnologias que deixam legados.</motion.p>
        <div className="flex items-center space-x-2 ">
          <img src={logo} alt="" className="w-12 h-12 rounded-full border-4"/>
          <div className="">
            <h1 className="font-bold text-lg">Equipe</h1>
            <p className="text-sm text-gray-400">Synth Hub</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0">
        {insightsData.map((insight, index)=>(
          <motion.div initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0, background: "#ffffff"}} transition={{duration: 0.5}} className="w-full p-4 border-4 border-black/5 rounded-xl space-y-4" key={index}>
            <div className="flex justify-between">
               <div className="space-y-2">
                  <button className="p-3 rounded-full bg-slate-500 text-slate-800">{insight.icon()}</button>
                  <h1 className="text-xl font-bold">{insight.title}</h1>
               </div>
              <p>{insight.date}</p>
            </div>
            <p className="text-base leading-loose ">{insight.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default Insights;