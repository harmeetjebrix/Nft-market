"use client";

import { useEffect, useRef } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollToTop = () => {
  const arrow = useRef(null);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset >= 180) {
        if (arrow.current) {
          arrow.current.classList.add("right-10");
        }
      } else {
        if (arrow.current) {
          arrow.current.classList.remove("right-10");
        }
      }
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="overflow-hidden">
      <button
        className={`fixed bottom-6 ss:bottom-10 z-30 -right-full transition-all duration-500 shadow-2xl shadow-black bg-white hover:bg-[#cdcdcd] active:p-[.45rem] p-2 rounded`}
        onClick={scrollTop}
        ref={arrow}
      >
        <BsArrowUp className="text-xl active:text-lg text-black" />
      </button>
    </div>
  );
};

export default ScrollToTop;
