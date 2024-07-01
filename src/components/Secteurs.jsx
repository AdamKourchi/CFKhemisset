import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
} from "@/components/ui/card";

import data from "../data/secteurs.json";

export default function Secteurs() {
return (
    <div className=" py-5 md:py-20" id="section2">

        <div className="mx-5 md:mx-20">
            <h1 className="text-green-600 text-2xl">
                <b className="text-green-600  text-2xl">UNE OFFRE</b> <br /> DE
                FORMATION ELARGIE
            </h1>
            <p className="text-sm md:text-lg font-medium">Plusieurs secteurs différents à choisir, chacun répondant à un besoin spécifique du marché du travail.</p>
        </div>
        
        <div className="container pt-10 mx-auto ">
          
            <Carousel className="mx-5 md:mx-20 " opts={{ align: "start", itemsToShow: 4, loop: true }}>
                <CarouselContent className="-ml-1">
                    {data.map((el) => (
                        <CarouselItem key={el.id} className="pl-1 basis-1/1 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                            <div className="p-1">
                                <Card className="max-h-76 border-0">
                                    <img className="w-56 md:w-96" src={`secteurs/${el.image}`} />
                                    <p className=" text-wrap text-sm md:text-lg  md:mx-10 font-semibold text-center -translate-y-24 text-white">
                                        {el.name}
                                    </p>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    </div>
);
}
