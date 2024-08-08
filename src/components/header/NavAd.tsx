import Link from "next/link"

const NavAd = () => {
  return (
    <div className="w-[100%] bg-[#146EF5] topbar-ad h-[2.5rem] flex items-center text-white max-sm:h-[2.9rem] text-[1rem] max-sm:text-[0.8rem]">
        <Link href='/' className="w-full flex justify-center items-center h-[100%]">
            <span className="ad-text text-center">Learn to code by doing. <strong>Learn from community.</strong> Join our discord server</span>
        </Link>
    </div>
  )
}

export default NavAd