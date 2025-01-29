import React from "react";
import { motion } from "framer-motion";
const Footer = () => {
  const footerVariant = {
    hidden: {opacity: 0, y: 50},
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut"},
    }
  }
  return (
    <motion.footer initial="hidden" whileInView="visible" variants={{footerVariant}} viewport={{amount: 0.5}} className="py-20">
      <div className="w-4/5 m-auto grid md:grid-cols-4 gap-6 px-4">
        <div>
          <h2 className="text-xl font-bold mb-2">About Us</h2>
          <p className="text-gray-400 ">A empresa que vai tirar seu negócio do papel e traze-lo para o futuro.</p>

        </div>
        <div>
          <h2 className="font-bold mb-2">Customer Service</h2>
          <ul>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">FAQs</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Refunds</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-2">Follow Us</h2>
          <ul>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Linkedin</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">X</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>News Letter</h3>
          <p>Enter your email to get the latest new and updates.</p>
          <form action="" className="mt-4 ">
            <input type="email" placeholder="Your email address" className="p-2 w-full rounded-md text-gray-600 border"/>
            <button className="mt-2 w-full p-2 bg-stone-800 rounded-md font-semibold text-white">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Synth. All rights reserved</p>
      </div>
    </motion.footer>
  );
}
export default Footer;