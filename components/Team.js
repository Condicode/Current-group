import React from 'react'
import styles from './Team.module.css'
import Image from 'next/image'
import image1 from '../images/member1.jpg'
import image2 from '../images/member2.jpg'
import image3 from '../images/member3.jpg'

function Team() {
    return (
        <div className={styles.Team}>
        <div className={styles.Top}>
        <h2>Our Management</h2>
        <p>We are proud to have a competent team of Engineers with a combined work experience of more than 20 years, each one well versed in their area of expertise.</p>
        </div>
        <div className={styles.Bottom}>
        <div className={styles.Card}>
        <div className={styles.Image}>
        <Image src={image1} className={styles.Image__inner} layout='fill' objectFit='cover' alt=''></Image>
        </div>
        <div className={styles.Description}>
        <h3>JOHN PHILIPO</h3>
        <h5>Project Engineer</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quibusdam.</p>
        </div>
        </div>
        <div className={styles.Card}>
        <div className={styles.Image}>
        <Image src={image2} className={styles.Image__inner} layout='fill' objectFit='cover' alt=''></Image>
        </div>
        <div className={styles.Description}>
        <h3>EMMANUEL MORRIS</h3>
        <h5>Project Manager</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quibusdam.</p>
        </div>
        </div>
        <div className={styles.Card}>
        <div className={styles.Image}>
        <Image src={image3} className={styles.Image__inner} layout='fill' objectFit='cover' alt=''></Image>
        </div>
        <div className={styles.Description}>
        <h3>AUGUSTINE NDEGE</h3>
        <h5>Site Engineer</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quibusdam.</p>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Team
