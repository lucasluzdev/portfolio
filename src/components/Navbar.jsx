import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import ProfileImage from '../assets/me/profile.png';
import { githubMenu, linkedinMenu, leetcodeMenu, whatsappMenu, telegramMenu } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={ProfileImage} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Lucas Luz &nbsp;
            <span className='md:block hidden'> | Software Engineer</span>
          </p>
        </Link>

        <ul className='list-none hidden md:flex flex-row gap-5'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-[#FFd700]" : "text-secondary"
              } hover:text-[#915EFF] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li className="hover:bg-[#915EFF]"><a href="https://github.com/lucasluzdev"><img className="w-[100%] h-[30px]" src={githubMenu} alt="Github" /></a></li>
          <li className="hover:bg-[#915EFF]"><a href="https://linkedin.com/in/lucasluzdev"><img className="w-[100%] h-[30px]" src={linkedinMenu} alt="Github" /></a></li>
          <li className="hover:bg-[#915EFF]"><a href="https://leetcode.com/lucasluzdev"><img className="w-[100%] h-[30px]" src={leetcodeMenu} alt="Github" /></a></li>
          <li className="hover:bg-[#915EFF]"><a href="https://t.me/lucasluzdev"><img className="w-[100%] h-[30px]" src={telegramMenu} alt="Github" /></a></li>
          <li className="hover:bg-[#915EFF]"><a href="https://wa.me/5511910678032"><img className="w-[100%] h-[30px]" src={whatsappMenu} alt="Github" /></a></li>
        </ul>

        <div className='md:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
