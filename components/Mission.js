import React from 'react'
import styles from './Mission.module.css'
import Image from 'next/image'
import image1 from '../images/mission1.svg'
import image2 from '../images/mission5.png'
import image3 from '../images/mission6.svg'
import image4 from '../images/mission7.png'

function Mission() {
    return (
        <div className={styles.Mission}>
        <div className={styles.Top}>
        <div className={styles.Left}>
        <div className={styles.Icon}>
         <Image src={image4} width={30} height={30} layout='fixed' objectFit='cover' alt=''></Image>
         </div>
         <h2>Our Vision</h2>
         <p>An integral part of the productivity and operations of each customers business, by providing technical solutions that optimize productivity.</p>
        </div>
        <div className={styles.Right}>
        <div className={styles.Icon}>
         <Image src={image1} width={30} height={30} layout='fixed' objectFit='cover' alt=''></Image>
         </div>
         <h2>Our Mission</h2>
         <p>Our Mission is to employ highly experienced and knowledgeable staff capable of
        serving the needs of our customers and their industry requirements.</p>
        </div>
        </div>
        <div className={styles.Bottom}>
        <div className={styles.Left}>
        <div className={styles.Icon}>
         <Image src={image2} width={30} height={30} layout='fixed' objectFit='cover' alt=''></Image>
         </div>
         <h2>Our Values(strength)</h2>
         <p>The Company has equipped with all types of resources. The Company is enriched with Professionals in its team in the field of Project Management, Engineering, Finance,</p>
        </div>
        <div className={styles.Right}>
        <div className={styles.Icon}>
         <Image src={image3} width={30} height={30} layout='fixed' objectFit='cover' alt=''></Image>
         </div>
         <h2>Our Values(quality)</h2>
         <p>We aim to make sure that the expectations of the client, engineer, and all: ; stakeholders are fully complied with and that projects are delivered with a high standard of workmanship.</p>
        </div>
        </div>
        </div>
    )
}

export default Mission
