import React from 'react'
import styles from './About.module.css'
import { gsap } from "gsap";
import { useRef, useLayoutEffect} from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
React.useLayoutEffect = React.useEffect

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);

  const el = useRef();
  const tl = useRef();
      
  useLayoutEffect(() => {   
    const q = gsap.utils.selector(el);
    
    tl.current = gsap.timeline({defaults: {duration: 3, ease: "power2.out", delay: .5} })
      .fromTo(q("#h2"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#h2',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#p"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#h2',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      });
}, []);
    return (
        <div className={styles.About} id="about" ref={el}>
        <div className={styles.Left}>
        <h2 id="h2">about us</h2>
        </div>
        <div className={styles.Right}>
        <p id="p">Being one of Tanzania&apos;s growing companies in the realm of Infrastructure, Current Group Company Limited has deep roots in General supply, Seasoned expertise in buildings design, Trusted relationships in Labour provision together with valuable Insight and experience in construction and engineering works.</p>
        </div>
        </div>
    )
}

export default About
