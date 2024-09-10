import React from 'react';
import Link from 'next/link';
import { BorderBeam } from './magicui/border-beam';

const Courses = () => {
  return (
    <div className="py-16 relative  rounded-xl mt-5">
       <BorderBeam />
      <div className="container mx-auto text-center">
        <h2 className="heading text-4xl md:text-6xl font-bold">Start Learning Programming from Scratch</h2>
        <p className="text-white-200 text-lg md:mt-10 my-5 text-center">
          Whether you're just getting started or want to build your skills, this is and complete guide for you to
          learn programming step by step. Explore Data Structures & Algorithms in Java and concepts with hands-on examples.
        </p>
        <Link href="/courses"className="border rounded py-3 px-6 rounded-lg text-lg hover:bg-purple-700 transition duration-300">
            Explore Courses
        </Link>
      </div>
    </div>
  );
};

export default Courses;
