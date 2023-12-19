import React from "react";

import Tilt from "react-parallax-tilt";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { mainTechnologies, otherTechnologies } from "../constants";

import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";


const OtherTechnologyCard = ({ name, icon, index }) => (
  <Tilt className="w-full h-[15dvh]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.2, 0.5)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card h-[100%]"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-5 h-[100%] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain flex-1"
        />

        <h3 className="text-white text-[17px] font-bold text-center flex-1 mt-2">
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies</p>
        <h2 className={styles.sectionHeadText}>My tech stack</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-y-10">
        {mainTechnologies.map((technology) => (
          <div className="w-full h-32" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <h3 className="text-center font-bold">{technology.name}</h3>
          </div>
        ))}
      </div>

      <motion.div variants={textVariant()} className="mt-10 mb-5">
        <h2 className={styles.sectionHeadText}>Other Technologies</h2>
      </motion.div>

      <div className="grid grid-cols-3 lg:grid-cols-7 md:grid-cols-4 md:gap-5 gap-2">
          {otherTechnologies.map(({name, icon}, index) => (
            <OtherTechnologyCard key={index} name={name} icon={icon} index={index} />
          ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
