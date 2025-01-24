import React from "react";
import { SiDatabricks, SiGoogleassistant } from "react-icons/si";
import { motion } from "framer-motion";

const Insights = () => {
  const insightsData = [
    {
    title: "Productivity Enhancer",
    date: "12th July 2024",
    icon: SiGoogleassistant,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt ratione, at cupiditate optio voluptatum laudantium quasi neque dolor error! Praesentium deleniti quod ea eos dolorum adipisci libero quos perferendis!"
  },
  {
    title: "Remote Assistance",
    date: "30th Oct 2024",
    icon: SiDatabricks,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt ratione, at cupiditate optio voluptatum!"
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
        <motion.h2 initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}} className="text-2xl font-bold">Industry Insights</motion.h2>
        <motion.p initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima itaque reprehenderit velit, a ipsum molestias, quam optio eos labore nobis quia exercitationem reiciendis laboriosam cupiditate tempora dolores unde accusamus vitae.</motion.p>
        <div className="flex items-center space-x-2">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" className="w-12 h-12 rounded-full border-4"/>
          <div className="">
            <h1 className="font-bold text-lg">Michel Runner</h1>
            <p className="text-sm text-gray-400">CEO, Founder</p>
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
            <p className="text-lg leading-loose ">{insight.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default Insights;