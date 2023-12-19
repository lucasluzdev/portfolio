import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import ProfileImage from "../assets/me/profile.png";

const ServiceCard = ({ index, title, icon, description }) => (
  <Tilt className="w-full h-[35dvh]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
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

        <h3 className="text-white text-[20px] font-bold text-center flex-1">
          {title}
        </h3>
        <p className="flex-1">{description}</p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={textVariant()}
        className="grid md:grid-rows-1 md:grid-cols-12 grid-rows-2 grid-cols-1 md:gap-5 items-center mb-10"
      >
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary md:col-span-9"
        >
          <p className="md:text-[24px] text-[18px] leading-[30px] mb-2">
            Fullstack Software Engineer, Teacher and Speaker with 6 years of
            experience developing small and large scale desktop, web, mobile and
            DevOps projects. A engineer passionate about technology, new
            challenges, teaching and learning!
          </p>
          <p className="md:text-[24px] text-[18px] leading-[30px]">
            I’m seeking for opportunities to grow as a person and professional,
            improving my knowledge in leadership and technical fields, to be the
            next reference in the software development community, academic and
            scientific fields!
          </p>
        </motion.div>

        <figure className="h-[256px] w-[256px] md:col-span-3 mx-auto">
          <img
            src={ProfileImage}
            alt="Profile image"
            className="h-[100%] w-[100%]"
          />
        </figure>
      </motion.div>

      <div className="mt-5 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
