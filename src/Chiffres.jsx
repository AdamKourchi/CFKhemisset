import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration / 100);
      const interval = setInterval(() => {
        start += increment;
        setCount(Math.floor(start));
        if (start >= end) clearInterval(interval);
      }, 100);

      return () => clearInterval(interval);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-4xl font-bold text-white">
      {count}
    </div>
  );
};

const Chiffres = () => {
  return (
    <div className="flex bg-green-600  justify-between items-stretch py-20 ">


      <div className=" hidden md:block  w-80  border-white border-r-4 p-10 " >
        <h1 className="text-white text-2xl">
          <b className="text-2xl">CF Khemisset</b> <br /> EN
          CHIFFRES
        </h1>
      </div>


      <div className="flex w-full justify-around  py-5">
        <div className="text-center flex flex-col items-center space-y-1 ">
          <img className="w-10 md:w-16" src="university.svg" alt="" />
          <Counter end={6} duration={2000} />
          <p className="text-white font-bold text-sm md:text-lg">ÉTABLISSEMENTS</p>
        </div>

        <div className="text-center flex flex-col items-center space-y-1">
          <img className="w-10 md:w-16" src="teach.svg" alt="" />
          <Counter className="" end={8} duration={2000} />
          <p className="text-white font-bold text-sm md:text-lg">SECTEURS</p>
        </div>

        <div className="text-center flex flex-col items-center space-y-1">
          <img className="w-10 md:w-16" src="choices.svg" alt="" />
          <Counter className="" end={27} duration={2000} />
          <p className="text-white font-bold text-sm md:text-lg">FILLIÈRES</p>
        </div>

        <div className="text-center flex flex-col items-center space-y-1">
          <img className="w-10 md:w-16" src="grad.svg" alt="" />
          <Counter className="" end={2489} duration={2000} />
          <p className="text-white font-bold text-sm md:text-lg">STAGIAIRES</p>
        </div>
      </div>
    </div>
  );
};

export default Chiffres;
