import { motion } from "motion/react";

const App = () => {
  return (
    <>
      <motion.div
        className="box"
        animate={{
          x: 50,
          y: 50,
        }}
        transition={{
          duration: 0.3,
          ease: "easeIn",
          delay: 2,
        }}
      ></motion.div>
    </>
  );
};

export default App;
