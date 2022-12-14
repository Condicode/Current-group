import React from 'react'
import styles from './Services.module.css'
import Image from 'next/image'
import image1 from '../images/service1.svg'
import image2 from '../images/service2.svg'
import image3 from '../images/service3.svg'
import image4 from '../images/service5.svg'
import { gsap } from "gsap";
import { useRef, useLayoutEffect} from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
React.useLayoutEffect = React.useEffect

function Services() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);


  const el = useRef();
  const tl = useRef();
      
  useLayoutEffect(() => {   

    const q = gsap.utils.selector(el);

    
    tl.current = gsap.timeline({defaults: {duration: 3, ease: "power2.out", delay: .5} })
      .fromTo(q("#services-h2"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#services-h2',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#services-p1"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#services-p1',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#services-image1"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#services-image1',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#h3-one"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#h3-one',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#services-p2"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#services-p2',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#services-image2"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#services-image2',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#h3-two"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#h3-two',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#services-p3"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#services-p3',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#services-image3"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#services-image3',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#h3-three"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#h3-three',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#services-p4"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#services-p4',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#services-image4"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#services-image4',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#h3-four"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#h3-four',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#services-p5"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#services-p5',
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

    const onEnter = ({ currentTarget }) => {
      gsap.to(currentTarget, { scale: 1.1, ease: "power2.out", delay: .1, duration: 1 });
    };
    const onLeave = ({ currentTarget }) => {
      gsap.to(currentTarget, { scale: 1, ease: "power2.out", delay: .1 });
    };
    return (
        <div className={styles.Services} id="services" ref={el}>
        <div className={styles.Top}>
        <h2 id="services-h2">Our services</h2>
        <p id="services-p1">Current group Co. LTD are specialist providers in ;
        General Supply i.e supply of building and non-building materials and 
        commodities and has been registered by GPSA to carry out Governmental
        institution supplies.</p>
        </div>
        <div className={styles.Bottom}>
        <div className={styles.Upper}>
        <div className={styles.One}>
        <div className={styles.Image} id="services-image1">
        <Image src={image1} className={styles.Image__inner} layout='fill' objectFit='cover' alt='' onMouseEnter={onEnter} onMouseLeave={onLeave}></Image>
        </div>
        <h3 id="h3-one">General <br /> Supply</h3>
        <p id="services-p2">We are equiped professionals at supplying general constraction needs in all stages of project development. We oofer generous prices contrast to the current market.</p>
        </div>
        <div className={styles.Two}>
        <div className={styles.Image} id="services-image2">
        <Image src={image2} className={styles.Image__inner} layout='fill' objectFit='cover' alt='' onMouseEnter={onEnter} onMouseLeave={onLeave}></Image>
        </div>
        <h3 id="h3-two">Building & <br /> Civil works</h3>
        <p id="services-p3">Current group has a refreshing reputation in the Tanzanian civil works industry. We are reliable and trusted to deliver higher quality than most companies our size.</p>
        </div>
        </div>
        <div className={styles.Lower}>
        <div className={styles.Three}>
        <div className={styles.Image} id="services-image3">
        <Image src={image3} className={styles.Image__inner} layout='fill' objectFit='cover' alt='' onMouseEnter={onEnter} onMouseLeave={onLeave}></Image>
        </div>
        <h3 id="h3-three">Designing & <br /> Innovation works</h3>
        <p id="services-p4">We create modern building designs coupled with practical architecture. We also do rennovations for existing projects, both commercial and resindential.</p>
        </div>
        <div className={styles.Four}>
        <div className={styles.Image} id="services-image4">
        <Image src={image4} className={styles.Image__inner} layout='fill' objectFit='cover' alt='' onMouseEnter={onEnter} onMouseLeave={onLeave}></Image>
        </div>
        <h3 id="h3-four">Labour <br /> provision</h3>
        <p id="services-p4">Current Group has a subsidiary company called Current Labourers which is focused on labour provision. We provide and manage workers from as little as 20 to as many as our client&apos;s needs.</p>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Services
