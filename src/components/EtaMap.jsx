import { useState } from "react";
import data from "../data/data.json";
import { Button } from "./ui/button";
import MapComp from "./MapComp.jsx";
import { Link } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

function EtaMap() {
  const [selected, setSelected] = useState(data[0]);

  function handleSelected(name) {
    setSelected(data.find((item) => item.name === name));
  }

  return (
    <>
      <div id="section1" className="px-5 w-full  bg-green-600">
        <Carousel className="mx-10" opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-1">
            {data.map((el) => (
              <CarouselItem
                key={el.id}
                className=" basis-1/2 md:basis-1/5 pl-0"
              >
                <div>
                  <Button
                    key={el.id}
                    className={`w-full bg-green-600 flex-1 rounded-none font-semibold hover:bg-slate-200 hover:text-green-600 ${
                      selected.name == el.name
                        ? "bg-slate-200 text-green-600"
                        : "bg-green-600"
                    }`}
                    onClick={() => handleSelected(el.name)}
                  >
                    {el.name}
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="w-full bg-cover bg-center  border-green-600 py-0 ">
        <div className="relative">
          <MapComp className="z-20 relative" location={selected.location} />

          <div className="flex justify-center md:justify-start items-center absolute z-50 top-0 bottom-0 left-0 right-0 w-full">
            <div className="flex flex-col mx-0 md:mx-20 ">
              <div className=" px-4 py-2 rounded-2xl bg-green-600 text-white mb-2 shadow-lg ">
                <h2 className=" font-extrabold font-k2d text-xl md:text-2xl">
                  {selected.name}
                </h2>
                <p className="block "> {selected.subTitle} </p>
                <div className="my-2">
                  <img
                    className="object-cover w-80 h-64 rounded-3xl shadow-lg"
                    src={selected.image}
                    alt=""
                  />
                </div>
                <div className="flex justify-around">
                  <p> {selected.email} </p>

                  <p> {selected.phone} </p>
                </div>
              </div>
              <div className=" p-2 rounded bg-green-600 text-white flex justify-center shadow-lg border-4 border-double">
                <img className="w-5 mr-2" src="assets/pin.svg" alt="" />
                <p className="text-center"> {selected.address} </p>
              </div>

              <Link
                className="p-2 rounded bg-green-600 text-white flex justify-center shadow-lg mt-1 border-4 border-double hover:bg-green-500 "
                to = {`/${selected.name}`} state= {selected}
              >
                <img
                  className="w-5 mr-2"
                  src="assets/newPageWhite.svg"
                  alt="new page icon"
                />
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EtaMap;
