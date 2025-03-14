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
      <div className="w-4/5 m-auto grid md:grid-cols-4 gap-6 px-4" id="contact">
        <div>
          <h2 className="text-xl font-bold mb-2">About Us</h2>
          <p className="text-gray-400 ">Somos especialistas em tecnologia, automatizando processos com RPA, IA e sistemas para eficiência, inovação e crescimento.</p>
        </div>
        <div>
          <h2 className="font-bold mb-2">Customer Service</h2>
          <ul>
            <li>
              <a href="#footer" className="text-gray-400 hover:text-slate-700">Contact Us</a>
            </li>
            <li>
              <a href="#faq" className="text-gray-400 hover:text-slate-700">FAQs</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-2">Follow Us</h2>
          <ul>
            <li>
              <a href="#" className="text-gray-400 hover:text-slate-700">Instagram</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-slate-700">Linkedin</a>
            </li>
            <li>
              <a href="https://wa.me/yourwhatsappnumber" className="text-gray-400 hover:text-slate-700">WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Ionstech. All rights reserved</p>
      </div>
    </motion.footer>
  );
}
export default Footer;