import React from 'react'
import styles from './Nav.module.css'
import Image from 'next/image'
import image1 from '../images/CURRENTGROUP3.png'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion'
import Example from './Example'

function Nav() {
    return (
        <div className={styles.Nav} id="home">
        <div className={styles.Left}>
        <motion.div className={styles.Logo}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}>
         <Image src={image1} layout='fill' objectFit='cover' alt=''></Image>
        </motion.div>
        </div>
        <div className={styles.Center}>
        <ul className={styles.Links}>
        <motion.li
        whileHover={{ border: "1px solid #ffbf23", transition:{duration: .5}}}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition:{ delay: .2, duration: 1, ease: "easeInOut"} }}
        ><a href="#hero">Home</a></motion.li>
        <motion.li
        whileHover={{ border: "1px solid #ffbf23", transition:{duration: .5}}}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition:{ delay: .3, duration: 1, ease: "easeInOut"} }}
        ><a href="#about">About</a></motion.li>
        <motion.li
        whileHover={{ border: "1px solid #ffbf23", transition:{duration: .5}}}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition:{ delay: .4, duration: 1, ease: "easeInOut"} }}
        ><a href="#services">Services</a></motion.li>
        <motion.li
        whileHover={{ border: "1px solid #ffbf23", transition:{duration: .5}}}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition:{ delay: .5, duration: 1, ease: "easeInOut"} }}
        ><a href="#footer">Contact</a></motion.li>
        </ul>
        </div>
        <div className={styles.Right}>
        <motion.div className={styles.Icon}
        whileHover={{scale: 1.1, backgroundColor: "#ffbf23", transition:{duration: .1}}}
        whileTap={{ scale: .9, transition:{duration: .1}}}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition:{ delay: .6, duration: 1, ease: "easeInOut"} }}>
        <FaFacebook size="24px" />
        </motion.div>
        <motion.div className={styles.Icon}
        whileHover={{scale: 1.1, backgroundColor: "#ffbf23", transition:{duration: .1}}}
        whileTap={{ scale: .9, transition:{duration: .1}}}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition:{ delay: .7, duration: 1, ease: "easeInOut"} }}>
        <FaInstagram size="24px" />
        </motion.div>
        <motion.div className={styles.Icon}
        whileHover={{scale: 1.1, backgroundColor: "#ffbf23", transition:{duration: .1}}}
        whileTap={{ scale: .9, transition:{duration: .1}}}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition:{ delay: .8, duration: 1, ease: "easeInOut"} }}>
        <FaTwitter size="24px" />
        </motion.div>
        </div>
      <Example />
        </div>
    )
}

export default Nav
