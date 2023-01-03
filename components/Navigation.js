import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import styles from './Navigation.module.css'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variants3 = {
  open: {
    display: 'flex',
    transition: { duration: .1, },
  },
  closed: {
    display: 'none',
    transition: { duration: .1  },
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


export const Navigation = ({ toggle, width }) => {

  return (
  <motion.div className={styles.Nav} variants={variants3}>
        <motion.ul variants={variants}>
        <motion.li
          onClick={toggle}
          variants={variants2}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
        <Link href="/">
         <a href="">Home</a>
         </Link>
        </motion.li>
        <motion.li
          onClick={toggle}
          variants={variants2}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
         <a href="#about">About</a>
        </motion.li>
        <motion.li
          onClick={toggle}
          variants={variants2}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
         <a href="#work">Projects</a>
        </motion.li>
        <motion.li
          onClick={toggle}
          variants={variants2}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
         <a href="#footer">Contact</a>
        </motion.li>
        </motion.ul>
          <motion.div variants={variants} className={styles.Social}>
          <motion.hr variants={variants2} />
          <motion.div className={styles.navigation__icons} variants={variants}>
        <motion.a
        variants={variants2}
          onClick={toggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
        <FaTwitter size="22px" />
        </motion.a>
        <motion.a
        variants={variants2}
          onClick={toggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
        <FaFacebook size="22px" />
        </motion.a>
        <motion.a
        variants={variants2}
          onClick={toggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
        <FaInstagram size="22px" />
        </motion.a>
          </motion.div>
        </motion.div>
  </motion.div>
  );
};
