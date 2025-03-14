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
          <h1 className="text-4xl md:text-6xl font-bold">Adoção de Tecnologia: RPA</h1>
          <p className="md:text-4xl font-bold">
            {""}
            Em um cenário de transformação digital acelerada, a adoção de tecnologias como a Automação Robótica de Processos (RPA) tem revolucionado a operação das organizações.
          </p>
          <div className="flex">
            <div className="space-y-5">
              <div className="flex items-center space-x-2">
                <span className="mr-3 p-3 rounded-full bg-slate-300 text-slate-800"><FaChartLine/></span>
            
              </div>
            </div>
            <p>
              {""}
              Estudos indicam que a implementação do RPA pode proporcionar economias de custos de até 50% em operações de back-office.
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
              Além disso, a automação de processos permite que colaboradores se dediquem a atividades mais estratégicas, reduzindo erros operacionais e retrabalhos, o que diminui significativamente o tempo de execução dessas atividades.
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
              Empresas líderes já utilizam a automação para redefinir padrões de excelência, integrando tecnologias avançadas para aprimorar seus processos e serviços.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Stats;