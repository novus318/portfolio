
import React from "react";
import { Button } from "./ui/ MovingBorders";
import Link from "next/link";

const Experience = () => {
    const experience = [
        {   id: 1,
            position: 'Software Developer',
            company: 'Winndeal (UAE)',
            year: 'Mar 2023 - present',
            desc: 'Worked on various e-commerce projects, including the development of dynamic, user-friendly web applications.',
            website: 'winndeal.com',
            webUrl:'https://www.winndeal.com/',
            thumbnail: "/exp1.svg",
        },
        {   
            id: 2,
            position: 'Freelancer',
            year: '2023',
            desc: "Designed and developed web app with responsivenes using Mern stack.",
            thumbnail: "/exp3.svg",
        },
    ];
  return (
    <div className="py-20 w-full max-w-7xl">
      <h2 className="text-3xl mb-4 md:mb-10 md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
      Experience
      </h2>
      <div className="w-full mt-2 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {experience.map((card) => (
          <Button
          aria-label='experience'
            key={card.id}

            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background:
              "linear-gradient(90deg, rgba(0,3,4,1) 0%, rgba(0,3,9,1) 13%, rgba(32,34,50,1) 37%, rgba(32,34,50,1) 49%, rgba(0,3,19,1) 67%, rgba(0,3,9,1) 88%, rgba(0,3,4,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="px-3 flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col  p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                {card.position}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                {card.company} {card.year} <br/>
               { card.website &&
                 <Link href={card.webUrl} className="text-start text-white-100 mt-3 font-semibold">
                 {card.website}
                 </Link>
               }
                </p>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;