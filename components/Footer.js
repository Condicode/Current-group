import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import image1 from '../images/logocg4.svg'
import Link from 'next/link'
import { motion } from 'framer-motion'

function Footer() {
    const currentTime = new Date()
    const year = currentTime.getFullYear()

    return (
        <div className={styles.Footer} id="footer">
        <div className={styles.Top}>
        <div className={styles.Logo}>
        <div className={styles.Icon} id="footer-icon">
         <Image src={image1} layout='fill' objectFit='cover' alt=''></Image>
        </div>
        <h2 id="footer-h2">Current Group</h2>
        </div>
        </div>
        <div className={styles.Bottom}>
        <div className={styles.Contact}>
        <h3 id="footer-h3-one">contact</h3>
        <p id="footer-p-one">Plot No.75-78 Block, No 45B <br /> Makumbusho-Kijitonyama <br /> Dar es salaam, Tanzania</p>
        <p id="footer-p-two">General Inquiries: <br /> currentgroup2015@gmail.com <br /> +255 744 348 760 <br /> +255 765 083 555</p>
        </div>
        <div className={styles.Social}>
        <h3 id="footer-h3-two">follow:</h3>
        <p id="footer-p-three">Follow our official accounts on social media <br /> to interact with us and stay updated</p>
        <motion.h4 id="footer-h4-one"
        whileHover={{ scale: 1.1, transition:{duration: .1}}}
        whileTap={{ scale: .9, transition:{duration: .1}}}>
        Twitter</motion.h4>
        <motion.h4 id="footer-h4-two"
        whileHover={{ scale: 1.1, transition:{duration: .1}}}
        whileTap={{ scale: .9, transition:{duration: .1}}}>
        LinkedIn</motion.h4>
        <motion.h4 id="footer-h4-three"
        whileHover={{ scale: 1.1, transition:{duration: .1}}}
        whileTap={{ scale: .9, transition:{duration: .1}}}>
        Instagram</motion.h4>
        </div>
        <div className={styles.Design}>
        <h3 id="footer-h3-three">website by:</h3>
        <Link href="https://www.condicode.com/" target="_blank" rel="noopener noreferrer">
        <motion.h4  id="footer-h4-four"
        whileHover={{ scale: 1.1, transition:{duration: .1}}}
        whileTap={{ scale: .9, transition:{duration: .1}}}>
        condicode digitals</motion.h4>
        </Link>
        </div>
        </div>
        <div className={styles.Copyright}>
        <p id="footer-copyright">All rights reserved &copy; {year} current group limited</p>
        </div>
        </div>
    )
}

export default Footer
