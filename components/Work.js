import React from 'react'
import styles from './Work.module.css'
import Image from 'next/image'
import image1 from '../images/work1.jpg'
import image2 from '../images/work2.jpg'
import image3 from '../images/work3.jpg'
import { gsap } from "gsap";
import { useRef, useLayoutEffect} from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
React.useLayoutEffect = React.useEffect

function Work() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);


  const el = useRef();
  const tl = useRef();
      
  useLayoutEffect(() => {   

    const q = gsap.utils.selector(el);

    
    tl.current = gsap.timeline({defaults: {duration: 3, ease: "power2.out", delay: .5} })
      .fromTo(q("#work-h2"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#work-h2',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#work-p"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#work-p',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#work-card1"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#work-card1',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#work-card2"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#work-card2',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#work-card3"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#work-card3',
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
        <div className={styles.Work} id="work" ref={el}>
        <div className={styles.Top}>
        <h2 id="work-h2">Projects</h2>
        <p id="work-p">Current group Co. LTD are specialist providers in ;
        General Supply i.e supply of building and non-building materials and 
        commodities and has been registered by GPSA to carry out Governmental
        institution supplies.</p>
        </div>
        <div className={styles.Bottom}>
        <div className={styles.Card} id="work-card1">
        <div className={styles.Image}>
        <Image src={image1} className={styles.Image__inner} layout='fill' objectFit='cover' alt=''></Image>
        </div>
        <div className={styles.Description}>
        <h3>Tanesco tanzania</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quibusdam.</p>
        </div>
        </div>
        <div className={styles.Card} id="work-card2">
        <div className={styles.Image}>
        <Image src={image2} className={styles.Image__inner} layout='fill' objectFit='cover' alt=''></Image>
        </div>
        <div className={styles.Description}>
        <h3>Jembe plaza</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quibusdam.</p>
        </div>
        </div>
        <div className={styles.Card} id="work-card3">
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
