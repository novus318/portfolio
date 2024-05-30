'use client'
import Image from 'next/image';
import React, { useState } from 'react'

const Projects = () => {
  const projects = [
    { id: 1, title: "TL E-commerce Application", description: "Developed a comprehensive e-commerce application using NextJs for the frontend and Node.js for the backend to provide an exceptional shopping experience", imageUrl: "https://drive.google.com/uc?export=view&id=1nZ089i1YU0qimCfyW4LbHJx6BgotUjmI", link: "https://tlonline.shop/", learnMore: "Link" },
    { id: 2, title: "IT Solutions Company Website", description: "This website was designed and developed with nextJS,Typescript and tailwind with attractive animations using gsap,framer with visually appealing user interface", imageUrl: "https://drive.google.com/uc?export=view&id=1nSKeDk4uSLXHb478dn-1V9p7tHXHB6-H", link: "https://www.winndeal.com/" },
    { id: 3, title: "Austagreg Web3 solutions", description: "Utilized Tailwind CSS for styling and NextJs for the frontend to ensure a SEO optimised, responsive and visually appealing user interface for Web3 solutions company.", imageUrl: "https://drive.google.com/uc?export=view&id=1p_wWqrxCcN1_YPfGABWeyA3Va-OTUoZQ", link: "https://austagreg.vercel.app/" },
    { id: 4, title: "All-in-one platform for plant lovers.", description: "This e-commerce platform was designed and developed from the ground up to provide an exceptional shopping experience for those who appreciate the beauty of greenery.", imageUrl: "https://drive.google.com/uc?export=view&id=19JQKEgZbJF0gV7IkcJfpDlnYv8L8cSMt", link: "https://www.abyzplants.com/" ,learnMore: "Learn More"},
    { id: 5, title: "Netflix small clone", description: "Developed a comprehensive Landing page with ReactJs for the frontend and TMDB movie database provides a lateat movie and tv shows", imageUrl: "https://drive.google.com/uc?export=view&id=1aqzTJl1kr7zxpZU0qFOa9kPKWrj2R4Wb", link: "https://netfi.netlify.app/", learnMore: "Link" },
    { id: 6, title: "Confident company website", description: "Created a company assets from logo to company profile and website using html,css and javascript for a building materials company in UAE and also implemented a contact form", imageUrl: "https://drive.google.com/uc?export=view&id=1VR49uncCp6Vndken1VE2MPLAoU8DE57l", link: "https://confidentuae.com/" },
  
  ];

  const [visibleProjects, setVisibleProjects] = useState(3);

  const showMoreProjects = () => {
    setVisibleProjects(projects.length);
  };

  return (
    <div id='projects'>
      <h2 className="text-3xl mb-4 md:mb-10 md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {projects.slice(0, visibleProjects).map((project) => (
          <div key={project.id} className="bg-black-200 bg-opacity-30 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
            <div className="overflow-hidden rounded-t-xl">
              <Image src={project.imageUrl} alt={project.title} width={1000} height={1000} className="w-full h-auto transform hover:scale-110 transition-transform duration-300" />
            </div>
            <div className='px-4 mb-1 mt-3'>
              <h2 className="text-base md:text-xl font-bold mt-2">{project.title}</h2>
              <p className='text-xs md:text-base'>{project.description}</p>
            </div>
            <div className='justify-between w-full flex p-2'>
              <a href={project.link} target='_blank' className="inline-flex py-1 rounded-xl animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">Link</a>
              {project.learnMore && 
              <a href={project.learnMore} className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">Learn More...</a>}
            </div>
          </div>
        ))}
      </div>
      {visibleProjects < projects.length && (
     <div className='w-full flex justify-center mt-5 md:mt-8'>
         <button onClick={showMoreProjects} className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white-100 dark:text-white text-black rounded-xl font-bold transform hover:-translate-y-1 transition duration-400">
          Show More
        </button>
      </div>
      )}
    </div>
  );
}

export default Projects