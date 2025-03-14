import React from "react";
import { SiDatabricks, SiGoogleassistant } from "react-icons/si";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg"

const Insights = () => {
  const insightsData = [
    {
    title: "Propósito",
    date: "",
    icon: SiGoogleassistant,
    description: "Capacitar nossos clientes para evoluírem por meio da tecnologia. Nosso foco é oferecer soluções que modernizam operações, ampliam possibilidades e criam vantagens competitivas. Acreditamos que a inovação não é um destino, mas um caminho contínuo de aprimoramento, onde cada avanço representa um novo horizonte de oportunidades."
  },
  {
    title: "Planos e negócios",
    date: "",
    icon: SiDatabricks,
    description: "Cada empresa tem um caminho único para o sucesso, e a tecnologia pode torná-lo mais estratégico e eficiente. Criamos soluções que otimizam operações, ampliam possibilidades e fortalecem a tomada de decisão. Com inovação e inteligência, ajudamos negócios a crescer de forma estruturada e preparada para o futuro."
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
    <div className=" w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between space-y-10 md:space-y-0" id="insights">
      <div className="md:w-1/3 space-y-4">
        <motion.h2 initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}} className="text-2xl font-bold">Tecnologia como agente de transformação</motion.h2>
        <motion.p initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}}>Acreditamos que a tecnologia tem o poder de mudar o mundo, transformar pessoas e impulsionar melhorias significativas. Mais do que desenvolver soluções, somos agentes da mudança, moldando o futuro com inovação. Nosso propósito é criar impacto real, tornando processos mais ágeis, acessíveis e eficientes para empresas e indivíduos.</motion.p>
        <div className="flex items-center space-x-2 ">
          <img src={logo} alt="" className="w-12 h-12 rounded-full border-4 object-cover"/>
          <div className="">
            <h1 className="font-bold text-lg">Equipe</h1>
            <p className="text-sm text-gray-400">Ionstech</p>
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