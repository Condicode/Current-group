import React from 'react'
import styles from './CTA.module.css'
import Image from 'next/image'
import image1 from '../images/construction4.svg'
import { gsap } from "gsap";
import { useRef, useLayoutEffect} from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
React.useLayoutEffect = React.useEffect

function CTA() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);


  const el = useRef();
  const tl = useRef();
      
  useLayoutEffect(() => {   

    const q = gsap.utils.selector(el);

    
    tl.current = gsap.timeline({defaults: {duration: 3, ease: "power2.out", delay: .5} })
      .fromTo(q("#cta-h1"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#cta-h1',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#cta-button"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#cta-button',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#cta-image"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#cta-image',
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
        <div className={styles.CTA} id="cta" ref={el}>
        <h1 id="cta-h1">We are fully commited and dedicated to <br /> exceeding the standard for quality</h1>
         <button id="cta-button">Contact Us</button>
         <div className={styles.Image} id="cta-image">
        <Image src={image1} layout='fill' objectFit='cover' alt=''></Image>
        </div>
        </div>
    )
}

export default CTA
