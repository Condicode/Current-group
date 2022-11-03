import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MenuLink } from "./MenuLink";
import styles from './Navigation.module.css'


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variants2 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};


export const Navigation = () => {

  return (
<div className={styles.Nav}>
        <motion.ul variants={variants}>
        <MenuLink
            link="Menu"
            goBackIcon
            
            width="60%"
          />
          <MenuLink
            link="About"
            goBackIcon
            
            width="60%"
          />
          <MenuLink
            link="Projects"
            goBackIcon
            
            width="60%"
          />
          <MenuLink
            link="Contact"
            goBackIcon
            
            width="60%"
          />
        </motion.ul>

          <motion.ul variants={variants}>
          <motion.hr variants={variants2} />
          <motion.div className={styles.navigation__buttons} variants={variants2}>
          <MenuLink
            link="Twitter"
            goBackIcon
            
            width="60%"
          />
          <MenuLink
            link="Instagram"
            goBackIcon
            
            width="60%"
          />
          </motion.div>
        </motion.ul>
</div>
  );
};
