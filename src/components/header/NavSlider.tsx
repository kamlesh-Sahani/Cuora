'use client'
import Link from "next/link";
import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";



const NavSlider = () => {
      const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      console.log('Scrolling', direction); // Debug log
      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -100, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: 100, behavior: 'smooth' });
      }
    } else {
      console.log('scrollRef.current is null'); // Debug log
    }
  };

  const tutorials: string[] = [
    "html", "css", "Javascript", "Python", "Java", "C", "C++", "Bootstrap", "JQuery", "Laravel", "PHP", "MySQL", "MongoDB", "React", "Express", "NodeJs", "NextJs", "Django", "DSA"
  ]


  return (
    <div className='w-full flex h-10 items-center border-y-[0.5px]'>
      <FaAngleLeft style={{ color: "#000", width: 70, height: 22, cursor: 'pointer' }} onClick={() => scroll('left')} />
      <div ref={scrollRef} className='w-full flex justify-between items-center gap-10 max-sm:gap-5 overflow-hidden overflow-x-scroll no-scrollbar px-3 h-7 '>
    {tutorials.map((tutorial: string, index: number) => (
          <Link href='/' key={index}>
            <h1 className='text-black'>{tutorial}</h1>
          </Link>
        ))}
      </div>
      <FaAngleRight style={{ color: "#000", width: 70, height: 22, cursor: 'pointer' }} onClick={() => scroll('right')} />
    </div>
  )
}

export default NavSlider