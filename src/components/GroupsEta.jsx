import React from "react";
import {
  Card
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Link} from "react-router-dom";

export default function GroupsEta(props) {
  const { eta } = props;
  

  return (
    <>
      <div className="m-5 md:mx-32 flex justify-between">
        <h1 className="text-green-600 text-2xl">
          <b className="text-green-600 text-2xl">Groupes : </b>
        </h1>

        <Select>
          <SelectTrigger className=" w-fit">
            <SelectValue placeholder="Select a Filière" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Filières</SelectLabel>
              {eta.groupes.map((el) => (
                <SelectItem value={el.fil}>{el.fil}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grid  sm:grid-cols-2  md:grid-cols-3 gap-0 bg-slate-200 mx-2 lg:mx-32 rounded-3xl">
        {eta.groupes.map((el) => (
          <div className=" mx-10 my-5" key={el.name}>
            <Card className="pb-4 border-0 border-t-8 border-t-green-500 bg-green-400 shadow-md">
              <img className="hidden md:block w-full" src={`${el.img}`} />
              <p className="text-2xl font-k2d font-bold p-2 text-white">
                {el.name}
              </p>
              <p className=" lg:text-lg font-k2d font-semibold px-2 text-white">
                CAD : {el.CAD}
              </p>

              <div className="flex justify-center">
             
             

                <Link
                className="rounded-xl bg-white text-green-600 mt-5 px-4 py-1 flex items-center font-semibold hover:bg-green-500 hover:shadow-2xl hover:text-white border-2 border-white shadow-md "
                to = {`/${eta.name}/${el.name}`} 
              >
                <img
                  className="w-5 mr-2"
                  src="assets/newPage.svg"
                  alt="new page icon"
                />
                En savoir plus
              </Link>
              </div>
            </Card>
          </div>
        ))}
      </div>

      <Pagination className="my-5 ">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
    
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
