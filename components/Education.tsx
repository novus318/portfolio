import Image from 'next/image'
import React from 'react'
import { WobbleCard } from './ui/wobble-card'
import { FlipWords } from './ui/flip-words';

const Education = () => {
    const education = [
        {
            degree: 'Web Development',
            institution: 'Self-taught',
            duration: '[Progress]',
            details: [
                'Learned various web development technologies and frameworks.',
                'Built projects for practical skills.',
                'Built RESTful APIs using Node.js and Express.js for backend development.',
                'Managed version control system using Git and GitHub.',
            ],
        },
        {
            degree: 'B.VOC-Software Development',
            institution: 'St.Aloysius College',
            duration: '[2021-2023 (March)]',
            details: [
                'Attended classes on basic programming, data structure, and networking.',
                'Completed the 2nd year and decided to focus on self-learning.',
            ],
        },
        {
            degree: 'Higher Secondary',
            institution: 'AKGVHSS (Payyannur)',
            duration: '[2019-2021]',
            details: ['Completed higher secondary education with a focus on science.'],
        },
    ];
    return (
      <>
      <div className="text-start w-full max-w-4xl">
        <div className="text-2xl md:text-4xl  py-10 md:py-16 font-semibold text-neutral-600 dark:text-neutral-400 overflow-x-hidden">
        This is how <br/>I started to
        <FlipWords words={['learn','educate']} />
      </div>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[300px] lg:min-h-[300px]"
                className=""
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    {education[0].degree}
                    </h2>
                    <p className="mt-1 text-left  text-base/6 text-neutral-200 font-semibold">
                    {education[0].institution} {education[0].duration}
                    </p>
                    <ul className='list-disc'>
                        {education[0].details.map((d, idx) => (
                            <li key={idx} className="mb-1 text-xs md:text-sm">{d}</li>
                        ))}
                    </ul>
                </div>
                <Image
                    src="/b4.svg"
                    width={500}
                    height={500}
                    alt="linear demo image"
                    className="absolute -right-2 lg:-right-[10%] grayscale filter md:-bottom-10 object-contain rounded-2xl"
                />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 max-h-[220px] md:min-h-[380px]">
                <h2 className="max-w-80  text-left text-balance text-base md:text-xl font-semibold tracking-[-0.015em] text-white">
                {education[1].degree}
                </h2>
                <p className="mt-1 max-w-[26rem] text-left  text-base/6 font-semibold text-neutral-200">
                {education[1].institution} {education[1].duration}
                </p>
                <ul className='list-disc'>
                        {education[1].details.map((d, idx) => (
                            <li key={idx} className="mb-1 text-xs md:text-sm">{d}</li>
                        ))}
                    </ul>
            </WobbleCard>
        </div></>
    )
}

export default Education