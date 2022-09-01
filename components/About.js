import React from 'react'
import styles from './About.module.css'

function About() {
    return (
        <div className={styles.About} id="about">
        <div className={styles.Left}>
        <h2>about us</h2>
        </div>
        <div className={styles.Right}>
        <p>Being one of Tanzania's growing companies in the realm of Infrastructure, Current Group Company Limited has deep roots in General supply, Seasoned expertise in buildings design, Trusted relationships in Labour provision together with valuable Insight and experience in construction and engineering works.</p>
        </div>
        </div>
    )
}

export default About
