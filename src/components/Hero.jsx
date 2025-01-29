import React from "react";
import {IoMdPlay} from 'react-icons/io'
import heroImg from '../assets/hero.png'

import { motion } from "framer-motion";

const Hero = () => {
  const textVariant = {
    hidden: { opacity: 0, x: -100},
    visible:{
      opacity:1,
      x:0,
      transition:{
        duration: 0.2,
        ease: "easeInOut",
      }
    }
  }
  const buttonVariant = {
    hidden: { opacity: 0},
    visible:{
      opacity:1,
      transition:{
        delay: 0.2,
        duration: 0.8,
      }
    }
  }
  const imageVariant = {
    hidden: { opacity: 0, x: 50},
    visible:{
      opacity:1,
      x:0,
      transition:{
        duration: 0.4,
        ease: "easeInOut",
      }
    }
  }
  return (
    <div className="w-4/5 py-20 m-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 ">
      <div className="md:w-1/2 space-y-6">
        <motion.p initial="hidden" whileInView="visible" viewport={{amount:0.5}} variants={textVariant}>____Conectando ideias, sintetizando soluções. </motion.p>
        <motion.h1 className="text-5xl md:text-7x1 font-bold">Ser inovador requer coragem</motion.h1>
        <motion.p initial="hidden" whileInView="visible" viewport={{amount:0.5}} variants={textVariant} className="md:text-lg">Empresas ousadas são as que transformam desafios em oportunidades e ideias em realidade. Ao abraçar a inovação, investir em tecnologia e ousar romper com padrões ultrapassados, essas organizações não apenas se diferenciam no mercado, mas também conquistam agilidade para se adaptar a mudanças e liderar em seus segmentos.</motion.p>
        <div className="flex space-x-5">
          <button className="px-5 py-3 rounded-full font-semibold bg-black text-white">Book</button>
          {/* <button className="flex space-x-4 items-center">
            <span className="w-8 h-8 flex justify-center items-center bg-black text-white rounded-full">
              {""}
              <IoMdPlay />
            </span>{""}
             <span>Watch Video</span>
          </button>*/}
        </div>
      </div>

      <div className="w-full md:w-1/4">
        <motion.img initial="hidden" whileInView="visible" viewport={{amount:0.5}} variants={imageVariant} src={heroImg} alt="" className="w-full"/>
      </div>
    </div>
  );
}
export default Hero;