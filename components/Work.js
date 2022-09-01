import React from 'react'
import styles from './Work.module.css'
import Image from 'next/image'
import image1 from '../images/work1.jpg'
import image2 from '../images/work2.jpg'
import image3 from '../images/work3.jpg'


function Work() {
    return (
        <div className={styles.Work}>
        <div className={styles.Top}>
        <h2>Projects we have worked on</h2>
        <p>Current group Co. LTD are specialist providers in ;
        General Supply i.e supply of building and non-building materials and 
        commodities and has been registered by GPSA to carry out Governmental
        institution supplies.</p>
        </div>
        <div className={styles.Bottom}>
        <div className={styles.Card}>
        <div className={styles.Image}>
        <Image src={image1} className={styles.Image__inner} layout='fill' objectFit='cover' alt=''></Image>
        </div>
        <div className={styles.Description}>
        <h3>Tanesco tanzania</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quibusdam.</p>
        </div>
        </div>
        <div className={styles.Card}>
        <div className={styles.Image}>
        <Image src={image2} className={styles.Image__inner} layout='fill' objectFit='cover' alt=''></Image>
        </div>
        <div className={styles.Description}>
        <h3>Jembe plaza</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quibusdam.</p>
        </div>
        </div>
        <div className={styles.Card}>
        <div className={styles.Image}>
        <Image src={image3} className={styles.Image__inner} layout='fill' objectFit='cover' alt=''></Image>
        </div>
        <div className={styles.Description}>
        <h3>Premier school</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quibusdam.</p>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Work
