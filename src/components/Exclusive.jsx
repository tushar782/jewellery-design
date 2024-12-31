import { motion } from "framer-motion";
import women from "../assets/woman.png";

const Exclusive = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col md:flex-row justify-center">
        {/* Left Section */}
        <motion.div
          className="w-full md:w-1/2 h-[400px] md:h-[600px] relative overflow-hidden bg-black shadow-lg"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16">
            <motion.h3
              className="text-4xl md:text-6xl font-bold mb-2 md:mb-4 text-white font-serif"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Exclusive
            </motion.h3>
            <motion.h3
              className="text-4xl md:text-6xl font-bold mb-2 md:mb-4 text-white font-serif"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Diamond
            </motion.h3>
            <motion.h3
              className="text-4xl md:text-6xl font-bold mb-4 md:mb-8 text-white font-serif"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Jewellery
            </motion.h3>
            <motion.button
              className="bg-black text-white px-6 md:px-8 py-3 md:py-4 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 text-lg md:text-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Explore Now
            </motion.button>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="w-full md:w-1/2 h-[400px] md:h-[600px] relative overflow-hidden md:rounded-l-none shadow-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${women})` }}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default Exclusive;
