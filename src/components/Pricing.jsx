import React from "react";
import { motion } from "framer-motion";
import pric from "../assets/pric.png"

const Pricing = () => {
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
    <div className="py-20 w-4/5 m-auto flex flexcol md:flex-row justify-between items-center space-y-10 md:space-y-0 ">
      <div className="md:w-1/2 space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold">Maximize your Efficiency with EPIC Inc.</h1>
        <h2 className="text-3xl md:text-5xl font-bold">$29,99.99</h2>
        <p className="md:text-2xl leading-8"></p>
      </div>
      <div className="w-full md:w-1/3">
        <motion.img  src={pric} initial="hidden" whileInView="visible" variants={imageVariant} viewport={{amount: 0.5}} alt="" className="w-full" />
      </div>
    </div>
  );
}
export default Pricing;