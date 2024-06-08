import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

import Divider from '@mui/material/Divider';

import data from "./data/data.json";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


export default function Details() {
  const [selected, setSelected] = useState(data[0]);
  const [value, setValue] = useState(data[0].secteurs[0].name);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleSelected(selected) {
    setSelected(data.find((item) => item.name === selected));
  }

  function countTotalFilieres(secteurs) {
    let totalFilieres = 0;
    secteurs.forEach((secteur) => {
      secteur.filiere.forEach((filiere) => {
          totalFilieres += 1
      });
    });

    return totalFilieres;
  }

  return (


    <div className="py-10 md:py-20" id="section3">
      
      <div className="mx-5 md:mx-20">
      <h1 className="text-green-600 text-2xl">
          <b className="text-green-600 text-2xl">EXPLOREZ </b> <br />
           NOS PROGRAMMES
          <p className="text-sm md:text-lg font-medium text-black" >Une variété de formations offrant la possibilité de sélectionner une spécialisation.</p> 
        </h1>
      </div>

      <div className="mt-10">
        
  
        <div id="section3" className="px-5 w-full  bg-green-600">
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
                    className=" w-full bg-green-600 flex-1 rounded-none focus:bg-slate-200 focus:text-green-600"
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




      </div>

      <p className="block lg:hidden text-2xl font-k2d font-bold text-center pt-5"> {selected.name} </p>


      <div className="flex justify-between items-stretch rounded mt-10  mx-5 lg:mx-28 border-2 p-2 lg:p-6">

        <div className="hidden lg:block w-5/12">
          <p className="text-2xl font-k2d font-bold"> {selected.name} </p>
          <p className="pb-5 font-medium">
            {selected.subTitle}
          </p>
          <img
            className="object-cover w-96 h-80 shadow-lg border-green-600 border-8"
            src="etas/khemisset.jpeg"
          />
        </div>

        <Divider className="hidden lg:block" orientation="vertical" variant="middle" flexItem />

        <div className="w-full lg:w-7/12 lg:ml-2 ">
          <div className="flex justify-center space-x-5 lg:space-x-20">
            <div className="text-center flex flex-col items-center space-y-1">
              <p className="font-bold text-3xl"> {selected.secteurs.length} </p>
              <p className="font-bold text-xl">Secteurs</p>
            </div>
            <div className="text-center flex flex-col items-center space-y-1">
              <p className="font-bold text-3xl">
                {countTotalFilieres(selected.secteurs)}
              </p>
              <p className="font-bold text-xl">Fillières</p>
            </div>

            <div className="text-center flex flex-col items-center space-y-1">
              <p className="font-bold text-3xl">480</p>
              <p className="font-bold text-xl ">Stagiaire</p>
            </div>
          </div>

          <div className="mt-5">
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  variant="scrollable"
                  scrollButtons="auto"
                  allowScrollButtonsMobile
                >
                  {selected.secteurs.map((secteur) => (
                    <Tab
                      key={secteur.name}
                      label={secteur.name}
                      value={secteur.name}
                    />
                  ))}
                </TabList>
              </Box>

              {selected.secteurs.map((secteur) => (
                <TabPanel key={secteur.name} value={secteur.name}>
                  <div className="space-y-2 p-1">
                    {secteur.filiere.map((filiere) => (
                      <><span> ({filiere.type}) </span>
                        <b>
                           {filiere.fil}
                        </b> <br />

                        {filiere.opts &&
                          filiere.opts.map((opt) =>  <ul> <li className="list-disc ml-10" >{opt}</li> </ul>)}
                      </>
                    ))}
                  </div>
                </TabPanel>
              ))}
            </TabContext>
          </div>
        </div>
      </div>
    </div>
  );
}
