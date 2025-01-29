import React from "react";
import stats from "../assets/stats.png";
import { FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const Stats = () => {
  const imageVariant = {
    hidden: { opacity: 0, x: -80},
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: "easeInOut"
      },
    },
  }
  return (
    <div className="py-20 bg-white/50 ">
      <div className="w-4/5 m-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        <div className="w-full md:w-1/3">
          <motion.img src={stats} initial="hidden" whileInView="visible" variants={imageVariant} viewport={{amount: 0.5}} alt="" className="w-full "/>
        </div>
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold">Mais visibilidade</h1>
          <p className="md:text-4xl font-bold">
            {""}
            Empresas que migram para o ambiente digital com um site profissional e otimizado podem aumentar sua eficiência operacional em até 40% (Fonte: McKinsey). Estudos mostram que:
          </p>
          <div className="flex">
            <div className="space-y-5">
              <div className="flex items-center space-x-2">
                <span className="mr-3 p-3 rounded-full bg-slate-300 text-slate-800"><FaChartLine/></span>
            
              </div>
            </div>
            <p>
              {""}
              74% dos consumidores priorizam marcas com sites intuitivos e rápidos, elevando as taxas de conversão em até 200% (Google Research).
            </p>
          </div>
          <div className="flex">
            <div className="space-y-5">
              <div className="flex items-center space-x-2">
                <span className="mr-3 p-3 rounded-full bg-slate-300 text-slate-800"><FaChartLine/></span>
                
              </div>
            </div>
            <p>
              {""}
              Negócios com landing pages bem estruturadas e SEO avançado geram 50% mais leads qualificados (HubSpot), enquanto a experiência mobile otimizada aumenta vendas em 55% (Statista).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Stats;