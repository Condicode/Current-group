import React from 'react'
import styles from './CTA.module.css'
import Image from 'next/image'
import image1 from '../images/construction4.svg'

function CTA() {
    return (
        <div className={styles.CTA}>
        <h1>We are fully commited and dedicated to <br /> exceeding the standard for quality</h1>
         <button>Contact Us</button>
         <div className={styles.Image}>
        <Image src={image1} layout='fill' objectFit='cover' alt=''></Image>
        </div>
        </div>
    )
}

export default CTA
