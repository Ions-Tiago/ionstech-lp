import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testmtVariant = {
    hidden:{ opacity: 0, y: 50},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  }
  const testimonialsData =[
  {
  image: "https://randomuser.me/api/portraits/men/24.jpg",
  name: "John Doe",
  position: "CEO",
  feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
  image: "https://randomuser.me/api/portraits/women/45.jpg",
  name: "Jane Doe",
  position: "CTO",
  feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
  image: "https://randomuser.me/api/portraits/men/50.jpg",
  name: "John Smith",
  position: "CFO",
  feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }];
  return (
    <div className="py-10 bg-white/50">
      <div className="w-4/5 m-auto space-y-8">
        <motion.div className="space-y-5" initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
          <h1 className="text-center text-lg">____Client Reviews</h1>
          <h2 className="text-sm md:text-xl md:font-semibold text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolorem, esse totam cum ad autem quaerat commodi {""} <br /> facere labore vel mollitia vero quod deserunt ratione provident fuga doloribus consequatur reprehenderit!
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 py-10">
          {testimonialsData.map((testimonial, index) => (
            <motion.div key={index} initial="hidden" whileInView="visible" variants={testmtVariant} viewport={{amount: 0.5}} className="p-5 space-y-5 border border-black rounded-lg flex flex-col items-center">
              <div className="flex items-center space-x-2" >
                <img src={testimonial.image} alt="" className="w-16 h-16 rounded-full border-2"/>
                <div>
                  <h1 className="font-bold text-lg">{testimonial.name}</h1>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-center text-lg">{testimonial.feedback}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Testimonials;