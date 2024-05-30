import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Ido from "@/components/Ido";
import Projects from "@/components/Projects";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { words } from "@/data";
import { FaCode, FaDatabase, FaHome, FaLaptopCode, FaProjectDiagram, FaUser } from "react-icons/fa";
import { SiAmazonaws, SiBootstrap, SiCss3, SiExpress, SiGit, SiHyperskill, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiRedux, SiSkillshare, SiTailwindcss } from "react-icons/si";

export default function Home() {

const skills = [
    { id:1,title: 'JavaScript', icon: <SiJavascript /> },
    { id:2,title: 'React', icon: <SiReact /> },
    { id:3,title: 'Redux', icon: <SiRedux /> },
    { id:4,title: 'Next.js', icon: <SiNextdotjs /> },
    { id:5,title: 'Typescript', icon: <FaCode /> },
    { id:6,title: 'Express.js', icon: <SiExpress /> },
    { id:7,title: 'Node.js', icon: <SiNodedotjs /> },
    { id:8,title: 'RESTful APIs', icon: <FaLaptopCode /> },
    { id:9,title: 'MongoDB', icon: <SiMongodb /> },
    { id:10,title: 'CSS', icon: <SiCss3 /> },
    { id:11,title: 'Bootstrap', icon: <SiBootstrap /> },
    { id:12,title: 'Tailwind', icon: <SiTailwindcss /> },
    { id:13,title: 'Git', icon: <SiGit /> },
    { id:14,title: 'DS', icon: <FaDatabase /> },
    { id:15,title: 'Integrations', icon: <FaLaptopCode /> },
    { id:16,title: 'AWS', icon: <SiAmazonaws /> },
];

  return (
   <main className="bg-black-100 flex items-center justify-center flex-col mx-auto sm:px-10 px-5 overflow-x-hidden">
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
      <Hero/>
      <Grid/> 
      <Ido/>
    </div>
<div id="skills" className="text-start w-full max-w-4xl">
<div className="text-2xl md:text-4xl font-semibold text-neutral-600 dark:text-neutral-400">
        This is my
        <FlipWords words={words} />
      </div>
</div>
    <div className="max-w-full md:max-w-7xl px-2">
      <HoverEffect items={skills} />
    </div>
  <Education/>
  <Experience/>
  <Projects/>
  <Footer/>
   </main>
  );
}
