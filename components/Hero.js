import React from 'react'
import styles from './Hero.module.css'
import Image from 'next/image'
import image1 from '../images/5.png'
import image2 from '../images/2.png'
import image3 from '../images/4.png'
import image4 from '../images/construction1.svg'
import { gsap } from "gsap";
import { useLayoutEffect, useRef} from 'react'
React.useLayoutEffect = React.useEffect
import { motion } from 'framer-motion'

function Hero() {
  //   const el = useRef();
  // const tl = useRef();

  //  useLayoutEffect(() => {    
  // const q = gsap.utils.selector(el);

    
  //   tl.current = gsap.timeline({defaults: { delay: 1, duration: 1, ease: "power2.out"} })
  //     .fromTo(q("#h1"), {
  //       opacity: 0,
  //       y: 20,
  //     }, {
  //       opacity: 1,
  //       y: 0,
  //       ease: "Expo.easeInOut"
  //     }, 0.3)
  //     .fromTo(q("#p1"), {
  //       opacity: 0,
  //       y: 20,
  //     }, {
  //       opacity: 1,
  //       y: 0,
  //       ease: "Power3.easeInOut",
  //     }, 0.4)
  //     .fromTo(q("#button"), {
  //       opacity: 0,
  //       y: 20,
  //     }, {
  //       opacity: 1,
  //       y: 0,
  //       ease: "Power3.easeInOut",
  //     }, 0.5)
  //     .fromTo(q("#icon1"), {
  //       opacity: 0,
  //       x: -20,
  //     }, {
  //       opacity: 1,
  //       x: 0,
  //       ease: "Power3.easeInOut",
  //     }, 0.6)
  //     .fromTo(q("#icon1-p"), {
  //       opacity: 0,
  //       x: -20,
  //     }, {
  //       opacity: 1,
  //       x: 0,
  //       ease: "Power3.easeInOut",
  //     }, 0.7)
  //     .fromTo(q("#icon2"), {
  //       opacity: 0,
  //       x: -20,
  //     }, {
  //       opacity: 1,
  //       x: 0,
  //       ease: "Expo.easeInOut"
  //     }, 0.8)
  //     .fromTo(q("#icon2-p"), {
  //       opacity: 0,
  //       x: -20,
  //     }, {
  //       opacity: 1,
  //       x: 0,
  //       ease: "Power3.easeInOut",
  //     }, 0.9)
  //     .fromTo(q("#icon3"), {
  //       opacity: 0,
  //       x: -20,
  //     }, {
  //       opacity: 1,
  //       x: 0,
  //       ease: "Power3.easeInOut",
  //     }, 1)
  //     .fromTo(q("#icon3-p"), {
  //       opacity: 0,
  //       x: -20,
  //     }, {
  //       opacity: 1,
  //       x: 0,
  //       ease: "Power3.easeInOut",
  //     }, 1.1)
  //     .fromTo(q("#svg1"), {
  //       opacity: 0,
  //       y: 20,
  //     }, {
  //       opacity: 1,
  //       y: 0,
  //       ease: "Power3.easeInOut",
  //     }, 0.5)
  //     .fromTo(q("#svg-image"), {
  //       opacity: 0,
  //       y: 20,
        
  //     }, {
  //       opacity: 1,
  //       y: 0,
  //       ease: "Power3.easeInOut",
  //     }, 0.7)
  //     .fromTo(q("#svg-wave"), {
  //       opacity: 0,
  //       y: 20,
  //       scale: 1.5
  //     }, {
  //       opacity: 1,
  //       y: 0,
  //       ease: "Power3.easeInOut",
  //       scale: 1,
  //       duration: 1.5
  //     }, 0.9);
  //   }, []);
    return (
        <motion.div className={styles.Hero} id="hero">
        <div className={styles.Left}>
        <motion.h1 id="h1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .3, duration: 1, ease: "easeInOut" }}
        >Current group <br /> company limited</motion.h1>
        <motion.p id="p1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .4, duration: 1, ease: "easeInOut"  }}
        >WeDu provides an effective and powerful <br /> way to manage your projects</motion.p>
         <motion.button id="button"
         initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .5, duration: 1, ease: "easeInOut"  }}
         >Contact Us</motion.button>
         <ul>
         <li>
         <motion.div className={styles.Icon}
         initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: .6, duration: 1, ease: "easeInOut"  }}>
         <Image src={image2} width={30} height={30} layout='fixed' objectFit='cover' alt=''></Image>
         </motion.div>
         <motion.p id="icon1-p"
         initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: .7, duration: 1, ease: "easeInOut"  }}
         >General <br /> Supply</motion.p>
         </li>
         <li>
         <motion.div className={styles.Icon}
         initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: .8, duration: 1, ease: "easeInOut"  }}>
         <Image src={image1} width={30} height={30} layout='fixed' objectFit='cover' alt=''></Image>
         </motion.div>
         <motion.p id="icon2-p"
         initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: .9, duration: 1, ease: "easeInOut"  }}
         >Design & <br /> Innovation</motion.p>
         </li>
         <li>
         <motion.div className={styles.Icon}
         initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1, ease: "easeInOut"  }}>
         <Image src={image3} width={30} height={30} layout='fixed' objectFit='cover' alt=''></Image>
         </motion.div>
         <motion.p id="icon3-p"
         initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 1, ease: "easeInOut"  }}
         >Building & <br /> Civil Works</motion.p>
         </li>
         </ul>
        </div>
        <div className={styles.Right}>
        <motion.svg id="svg1" className={styles.Blob} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .5, duration: 1, ease: "easeInOut"  }}>
        <path fill="#FFD7EF" d="M54.4,-43.8C64.9,-30.2,63.9,-7.9,59.7,14.8C55.4,37.5,47.9,60.7,32.6,68.4C17.2,76,-6,68.2,-26.5,57.4C-47.1,46.6,-65,32.8,-66.9,17.4C-68.8,1.9,-54.5,-15.1,-40.7,-29.5C-26.9,-43.8,-13.4,-55.5,4.3,-58.9C21.9,-62.3,43.9,-57.4,54.4,-43.8Z" transform="translate(100 100)" />
        </motion.svg>
        <motion.div className={styles.Image} id="svg-image"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .7, duration: 1, ease: "easeInOut"  }}>
        <Image src={image4} layout='fill' objectFit='cover' alt=''></Image>
        </motion.div>
        </div>
        <motion.svg id="svg-wave" className={styles.Wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
        initial={{ opacity: 0, scale: 1.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: .9, duration: 1.5, ease: "easeInOut"  }}>
        <path fill="#f3f4f5" fillOpacity="1" d="M0,256L60,240C120,224,240,192,360,149.3C480,107,600,53,720,69.3C840,85,960,171,1080,202.7C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></motion.svg>
        </motion.div>
    )
}

export default Hero
