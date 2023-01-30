import { motion } from "framer-motion";

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, y: -30 },
        hidden: { opacity: 0, y: 30 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInWhenVisible;
