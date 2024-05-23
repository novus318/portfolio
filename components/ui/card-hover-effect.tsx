'use client'
import { cn } from "@/utils/cn";
import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: number,
    title: string;
    icon: any;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  useGSAP (() => {
    gsap.from('.skills', { opacity: 0, y: 50, duration: 0.2, stagger: 0.1, scrollTrigger: { trigger: '.skills', start: 'top 80%' } });
    }, [])
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-2  lg:grid-cols-4  py-10",
        className
      )}
    >
      {items.map((item, id) => (
        <div
        key={id}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === id && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle icon={item.icon}>{item.title}</CardTitle>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "skills rounded-2xl h-full w-full p-1 md:p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
  icon
}: {
  className?: string;
  children: React.ReactNode;
  icon?: any;
}) => {
  return (
    <h4 className={cn("flex items-center", className)}>
      <span className="text-2xl md:text-3xl lg:text-4xl mr-3 text-white-100">{icon}</span>
      <p className="text-base md:text-lg font-semibold text-white">{children}</p>
    </h4>
  );
}
