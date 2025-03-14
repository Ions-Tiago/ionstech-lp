import { motion } from "framer-motion";
import logodark from "../assets/logo-dark.png"
import logowhite from "../assets/logowhite.png"
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkMode(darkModeMediaQuery.matches);

      const handleChange = (e) => {
        setIsDarkMode(e.matches);
      };

      darkModeMediaQuery.addEventListener("change", handleChange);

      return () => {
        darkModeMediaQuery.removeEventListener("change", handleChange);
      };
    }, []);

    return (
      <div className="w-4/5 m-auto flex justify-between items-center py-5">
        <img
          src={isDarkMode ? logowhite : logodark}
          alt="logo"
          className="w-36"
        />
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, staggerChildren: 0.1 }}
          className="hidden md:flex items-center space-x-5"
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
            className="px-5 py-2 border border-black font-semibold rounded-full"
          >
            <a href="#contact">Contato</a>
          </motion.button>
        </motion.ul>
      </div>
    );
  };

export default Navbar;