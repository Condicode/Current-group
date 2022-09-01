import React from 'react'
import styles from './Nav.module.css'
import Image from 'next/image'
import image1 from '../images/home.svg'
import Link from 'next/link'

function Nav() {
    return (
        <div className={styles.Nav}>
        <div className={styles.Left}>
        <div className={styles.Logo}>
        <div className={styles.Icon}>
         <Image src={image1} width={20} height={20} layout='fixed' objectFit='cover' alt=''></Image>
        </div>
        <h2>Current</h2>
        </div>
        </div>
        <div className={styles.Right}>
        <ul className={styles.Links}>
        <li><Link href="#hero">Home</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#footer">Contact</Link></li>
        </ul>
        </div>
        </div>
    )
}

export default Nav
