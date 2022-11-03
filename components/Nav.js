import React from 'react'
import styles from './Nav.module.css'
import Image from 'next/image'
import image1 from '../images/CURRENTGROUP3.png'
import Link from 'next/link'
import { gsap } from "gsap";
import { useLayoutEffect, useRef} from 'react'
React.useLayoutEffect = React.useEffect
import { HiMenuAlt3 } from 'react-icons/hi';
import { motion } from 'framer-motion'

function Nav() {
  //   const el = useRef();
  // const tl = useRef();

  //  useLayoutEffect(() => {    
  // const q = gsap.utils.selector(el);

    
  //   tl.current = gsap.timeline({defaults: { delay: 1, duration: 1, ease: "power2.out"} })
  //     .fromTo(q("#logo"), {
  //       opacity: 0,
  //       x: -20,
  //     }, {
  //       opacity: 1,
  //       x: 0,
  //       ease: "Expo.easeInOut"
  //     })
  //     .fromTo(q("#menu"), {
  //       opacity: 0,
  //       x: 20,
  //     }, {
  //       opacity: 1,
  //       x: 0,
  //       ease: "Expo.easeInOut"
  //     }, 0.2)
  //     .fromTo(q("#home"), {
  //       opacity: 0,
  //       x: -20,
  //     }, {
  //       opacity: 1,
  //       x: 0,
  //       ease: "Power3.easeInOut",
  //     }, 0.2)
  //     .fromTo(q("#about"), {
  //       opacity: 0,
  //       x: -20,
  //     }, {
  //       opacity: 1,
  //       x: 0,
  //       ease: "Power3.easeInOut",
  //     }, 0.3)
  //     .fromTo(q("#services"), {
  //       opacity: 0,
  //       x: -20,
  //     }, {
  //       opacity: 1,
  //       x: 0,
  //       ease: "Power3.easeInOut",
  //     }, 0.4)
  //     .fromTo(q("#contact"), {
  //       opacity: 0,
  //       x: -20,
  //     }, {
  //       opacity: 1,
  //       x: 0,
  //       ease: "Power3.easeInOut",
  //     }, 0.5);

  // }, []);
    return (
        <div className={styles.Nav}>
        <div className={styles.Left}>
        <motion.div className={styles.Logo}
        >
        <motion.div className={styles.Icon}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}>
         <Image src={image1} layout='fill' objectFit='cover' alt=''></Image>
        </motion.div>
        </motion.div>
        </div>
        <div className={styles.Right}>
        <ul className={styles.Links}>
        <motion.li id="home"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: .2, duration: 1, ease: "easeInOut" }}
        ><Link href="#hero">Home</Link></motion.li>
        <motion.li id="about"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: .3, duration: 1, ease: "easeInOut" }}
        ><Link href="#about">About</Link></motion.li>
        <motion.li id="services"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: .4, duration: 1, ease: "easeInOut" }}
        ><Link href="#services">Services</Link></motion.li>
        <motion.li id="contact"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: .5, duration: 1, ease: "easeInOut" }}
        ><Link href="#footer">Contact</Link></motion.li>
        </ul>
        <motion.div className={styles.Menu__icon} id="menu"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: .2, duration: 1, ease: "easeInOut" }}>
        <HiMenuAlt3 size={35} />
        </motion.div>
        </div>
        </div>
    )
}

export default Nav
