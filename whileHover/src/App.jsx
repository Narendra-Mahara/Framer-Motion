import { motion } from "motion/react";

const App = () => {
  return (
    <>
      <motion.button
        initial={{
          boxShadow: "2px 2px 2px  yellow, -2px -2px 2px green",
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: "2px 2px 20px yellow, -2px -2px 20px  green",
        }}
        transition={{
          duration: 0.3,
        }}
      >
        Hover
      </motion.button>
    </>
  );
};

export default App;
