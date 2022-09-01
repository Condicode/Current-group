import React from 'react'
import styles from './Services.module.css'
import Image from 'next/image'
import image1 from '../images/service1.svg'
import image2 from '../images/service2.svg'
import image3 from '../images/service3.svg'
import image4 from '../images/service5.svg'

function Services() {
    return (
        <div className={styles.Services} id="services">
        <div className={styles.Top}>
        <h2>Our services</h2>
        <p>Current group Co. LTD are specialist providers in ;
        General Supply i.e supply of building and non-building materials and 
        commodities and has been registered by GPSA to carry out Governmental
        institution supplies.</p>
        </div>
        <div className={styles.Bottom}>
        <div className={styles.One}>
        <div className={styles.Image}>
        <Image src={image1} className={styles.Image__inner} layout='fill' objectFit='cover' alt=''></Image>
        </div>
        <h3>General <br /> Supply</h3>
        <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
        <div className={styles.Two}>
        <div className={styles.Image}>
        <Image src={image2} className={styles.Image__inner} layout='fill' objectFit='cover' alt=''></Image>
        </div>
        <h3>Building & <br /> Civil works</h3>
        <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
        <div className={styles.Three}>
        <div className={styles.Image}>
        <Image src={image3} className={styles.Image__inner} layout='fill' objectFit='cover' alt=''></Image>
        </div>
        <h3>Designing & <br /> Innovation works</h3>
        <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
        <div className={styles.Four}>
        <div className={styles.Image}>
        <Image src={image4} className={styles.Image__inner} layout='fill' objectFit='cover' alt=''></Image>
        </div>
        <h3>Labour <br /> provision</h3>
        <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
        </div>
        </div>
    )
}

export default Services
