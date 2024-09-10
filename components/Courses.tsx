import React from 'react';
import Link from 'next/link';
import { BorderBeam } from './magicui/border-beam';
import { FaArrowTrendUp } from 'react-icons/fa6';

const Courses = () => {
  return (
    <div className="py-16 relative  rounded-xl mt-5">
       <BorderBeam />
      <div className="container mx-auto text-center">
        <h2 className="heading text-4xl md:text-6xl font-bold">Start Learning Programming from Scratch</h2>
        <p className="text-white-200 text-lg md:mt-10 my-5 text-center">
          Whether you&apos;re just getting started or want to build your skills, this is and complete guide for you to
          learn programming step by step. Explore Data Structures & Algorithms in Java and concepts with hands-on examples.
        </p>
        <Link href="/courses" className="mx-auto border flex items-center gap-2 max-w-52 rounded py-3 px-6  text-lg hover:bg-purple-700 hover:text-gray-800 hover:bg-white hover:scale-110 transition duration-300 ease-in-out hover:border-white-200">
    Explore Course
    <FaArrowTrendUp/>
</Link>

      </div>
    </div>
  );
};

export default Courses;
