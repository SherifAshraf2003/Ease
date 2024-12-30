"use client";
import { motion } from "framer-motion";
import { HeroParallax } from "../ui/hero-parallax";
import { products } from "@/lib/staticData";

const Hero = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      }}
      className=" shadow-xl"
    >
      <HeroParallax
        products={products.map((product) => ({
          ...product,
          thumbnail: product.thumbnail.src,
        }))}
      />
    </motion.div>
  );
};

export default Hero;
