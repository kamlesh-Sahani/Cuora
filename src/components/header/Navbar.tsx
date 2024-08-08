import Link from "next/link"
import { CiSearch } from "react-icons/ci";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="w-[100%] h-[4rem] flex items-center px-6">
      {/* left */}
      <div className="flex items-center h-full gap-10 w-[50%]">
        <h1 className="text-2xl font-semibold">Cuora</h1>
        <div className="navlinks h-[100%] flex gap-10 items-center">
          <ul className="flex items-center gap-5">
            <li><Link href="/">Courses</Link></li>
            <li><Link href="/">Tutorials</Link></li>
            <li><Link href="/">Certifications</Link></li>
          </ul>
          <div className="rounded-3xl flex w-[40%] h-[60%] items-center border-2 p-2">
            <input type="text" placeholder="Search..." name="" className="rounded-3xl w-[90%] h-full outline-none px-2" />
            <CiSearch style={{ color: "#000", width: 30, height: 30, cursor: 'pointer' }} />
          </div>
        </div>
      </div>
      {/* right */}
      <div className=" w-[50%] flex justify-end items-center">
        <BsFillMoonStarsFill />
        <div className="bg-[#ffdf8e] hover:bg-[#FDBE20] duration-200 rounded-3xl py-2 px-4 flex justify-between">
          <Link href="">
            <button className='rounded-3xl bg-[#FDBE20] px-2 py-1 text-[1rem] shadow-md text-black h-full'>
              Signup
            </button>
          </Link>
          <Link href="">
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar