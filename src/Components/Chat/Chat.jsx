import React, { useEffect, useState } from "react";

const Chat = ({
  value,
  randomPlaceholder,
  handleSubmit,
  trendingRef,
  ingredientsRef,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const trending = trendingRef?.current;
    const ingredients = ingredientsRef?.current;

    if (!trending || !ingredients) return;

    const observer = new IntersectionObserver(
      ([entry1, entry2]) => {
        const trendingVisible = entry1?.isIntersecting;
        const ingredientsVisible = entry2?.isIntersecting;

        setIsVisible(trendingVisible || ingredientsVisible);
      },
      {
        root: null,
        threshold: 0.4,
      }
    );

    observer.observe(trending);
    observer.observe(ingredients);

    return () => {
      observer.unobserve(trending);
      observer.unobserve(ingredients);
    };
  }, [trendingRef, ingredientsRef]);

  return isVisible ? (
    <section className="chat fixed bottom-5 left-1/2 -translate-x-1/2 flex flex-row items-center gap-1">
      <div className="flex flex-row px-4 py-3 rounded-full text-primaryBody bg-[#0e0f26]">
        <input
          type="text"
          placeholder={randomPlaceholder}
          value={value}
          className={`
            no-underline outline-none w-[200px] md:focus:w-[350px] lg:focus:w-[550px] bg-[#0e0f26] text-white transform transition-all duration-300 ease-in-out
            ${value.length > 0 && "md:w-[350px] lg:w-[550px]"}
            `}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="hover:scale-95 active:scale-90 transition-all duration-200 ease-in-out p-3 rounded-full font-bold bg-[#0e0f26] flex flex-row flex-nowrap"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 48 48"
          className="size-6"
        >
          <radialGradient
            id="oDvWy9qKGfkbPZViUk7TCa_eoxMN35Z6JKg_gr1"
            cx="-670.437"
            cy="617.13"
            r=".041"
            gradientTransform="matrix(128.602 652.9562 653.274 -128.6646 -316906.281 517189.719)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#1ba1e3"></stop>
            <stop offset="0" stopColor="#1ba1e3"></stop>
            <stop offset=".3" stopColor="#5489d6"></stop>
            <stop offset=".545" stopColor="#9b72cb"></stop>
            <stop offset=".825" stopColor="#d96570"></stop>
            <stop offset="1" stopColor="#f49c46"></stop>
          </radialGradient>
          <path
            fill="url(#oDvWy9qKGfkbPZViUk7TCa_eoxMN35Z6JKg_gr1)"
            d="M22.882,31.557l-1.757,4.024c-0.675,1.547-2.816,1.547-3.491,0l-1.757-4.024	c-1.564-3.581-4.378-6.432-7.888-7.99l-4.836-2.147c-1.538-0.682-1.538-2.919,0-3.602l4.685-2.08	c3.601-1.598,6.465-4.554,8.002-8.258l1.78-4.288c0.66-1.591,2.859-1.591,3.52,0l1.78,4.288c1.537,3.703,4.402,6.659,8.002,8.258	l4.685,2.08c1.538,0.682,1.538,2.919,0,3.602l-4.836,2.147C27.26,25.126,24.446,27.976,22.882,31.557z"
          ></path>
          <radialGradient
            id="oDvWy9qKGfkbPZViUk7TCb_eoxMN35Z6JKg_gr2"
            cx="-670.437"
            cy="617.13"
            r=".041"
            gradientTransform="matrix(128.602 652.9562 653.274 -128.6646 -316906.281 517189.719)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#1ba1e3"></stop>
            <stop offset="0" stopColor="#1ba1e3"></stop>
            <stop offset=".3" stopColor="#5489d6"></stop>
            <stop offset=".545" stopColor="#9b72cb"></stop>
            <stop offset=".825" stopColor="#d96570"></stop>
            <stop offset="1" stopColor="#f49c46"></stop>
          </radialGradient>
          <path
            fill="url(#oDvWy9qKGfkbPZViUk7TCb_eoxMN35Z6JKg_gr2)"
            d="M39.21,44.246l-0.494,1.132	c-0.362,0.829-1.51,0.829-1.871,0l-0.494-1.132c-0.881-2.019-2.467-3.627-4.447-4.506l-1.522-0.676	c-0.823-0.366-0.823-1.562,0-1.928l1.437-0.639c2.03-0.902,3.645-2.569,4.511-4.657l0.507-1.224c0.354-0.853,1.533-0.853,1.886,0	l0.507,1.224c0.866,2.088,2.481,3.755,4.511,4.657l1.437,0.639c0.823,0.366,0.823,1.562,0,1.928l-1.522,0.676	C41.677,40.619,40.091,42.227,39.21,44.246z"
          ></path>
        </svg>
      </button>
    </section>
  ) : null;
};

export default Chat;
