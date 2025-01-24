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
          <h1 className="text-4xl md:text-6xl font-bold">Over 30,000</h1>
          <p className="md:text-4xl font-bold">
            {""}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, vitae dolorum tenetur id repellat voluptas voluptatem officiis asperiores ullam optio dolorem nisi deleniti eius sapiente eum magni quam possimus iste.
          </p>
          <div className="flex">
            <div className="space-y-5">
              <div className="flex items-center space-x-2">
                <span className="p-3 rounded-full bg-slate-300 text-slate-800"><FaChartLine/></span>
                <h1>Data validation</h1>
              </div>
            </div>
            <p>
              {""}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum accusantium harum omnis exercitationem consectetur ipsum commodi velit voluptatibus dignissimos quia, impedit nesciunt delectus et minus corrupti facilis voluptas. Omnis, asperiores.
            </p>
          </div>
          <div className="flex">
            <div className="space-y-5">
              <div className="flex items-center space-x-2">
                <span className="p-3 rounded-full bg-slate-300 text-slate-800"><FaChartLine/></span>
                <h1>Optimize Efficiency</h1>
              </div>
            </div>
            <p>
              {""}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloribus consequuntur excepturi placeat? Nesciunt sapiente laborum eligendi itaque illum illo placeat error? Cum maxime sapiente facere hic quaerat aliquam fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Stats;