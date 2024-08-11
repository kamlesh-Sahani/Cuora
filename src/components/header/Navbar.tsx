'use client'

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa6";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tutorialsOpen, setTutorialsOpen] = useState(false);
  const [certificationsOpen, setCertificationsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTutorials = () => {
    setTutorialsOpen(prev => !prev);
    if (!certificationsOpen) setCertificationsOpen(false); // Close Certifications menu when Tutorials is opened
  };

  const toggleCertifications = () => {
    setCertificationsOpen(prev => !prev);
    if (!tutorialsOpen) setTutorialsOpen(false); // Close Tutorials menu when Certifications is opened
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
      setTutorialsOpen(false);
      setCertificationsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full h-[4rem] flex items-center px-6 max-lg:px-4 border-b">
      {/* left */}
      <div className="flex items-center h-full gap-9 max-lg:gap-7 w-[50%]">
        <Link href="/" className="text-2xl font-semibold">
          Cuora
        </Link>

        <div className="navlinks h-full flex gap-9 max-md:gap-5 items-center max-md:hidden relative">
          <ul className="flex items-center gap-5 max-md:gap-2">
            <li className="relative">
              <button onClick={toggleTutorials} className="flex items-center gap-2">
                Tutorials<FaCaretDown />
              </button>
              <div
                className={`absolute top-full z-10 left-0 w-40 bg-white border border-gray-300 shadow-lg transition-transform duration-300 ease-in-out transform ${tutorialsOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-10px] opacity-0'} ${tutorialsOpen ? 'z-20' : 'z-0'}`}
              >
                <ul className="flex flex-col p-2">
                  <li className="p-2 hover:bg-gray-100"><Link href="#">HTML</Link></li>
                  <li className="p-2 hover:bg-gray-100"><Link href="#">CSS</Link></li>
                  <li className="p-2 hover:bg-gray-100"><Link href="#">JavaScript</Link></li>
                </ul>
              </div>
            </li>
            <li className="relative">
              <button onClick={toggleCertifications} className="flex items-center gap-2">
                Certifications<FaCaretDown />
              </button>
              <div
                className={`absolute top-full left-0 z-10 w-40 bg-white border border-gray-300 shadow-lg transition-transform duration-300 ease-in-out transform ${certificationsOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-10px] opacity-0'} ${certificationsOpen ? 'z-20' : 'z-0'}`}
              >
                <ul className="flex flex-col p-2">
                  <li className="p-2 hover:bg-gray-100"><Link href="#">Web Development</Link></li>
                  <li className="p-2 hover:bg-gray-100"><Link href="#">Data Science</Link></li>
                  <li className="p-2 hover:bg-gray-100"><Link href="#">UX/UI Design</Link></li>
                </ul>
              </div>
            </li>
            <li>
              <Link href="#">
              Problems
              </Link>
            </li>
          </ul>
          <div className="rounded-3xl flex max-lg:hidden w-[40%] h-[60%] items-center border-2 p-2">
            <input type="text" placeholder="Search..." className="rounded-3xl w-[90%] h-full outline-none px-2" />
            <CiSearch style={{ color: "#000", width: 30, height: 30, cursor: 'pointer' }} />
          </div>
        </div>

        <div className="hidden max-lg:flex max-md:hidden gap-3 items-center justify-center">
          <button><CiSearch style={{ color: "#000", width: 25, height: 25, cursor: 'pointer' }} /></button>
        </div>
        <div className="hidden max-md:flex gap-3 items-center justify-center">
          <button onClick={toggleMenu} className="flex items-center gap-1">
            {menuOpen ? (
              <IoClose style={{ color: "#000", width: 25, height: 25, cursor: 'pointer' }} />
            ) : (
              <>
                Menu<FaCaretDown />
              </>
            )}
          </button>
        </div>
      </div>

      {/* right */}
      <div className="w-[50%] flex justify-end items-center gap-10 max-sm:gap-5 h-full font-semibold text-white">
        <BsFillMoonStarsFill style={{ color: "#111827", width: 24, height: 24, cursor: 'pointer' }} />
        <div className="flex gap-3 items-center justify-end w-[35%] max-lg:w-[50%] h-[70%] max-md:hidden">
          <Link href="#" className="rounded-3xl bg-[#146EF5] hover:bg-[#0d5fd8] px-2 text-[1rem] h-full max-lg:w-[55%] w-[55%] flex justify-center duration-200 items-center text-center max-md:text-[0.9rem]">
            Sign Up
          </Link>
          <Link href="#" className="text-gray-900 rounded-3xl hover:bg-[#F3F4F6] border px-2 text-[1rem] h-full max-lg:w-[45%] w-[45%] flex justify-center items-center duration-200 text-center max-md:text-[0.9rem]">
            Login
          </Link>
        </div>
        <Link href="#" className="hidden rounded-3xl bg-[#146EF5] hover:bg-[#0a58cc] px-[3px] text-[1rem] max-sm:w-[50%] max-lg:w-[30%] h-[70%] max-sm:h-[65%] max-md:flex justify-center duration-200 items-center text-center max-md:text-[0.9rem]">
          Sign Up
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`absolute top-[4rem] left-0 z-40 w-full bg-white border-t border-b shadow-lg flex flex-col items-center py-4 transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0'}`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <IoClose style={{ width: 24, height: 24, cursor: 'pointer' }} />
        </button>
        <ul className="flex flex-col items-center gap-4 mt-8">
          <li className="relative">
            <button onClick={toggleTutorials} className="flex items-center gap-2">
              Tutorials<FaCaretDown />
            </button>
            <div
              className={`absolute top-full left-0 z-50 w-40 bg-white border border-gray-300 shadow-lg transition-transform duration-300 ease-in-out transform ${tutorialsOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-10px] opacity-0'}`}
            >
              <ul className="flex flex-col p-2">
                <li className="p-2 hover:bg-gray-100"><Link href="#">HTML</Link></li>
                <li className="p-2 hover:bg-gray-100"><Link href="#">CSS</Link></li>
                <li className="p-2 hover:bg-gray-100"><Link href="#">JavaScript</Link></li>
              </ul>
            </div>
          </li>
          <li className="relative">
            <button onClick={toggleCertifications} className="flex items-center gap-2">
              Certifications<FaCaretDown />
            </button>
            <div
              className={`absolute top-full left-0 z-40 w-40 bg-white border border-gray-300 shadow-lg transition-transform duration-300 ease-in-out transform ${certificationsOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-10px] opacity-0'}`}
            >
              <ul className="flex flex-col p-2">
                <li className="p-2 hover:bg-gray-100"><Link href="#">Web Development</Link></li>
                <li className="p-2 hover:bg-gray-100"><Link href="#">Data Science</Link></li>
                <li className="p-2 hover:bg-gray-100"><Link href="#">UX/UI Design</Link></li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="#">
              Problems
            </Link>
          </li>
          <li className="w-full flex justify-center items-center mt-4">
            <div className="rounded-3xl w-[80%] h-[2.5rem] flex items-center border-2 p-2">
              <input type="text" placeholder="Search..." className="rounded-3xl w-[90%] h-full outline-none px-2" />
              <CiSearch style={{ color: "#000", width: 24, height: 24, cursor: 'pointer' }} />
            </div>
          </li>
          <li className="w-full flex justify-center items-center mt-4">
            <Link href="" className="rounded-3xl bg-[#146EF5] hover:bg-[#0a57ca] px-4 py-2 text-[1rem] text-center text-white">
              Sign Up
            </Link>
          </li>
          <li className="w-full flex justify-center items-center mt-2">
            <Link href="" className="text-gray-900 rounded-3xl hover:bg-[#F3F4F6] border px-4 py-2 text-[1rem] text-center">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
