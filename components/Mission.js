import React from 'react'
import styles from './Mission.module.css'
import Image from 'next/image'
import image1 from '../images/mission1.svg'
import image2 from '../images/mission5.png'
import image3 from '../images/mission6.svg'
import image4 from '../images/mission7.png'
import { gsap } from "gsap";
import { useRef, useLayoutEffect} from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
React.useLayoutEffect = React.useEffect

function Mission() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);


  const el = useRef();
  const tl = useRef();
      
  useLayoutEffect(() => {   

    const q = gsap.utils.selector(el);

    
    tl.current = gsap.timeline({defaults: {duration: 1, ease: "power2.out", delay: .5} })
      .fromTo(q("#icon1"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#icon1',
        scrub: 1,
        start: 'top 10%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#vision-h2"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#vision-h2',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#vision-p"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#vision-p',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#icon2"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#icon2',
        scrub: 1,
        start: 'top 10%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#mission-h2"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#mission-h2',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#mission-p"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#mission-p',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#icon3"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#mission-p',
        scrub: 1,
        start: 'top 60%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#strength-h2"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#strength-h2',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#strength-p"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#strength-p',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#icon4"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#mission-p',
        scrub: 1,
        start: 'top 60%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#quality-h2"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#quality-h2',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#quality-p"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#quality-p',
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
        <div className={styles.Mission} ref={el} id="mission">
        <div className={styles.Top}>
        <div className={styles.Left} id="left">
        <div className={styles.Icon} id="icon1">
         <Image src={image4} width={30} height={30} layout='fixed' objectFit='cover' alt=''></Image>
         </div>
         <h2 id="vision-h2">Our Vision</h2>
         <p id="vision-p">An integral part of the productivity and operations of each customers business, by providing technical solutions that optimize productivity.</p>
        </div>
        <div className={styles.Right}>
        <div className={styles.Icon} id="icon2">
         <Image src={image1} width={30} height={30} layout='fixed' objectFit='cover' alt=''></Image>
         </div>
         <h2 id="mission-h2">Our Mission</h2>
         <p id="mission-p">Our Mission is to employ highly experienced and knowledgeable staff capable of
        serving the needs of our customers and their industry requirements.</p>
        </div>
        </div>
        <div className={styles.Bottom}>
        <div className={styles.Left}>
        <div className={styles.Icon} id="icon3">
         <Image src={image2} width={30} height={30} layout='fixed' objectFit='cover' alt=''></Image>
         </div>
         <h2 id="strength-h2">Our Values(strength)</h2>
         <p id="strength-p">The Company has equipped with all types of resources. The Company is enriched with Professionals in its team in the field of Project Management, Engineering, Finance,</p>
        </div>
        <div className={styles.Right}>
        <div className={styles.Icon} id="icon4">
         <Image src={image3} width={30} height={30} layout='fixed' objectFit='cover' alt=''></Image>
         </div>
         <h2 id="quality-h2">Our Values(quality)</h2>
         <p id="quality-p">We aim to make sure that the expectations of the client, engineer, and all: ; stakeholders are fully complied with and that projects are delivered with a high standard of workmanship.</p>
        </div>
        </div>
        </div>
    )
}

export default Mission
