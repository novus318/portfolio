'use client'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaLocationArrow, FaWhatsapp } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-4xl md:text-7xl font-bold">
          Connect me to take <span className="text-purple">your</span> ideas
           to the next level
        </h1>
        <p className="text-white-200 text-lg md:mt-10 my-5 text-center">
        let&apos;s discuss how I can help you
        </p>
        <a aria-label='Email' href="mailto:nizamudheen.tech@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">

      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4">
          <button aria-label='Whatsapp'
            className="hover:text-white-100 transition duration-300"
            onClick={() => {
              window.open(`https://wa.me/+917560845014`, '_blank');
            }}
          >
            <FaWhatsapp size={32} />
          </button>
          <button aria-label='Email'
            className="hover:text-white-100 transition duration-300"
            onClick={() => {
              window.open(`mailto:nizamudheen.tech@gmail.com`, '_blank');
            }}
          >
            <FaEnvelope size={32} />
          </button>
          <button aria-label='Linkedin'
            className="hover:text-white-100 transition duration-300"
            onClick={() => {
              window.open('https://www.linkedin.com/in/muhammednizamudheen', '_blank');
            }}
          >
            <FaLinkedin size={32} />
          </button>
          <button aria-label='Github'
            className="hover:text-white-100 transition duration-300"
            onClick={() => {
              window.open('https://github.com/novus318', '_blank');
            }}
          >
            <FaGithub size={32} />
          </button>
          <button aria-label='Instagram'
            className="hover:text-white-100 transition duration-300"
            onClick={() => {
              window.open(
                'https://instagram.com/n_i_zam___?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
                '_blank'
              );
            }}
          >
            <FaInstagram size={32} />
          </button>
        </div>
        <div
            className="text-center mt-4"
          >
            &copy; 2023 by{" "}
            <Link href='/'><span className="text-sm">Muhammed Nizamudheen M</span></Link>
            </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;