'use client'
import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import mongo from '@/images/mongo-svgrepo-com.svg'
import express from '@/images/express-svgrepo-com.svg'
import react from '@/images/react-svgrepo-com.svg'
import node from '@/images/node-svgrepo-com.svg'
import JS from '@/images/js-svgrepo-com.svg'
import Html from '@/images/html-5-svgrepo-com.svg'
import Css from '@/images/css-3-svgrepo-com.svg'
import bootsrap from '@/images/bootstrap-svgrepo-com.svg'
import firebase from '@/images/firebase-1-logo-svgrepo-com.svg'
import Aws from '@/images/aws-svgrepo-com.svg'
import Digital from '@/images/digitalocean-svgrepo-com.svg'
import Git from '@/images/github-142-svgrepo-com.svg'
import next from '@/images/next-js-svgrepo-com.svg'
import framer from '@/images/framer-motion.svg'
import gsapsvg from '@/images/gsap-greensock.svg'
import tailwind from '@/images/tailwind-svgrepo-com.svg'
import typescript from '@/images/typescript-svgrepo-com.svg'
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);
const Ido = () => {
  const idoRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      idoRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5 }
    );
    const elements = document.querySelectorAll('.animate-fade-in');
    const elementsLast = document.querySelectorAll('.animate-fade-in-last');

    elements.forEach((element: Element) => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      });
    });
    elementsLast.forEach((element: Element) => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill(true);
      });
    };
  }, []);
  const brandImages = [mongo, express, react, next, tailwind, Css, node, JS,typescript, Html, bootsrap,gsapsvg,firebase, Aws, Digital, Git,framer];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
  <> 
  <div className="mb-8 md:mb-0 mt-4 md:mt-0 md:mr-4 overflow-hidden">
  <Slider {...settings}>
     {brandImages.map((image,k) => (
      <div key={k} className='p-4 md:p-8'>
         <Image
         height={200}
         width={200}
        src={image.src}
        alt="Slider Image 1"
        className="h-auto rounded-lg opacity-65"
      />
        </div>
     ))}
  </Slider>
</div></>
  );
};

export default Ido;
