"use client";
import { Typewriter } from "react-simple-typewriter";

const TypingAnimation = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-center text-black drop-shadow-lg ">
        <span className="text-blue-500">Learn to</span>{" "}
        <Typewriter
          words={[
            "Code with Confidence",
            "Master the Latest Tech",
            "Build Your Future",
          ]}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
     
      <p className="text-lg md:text-xl lg:text-2xl font-light text-center max-w-3xl mt-6 px-4">
        Unlock your  <span className="text-blue-500 font-bold drop-shadow-lg">full potential </span> with hands-on tutorials, expert insights, and the    <span className="text-blue-500 font-bold drop-shadow-lg">latest tech trends. </span>
        Whether you're starting out or leveling up, we've got the resources to  <span className="text-blue-500 font-bold drop-shadow-lg">guide your journey.</span>
      </p>
    </div>
  );
};

export default TypingAnimation;
