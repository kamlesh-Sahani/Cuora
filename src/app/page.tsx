import Link from "next/link";
import TypingAnimation from "@/components/TypingAnimaton";
import CourseCard from "@/components/CourseCard";
import Testimonials from "@/components/Testimonials";
export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center pt-36">
      <TypingAnimation />
      <section className="flex gap-4 mt-8">
        <Link
          href="#learn"
          className="bg-[#307ef3] text-[white] px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-400 transition-colors duration-300"
        >
          Start Learning Now
        </Link>
        <Link
          href="#courses"
          className="bg-white text-gray-900 px-6 py-3 rounded-full text-lg font-semibold shadow-lg border border-gray-300 hover:bg-gray-100 transition-colors duration-300"
        >
          Explore Courses
        </Link>
      </section>

      <section className="py-12 bg-gray-100 mt-10 w-full rounded-md">
        <div className="container mx-auto px-4 max-lg:w-full max-lg:p-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Tutorials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            {/* Repeat for more courses */}
          </div>
        </div>
      </section>

      <section className="bg-blue-500 text-white py-12 text-center w-full rounded-md">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Dive In?
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Join our community and start learning the latest in tech today!
        </p>
        <Link
          href="/signup"
          className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
        >
          Get Started
        </Link>
      </section>

      <section className="py-12 w-full rounded-md">
        <div className="container mx-auto ">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Users Say
          </h2>
          <div className="flex gap-4 w-full overflow-x-auto">
           <Testimonials />
           <Testimonials />
           <Testimonials />
           <Testimonials />
           <Testimonials />
           <Testimonials />
           <Testimonials />
           <Testimonials />

  
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 w-full rounded-md">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-6">
            Subscribe to our newsletter to get the latest tutorials and tech
            updates straight to your inbox.
          </p>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-l-full border border-gray-300 text-gray-900 w-1/2 md:w-1/3"
            />
            <button
              type="submit"
              className="bg-[#FBBF24] text-gray-900 px-6 py-3 rounded-r-full font-semibold hover:bg-yellow-400 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
