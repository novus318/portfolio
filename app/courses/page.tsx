import Lectures from '@/components/Lectures';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { Metadata } from 'next';
import React from 'react';
import { FaHome, FaProjectDiagram, FaUser } from 'react-icons/fa';
import { SiHyperskill } from 'react-icons/si';

export const metadata: Metadata = {
  title: "Data Structures & Algorithms in Java",
  description: "This course is designed for beginners and focuses on the fundamental concepts of data structures and algorithms, which are crucial for solving complex problems in technical interviews. You'll learn how to implement and optimize algorithms using Java, preparing you to coding interviews with confidence.",
  keywords: 'Data Structures, Algorithms, Java, Coding Interview, Technical Interview, Algorithm Optimization, Beginner Java Course, Java Programming, Coding Skills, Problem Solving, DSA in Java',
  metadataBase: new URL('https://nizamudheen.com'),
  alternates: {
    canonical: '/courses',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: '/courses-opengraph-image.png',
    url: 'https://nizamudheen.com/courses',
  },
};

const Courses = () => {
  return (
    <div className="bg-black-100 flex items-center justify-center flex-col mx-auto sm:px-10 px-5 overflow-x-hidden">
 <div className="max-w-7xl w-full">
      <FloatingNav navItems={[
        {name:'Home',
          link:'/',
          icon: <FaHome/>
        },
        {name:'About',
        link:'#about',
        icon: <FaUser/>
      },
      {name:'Skills',
      link:'#skills',
      icon: <SiHyperskill/>
    },
    {name:'Projects',
    link:'#projects',
    icon: <FaProjectDiagram/>
  },
      ]}/>
      <div className='pt-36'>
      <h2 className="heading text-4xl font-semibold mb-4">What You Will Learn</h2>

<p className="text-xl text-white-200 mb-8">
  Data Structures & Algorithms in Java from Scratch to help you crack your dream companies.
</p>

<p className="text-lg text-white-200">
  This course is designed for beginners and focuses on the fundamental concepts of data structures and algorithms, 
  which are crucial for solving complex problems in technical interviews. You'll learn how to implement and optimize 
  algorithms using Java, preparing you to coding interviews with confidence.
</p>
      </div>
      <Lectures/>
    </div>
    </div>
  );
};

export default Courses;
