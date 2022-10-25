import React from 'react'
import styles from './Nav.module.css'
import Image from 'next/image'
import image1 from '../images/CURRENTGROUP3.png'
import Link from 'next/link'
import { gsap } from "gsap";
import { useLayoutEffect, useRef} from 'react'
React.useLayoutEffect = React.useEffect
import { HiMenuAlt3 } from 'react-icons/hi';

function Nav() {
    const el = useRef();
  const tl = useRef();

   useLayoutEffect(() => {    
  const q = gsap.utils.selector(el);

    
    tl.current = gsap.timeline({defaults: { delay: 1, duration: 1, ease: "power2.out"} })
      .fromTo(q("#logo"), {
        opacity: 0,
        x: -20,
      }, {
        opacity: 1,
        x: 0,
        ease: "Expo.easeInOut"
      })
      .fromTo(q("#home"), {
        opacity: 0,
        x: -20,
      }, {
        opacity: 1,
        x: 0,
        ease: "Power3.easeInOut",
      }, 0.2)
      .fromTo(q("#about"), {
        opacity: 0,
        x: -20,
      }, {
        opacity: 1,
        x: 0,
        ease: "Power3.easeInOut",
      }, 0.3)
      .fromTo(q("#services"), {
        opacity: 0,
        x: -20,
      }, {
        opacity: 1,
        x: 0,
        ease: "Power3.easeInOut",
      }, 0.4)
      .fromTo(q("#contact"), {
        opacity: 0,
        x: -20,
      }, {
        opacity: 1,
        x: 0,
        ease: "Power3.easeInOut",
      }, 0.5);

  }, []);
    return (
        <div className={styles.Nav} ref={el}>
        <div className={styles.Left}>
        <div className={styles.Logo} id="logo">
        <div className={styles.Icon}>
         <Image src={image1} layout='fill' objectFit='cover' alt=''></Image>
        </div>
        </div>
        </div>
        <div className={styles.Right}>
        <ul className={styles.Links}>
        <li id="home"><Link href="#hero">Home</Link></li>
        <li id="about"><Link href="#about">About</Link></li>
        <li id="services"><Link href="#services">Services</Link></li>
        <li id="contact"><Link href="#footer">Contact</Link></li>
        </ul>
        <div className={styles.Menu__icon}>
        <HiMenuAlt3 size={35} />
        </div>
        </div>
        </div>
    )
}

export default Nav
