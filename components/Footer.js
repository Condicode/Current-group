import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import image1 from '../images/home.svg'
import Link from 'next/link'

function Footer() {
    return (
        <div className={styles.Footer} id="footer">
        <div className={styles.Top}>
        <div className={styles.Logo}>
        <div className={styles.Icon}>
         <Image src={image1} width={35} height={35} layout='fixed' objectFit='cover' alt=''></Image>
        </div>
        <h2>Current</h2>
        <p></p>
        </div>
        </div>
        <div className={styles.Bottom}>
        <div className={styles.Contact}>
        <h3>contact</h3>
        <p>Plot No.75-78 Block, No 45B <br /> Makumbusho-Kijitonyama <br /> Dar es salaam, Tanzania</p>
        <p>General Inquiries: <br /> currentgroup2015@gmail.com <br /> +255 744 348 760</p>
        </div>
        <div className={styles.Social}>
        <h3>follow:</h3>
        <p>Follow our official accounts on social media <br /> to interact with us and stay updated</p>
        <h4>Twitter</h4>
        <h4>LinkedIn</h4>
        <h4>Instagram</h4>
        </div>
        <div className={styles.Design}>
        <h3>website by:</h3>
        <Link href=""><h4>condicode.com</h4></Link>
        </div>
        </div>
        <div className={styles.Copyright}>
        <p>All rights reserved &copy; 2022 current group limited</p>
        </div>
        </div>
    )
}

export default Footer
