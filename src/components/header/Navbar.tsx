import Link from "next/link"
import { CiSearch } from "react-icons/ci";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="w-[100%] h-[4rem] flex items-center px-6 max-sm:px-3">
      {/* left */}
      <div className="flex items-center h-full gap-10 max-sm:gap-5 w-[50%]">
        <h1 className="text-2xl font-semibold">Cuora</h1>

        <div className="navlinks h-[100%] flex gap-10 items-center max-sm:hidden">
          <ul className="flex items-center gap-5">
            <li><Link href="/">Courses</Link></li>
            <li><Link href="/">Tutorials</Link></li>
            <li><Link href="/problems">Problems</Link></li>
            <li><Link href="/">Certifications</Link></li>
          </ul>
          <div className="rounded-3xl flex w-[40%] h-[60%] items-center border-2 p-2">
            <input type="text" placeholder="Search..." name="" className="rounded-3xl w-[90%] h-full outline-none px-2" />
            <CiSearch style={{ color: "#000", width: 30, height: 30, cursor: 'pointer' }} />
          </div>
        </div>

        <div className="hidden max-sm:flex  gap-3 items-center justify-center">
          <button className="flex items-center text-[1.1rem]">Menu <FaCaretDown style={{ color: "#000", width: 20, height: 20, cursor: 'pointer' }} /></button>
          <button> <CiSearch style={{ color: "#000", width: 25, height: 25, cursor: 'pointer' }} /></button>
        </div>

      </div>
      {/* right */}
      <div className=" w-[50%] flex justify-end items-center gap-10 max-sm:gap-5 h-full font-semibold text-black ">
        <BsFillMoonStarsFill style={{ color: "#000", width: 24, height: 24, cursor: 'pointer' }} />
        <div className="bg-[#ffdf8e] hover:bg-[#ffbd16] duration-200 rounded-3xl gap-3 pr-4 flex shadow-md items-center w-[23%] h-[70%] cursor-pointer max-sm:hidden">
          <Link href="" className="rounded-3xl bg-[#ffc73a] hover:bg-[#ffdf8e] px-2 text-[1rem] shadow-md h-full w-[70%] flex justify-center duration-200 items-center">
            Sign Up
          </Link>
          <Link href="" className="h-full flex items-center justify-center">
            Login
          </Link>
        </div>
        <Link href="" className="hidden rounded-3xl bg-[#ffc73a] hover:bg-[#ffdf8e] px-2 text-[1rem] shadow-md w-[50%] h-[70%] max-sm:flex justify-center duration-200 items-center">
          Sign Up
        </Link>
      </div>
    </nav>
  )
}

export default Navbar