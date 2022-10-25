import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import image1 from '../images/logocg4.svg'
import Link from 'next/link'

function Footer() {
    return (
        <div className={styles.Footer} id="footer">
        <div className={styles.Top}>
        <div className={styles.Logo}>
        <div className={styles.Icon} id="footer-icon">
         <Image src={image1} width={55} height={55} layout='fixed' objectFit='cover' alt=''></Image>
        </div>
        <h2 id="footer-h2">Current Group</h2>
        </div>
        </div>
        <div className={styles.Bottom}>
        <div className={styles.Contact}>
        <h3 id="footer-h3-one">contact</h3>
        <p id="footer-p-one">Plot No.75-78 Block, No 45B <br /> Makumbusho-Kijitonyama <br /> Dar es salaam, Tanzania</p>
        <p id="footer-p-two">General Inquiries: <br /> currentgroup2015@gmail.com <br /> +255 744 348 760</p>
        </div>
        <div className={styles.Social}>
        <h3 id="footer-h3-two">follow:</h3>
        <p id="footer-p-three">Follow our official accounts on social media <br /> to interact with us and stay updated</p>
        <h4 id="footer-h4-one">Twitter</h4>
        <h4 id="footer-h4-two">LinkedIn</h4>
        <h4 id="footer-h4-three">Instagram</h4>
        </div>
        <div className={styles.Design}>
        <h3 id="footer-h3-three">website by:</h3>
        <Link href=""><h4  id="footer-h4-four">condicode.com</h4></Link>
        </div>
        </div>
        <div className={styles.Copyright}>
        <p id="footer-copyright">All rights reserved &copy; 2022 current group limited</p>
        </div>
        </div>
    )
}

export default Footer
