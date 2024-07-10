import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function ActualitesEta(props) {
  const { eta } = props;

  React.useEffect(() => {
    //fetch last
  });

  return (
    <>
        <div className="m-5 md:mx-32">
          <h1 className="text-green-600 text-2xl">
            <b className="text-green-600 text-2xl">Actualités : </b>
          </h1>
        </div>

        <div className="container ">
          <Carousel
            className="mx-5 md:mx-20 "
            opts={{ align: "start", itemsToShow: 3, loop: true }}
          >
            <CarouselContent className="-ml-1">
              {eta.actualites.map((el) => (
                <CarouselItem
                  key={el.title}
                  className="pl-1 md:basis-1/2 lg:basis-1/2 xl:basis-1/3"
                >
                  <div className="p-1">
                    <Card
                      className="h-72 border-0"
                      style={{
                        backgroundImage: `url('assets/${el.img}')`,
                        backgroundSize: "cover",
                      }}
                    >
                      <CardContent className="h-full p-6 relative">
                        <div className="absolute inset-0 bottom-0  bg-gradient-to-t from-black via-transparent to-transparent"></div>

                        <div className="absolute bottom-4 left-0 right-0 p-0">
                          <p className=" text-right text-sm md:text-lg mr-2  font-semibold  text-white">
                            {el.date}
                          </p>
                          <p className="text-wrap text-sm lg:text-lg ml-2  font-semibold   text-white">
                            {el.title} :
                          </p>
                          <p className="truncate text-xs md:text-sm ml-2   text-white ">
                            {el.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
     </>
  );
}
