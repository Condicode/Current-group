import React from 'react'
import styles from './Hero.module.css'
import Image from 'next/image'
import image1 from '../images/5.png'
import image2 from '../images/2.png'
import image3 from '../images/4.png'
import image4 from '../images/construction1.svg'

function Hero() {
    return (
        <div className={styles.Hero} id="hero">
        <div className={styles.Left}>
        <h1>Current group <br /> company limited</h1>
        <p>WeDu provides an effective and powerful <br /> way to manage your projects</p>
         <button>Contact Us</button>
         <ul>
         <li>
         <div className={styles.Icon}>
         <Image src={image2} width={30} height={30} layout='fixed' objectFit='cover' alt=''></Image>
         </div>
         <p>General <br /> Supply</p>
         </li>
         <li>
         <div className={styles.Icon}>
         <Image src={image1} width={30} height={30} layout='fixed' objectFit='cover' alt=''></Image>
         </div>
         <p>Design & <br /> Innovation</p>
         </li>
         <li>
         <div className={styles.Icon}>
         <Image src={image3} width={30} height={30} layout='fixed' objectFit='cover' alt=''></Image>
         </div>
         <p>Building & <br /> Civil Works</p>
         </li>
         </ul>
        </div>
        <div className={styles.Right}>
        <svg className={styles.Blob} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFD7EF" d="M54.4,-43.8C64.9,-30.2,63.9,-7.9,59.7,14.8C55.4,37.5,47.9,60.7,32.6,68.4C17.2,76,-6,68.2,-26.5,57.4C-47.1,46.6,-65,32.8,-66.9,17.4C-68.8,1.9,-54.5,-15.1,-40.7,-29.5C-26.9,-43.8,-13.4,-55.5,4.3,-58.9C21.9,-62.3,43.9,-57.4,54.4,-43.8Z" transform="translate(100 100)" />
        </svg>
        <div className={styles.Image}>
        <Image src={image4} layout='fill' objectFit='cover' alt=''></Image>
        </div>
        </div>
        <svg className={styles.Wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="1" d="M0,256L60,240C120,224,240,192,360,149.3C480,107,600,53,720,69.3C840,85,960,171,1080,202.7C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
    )
}

export default Hero
