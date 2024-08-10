import Link from "next/link"
import { CiSearch } from "react-icons/ci";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="w-[100%] h-[4rem] flex items-center px-6 max-lg:px-4 border-b">
      {/* left */}
      <div className="flex items-center h-full gap-9 max-lg:gap-7 w-[50%]">
        <h1 className="text-2xl font-semibold">Cuora</h1>

        <div className="navlinks h-[100%] flex gap-9 max-md:gap-5 items-center max-md:hidden">
          <ul className="flex items-center gap-5 max-md:gap-2">
            <li className="flex items-center gap-2">Tutorials<FaCaretDown /></li>
            <li className="flex items-center gap-2">Certifications<FaCaretDown /></li>
          </ul>
          <div className="rounded-3xl flex max-lg:hidden w-[40%] h-[60%] items-center border-2 p-2">
            <input type="text" placeholder="Search..." name="" className="rounded-3xl w-[90%] h-full outline-none px-2" />
            <CiSearch style={{ color: "#000", width: 30, height: 30, cursor: 'pointer' }} />
          </div>
        </div>

        <div className="hidden max-lg:flex max-sm:hidden gap-3 items-center justify-center">
          <button> <CiSearch style={{ color: "#000", width: 25, height: 25, cursor: 'pointer' }} /></button>
        </div>
        <div className="hidden max-sm:flex gap-3 items-center justify-center">
          <button> <IoMenu style={{ color: "#000", width: 25, height: 25, cursor: 'pointer' }} /></button>
        </div>

      </div>
      {/* right */}
      <div className=" w-[50%] flex justify-end items-center gap-10 max-sm:gap-5 h-full font-semibold text-white ">
        <BsFillMoonStarsFill style={{ color: "#111827", width: 24, height: 24, cursor: 'pointer' }} />
        <div className="flex gap-2 items-center w-[50%] h-[70%] max-md:hidden">
          <Link href="" className="rounded-3xl bg-[#146EF5] hover:bg-[#0d5fd8] px-2 text-[1rem] h-full max-lg:w-[45%] w-[30%] flex justify-center duration-200 items-center text-center max-md:text-[0.9rem]">
            Sign Up
          </Link>
          <Link href="" className="text-gray-900 rounded-3xl hover:bg-[#F3F4F6] border px-2 text-[1rem] h-full max-lg:w-[40%] w-[30%] flex justify-center items-center duration-200 text-center max-md:text-[0.9rem]">
            Login
          </Link>
        </div>
        <Link href="" className="hidden rounded-3xl bg-[#146EF5] hover:bg-[#FACC15] px-[3px] text-[1rem] max-md:w-[50%] max-lg:w-[30%] h-[70%] max-sm:h-[65%] max-md:flex justify-center duration-200 items-center text-center max-md:text-[0.9rem]">
          Sign Up
        </Link>
      </div>
    </nav>
  )
}

export default Navbar