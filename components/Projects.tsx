'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { FaWindowClose } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1, title: "TL E-commerce Application", description: "Developed a comprehensive e-commerce application using NextJs for the frontend and Node.js for the backend to provide an exceptional shopping experience", imageUrl: "https://drive.google.com/uc?export=view&id=1nZ089i1YU0qimCfyW4LbHJx6BgotUjmI", link: "https://tlonline.shop/", learnMore: "Link",
      projectPoints: [
        "Created dynamic product listings, product detail pages, and an efficient admin panel for product and user management",
        "Developed a comprehensive e-commerce application using Next.js for the frontend and Node.js for the backend.",
        "Implemented various features such as suspense loading and cache management.",
        "Stored images in Google Drive and integrated them into the backend for efficient image management.",
        "Implemented Google Map Autocomplete feature for address input on the frontend.",
        "Utilized Tailwind CSS for styling to ensure a responsive and visually appealing user interface.",
      ],
    },
    { id: 2, title: "IT Solutions Company Website", description: "This website was designed and developed with nextJS,Typescript and tailwind with attractive animations using gsap,framer with visually appealing user interface", imageUrl: "https://drive.google.com/uc?export=view&id=1nSKeDk4uSLXHb478dn-1V9p7tHXHB6-H", link: "https://www.winndeal.com/" },
    { id: 3, title: "Austagreg Web3 solutions", description: "Utilized Tailwind CSS for styling and NextJs for the frontend to ensure a SEO optimised, responsive and visually appealing user interface for Web3 solutions company.", imageUrl: "https://drive.google.com/uc?export=view&id=1p_wWqrxCcN1_YPfGABWeyA3Va-OTUoZQ", link: "https://austagreg.vercel.app/" },
    {
      id: 4, title: "All-in-one platform for plant lovers.", description: "This e-commerce platform was designed and developed from the ground up to provide an exceptional shopping experience for those who appreciate the beauty of greenery.", imageUrl: "https://drive.google.com/uc?export=view&id=19JQKEgZbJF0gV7IkcJfpDlnYv8L8cSMt",
      link: "https://www.abyzplants.com/", learnMore: "Learn More",
      description2: 'I had the pleasure of working on a remarkable project that catered to the growing community of plant enthusiasts in the UAE. This e-commerce platform was designed and developed from the ground up to provide an exceptional shopping experience for those who appreciate the beauty of greenery.',
      projectPoints: [
        "The frontend of the platform was crafted using Next.js, TypeScript, and Tailwind CSS. This combination resulted in a visually stunning and responsive user interface, ensuring a seamless shopping experience across various devices.",
        " For the backend, I chose Node.js and Express, paired with MongoDB for data storage. This robust architecture ensures data reliability and scalability, making it possible to accommodate the growing demand for plant purchases.",
        "Admin Panel: The project included a admin panel. Vendors can easily create and edit product listings, categorize items, and efficiently manage user accounts and orders. Generating order bills is now a simplified process.",
        "User Features: On the user side, the platform offers dynamic product listings with advanced filtering options. Shoppers can filter products by categories, prices, and perform efficient searches. The product details page provides comprehensive information, and a user-friendly cart page simplifies the checkout process.",
        "Seamless Transactions: Stripe integration ensures secure and seamless payment processing.simplifying the purchase process.",
        "User Engagement: User registration is straightforward, with user-friendly signup and login functionality. Registered users can manage their profiles, track their orders, and receive updates on order statuses, creating a personalized shopping experience.",
        "Real-time Order Status Notifications: We've implemented a feature where order status updates are sent to customers via email using Nodemailer. This communication keeps buyers informed about the progress of their orders, enhancing their overall shopping experience."

      ],
    },
    {
      id: 5, title: "Netflix small clone", description: "Developed a comprehensive Landing page with ReactJs for the frontend and TMDB movie database provides a lateat movie and tv shows", imageUrl: "https://drive.google.com/uc?export=view&id=1aqzTJl1kr7zxpZU0qFOa9kPKWrj2R4Wb", link: "https://netfi.netlify.app/", learnMore: "Link",
      projectPoints: [
        " Implemented a movie browsing experience similar to Netflix's interface.",
        " Utilized the TMDB movie database API for fetching movie information and images.",
        " Categorized movies based on genres, enhancing user experience.",
        " UI design and engaging animations crafted using Framer Motion.",
        "Integrated YouTube trailers for each movie, providing additional information.",
        "Hosted the application on Netlify for easy accessibility.",
      ], description2: "Created a web application of netflix using React,To get latest update on movies and shows...",
    },
    { id: 6, title: "Confident company website", description: "Created a company assets from logo to company profile and website using html,css and javascript for a building materials company in UAE and also implemented a contact form", imageUrl: "https://drive.google.com/uc?export=view&id=1VR49uncCp6Vndken1VE2MPLAoU8DE57l", link: "https://confidentuae.com/" },

  ];

  const [visibleProjects, setVisibleProjects] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<any | null>(null);
  const showMoreProjects = () => {
    setVisibleProjects(projects.length);
  };


  const openModal = (content: any) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
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
                <button onClick={() => openModal(project)} className="px-8 py-0.5 border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow">Learn More...</button>
              }  </div>
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
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={handleModalClick}>
          <div className="relative max-w-6xl mx-auto bg-black-100 p-5 rounded-xl">
            <button onClick={closeModal} className="absolute top-3 left-3 text-white text-lg">
              <FaWindowClose />
            </button>
            <div className='mt-3 text-white p-5'>
              {modalContent?.description2 && <p className="text-lg mb-4">{modalContent?.description2}</p>}
              {modalContent?.projectPoints && (
                <ul className="list-disc text-xs md:text-sm">
                  {modalContent.projectPoints.map((point: string, index: number) => (
                    <li key={index} className="mb-2">{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects