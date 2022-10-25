import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import image1 from '../images/logocg4.svg'
import Link from 'next/link'
import { gsap } from "gsap";
import { useRef, useLayoutEffect} from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
React.useLayoutEffect = React.useEffect

function Footer() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);


  const el = useRef();
  const tl = useRef();
      
  useLayoutEffect(() => {   

    const q = gsap.utils.selector(el);

    
    tl.current = gsap.timeline({defaults: {duration: 3, ease: "power2.out", delay: .5} })
    .fromTo(q("#footer-icon"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#footer-icon',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#footer-h2"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#footer-h2',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#footer-h3-one"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#footer-h3-one',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#footer-p-one"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#footer-p-one',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#footer-p-two"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#footer-p-two',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#footer-h3-two"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#footer-h3-two',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#footer-p-three"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#footer-p-three',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#footer-h4-one"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#footer-h4-one',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#footer-h4-two"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#footer-h4-two',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#footer-h4-three"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#footer-h4-three',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      });
}, []);
    return (
        <div className={styles.Footer} id="footer" ref={el}>
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
