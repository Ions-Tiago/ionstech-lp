import { motion } from "framer-motion";
import logowhite from "../assets/logowhite.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-3/5 m-2 flex justify-between items-center bg-black rounded-full text-white ">
        <img src={logowhite} alt="logo" className="w-36 ml-2" />
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, staggerChildren: 0.1 }}
          className="hidden md:flex items-center space-x-5 pr-4 text-sm"
        >
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#insights">Insight</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#faq">Perguntas frequentes</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#about">Sobre nós</a>
          </motion.li>
          <motion.button
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 0.5 }}
            className="px-5 py-2 m-2 border border-white font-semibold rounded-full"
          >
            <a href="#contact">Contato</a>
          </motion.button>
        </motion.ul>
      </div>
    </div>
  );
};

export default Navbar;