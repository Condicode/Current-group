import React from 'react'
import styles from './Gallerly.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import img1 from '../images/work1.jpg'
import img2 from '../images/work2.jpg'
import img3 from '../images/work3.jpg'
import img4 from '../images/work4.png'
import img5 from '../images/work5.jpg'
import img6 from '../images/work6.png'
import { gsap } from "gsap";
import { useRef, useLayoutEffect} from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
React.useLayoutEffect = React.useEffect

function Gallerly() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);


  const el = useRef();
  const tl = useRef();
      
  useLayoutEffect(() => {   

    const q = gsap.utils.selector(el);

    
    tl.current = gsap.timeline({defaults: {duration: 3, ease: "power2.out", delay: .5} })
      .fromTo(q("#gallerly-h2"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#gallerly-h2',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#gallerly-p"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#gallerly-p',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#carousel"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#carousel',
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
    <div className={styles.Gallery} id="gallerly" ref={el}>
    <div className={styles.Carousel__container} id="carousel">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} stopOnHover>
            <div className={styles.Work__image}>
            <Image src={img1} layout="fill" objectFit="cover" alt=""></Image>
            </div>
            <div className={styles.Work__image}>
            <Image src={img2} layout="fill" objectFit="cover" alt=""></Image>
            </div>
            <div className={styles.Work__image}>
            <Image src={img3} layout="fill" objectFit="cover" alt=""></Image>
            </div>
            <div className={styles.Work__image}>
            <Image src={img4} layout="fill" objectFit="cover" objectPosition="bottom" alt=""></Image>
            </div>
            <div className={styles.Work__image}>
            <Image src={img5} layout="fill" objectFit="cover" objectPosition="bottom" alt=""></Image>
            </div>
            <div className={styles.Work__image}>
            <Image src={img6} layout="fill" objectFit="cover" objectPosition="bottom" alt=""></Image>
            </div>
        </Carousel>
    </div>
    </div>
  )
}

export default Gallerly