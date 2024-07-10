import React from "react";

export default function GroupPage(props) {

    const { eta,group } = props.groupData;

    if (!group || !group.links) {
        return <div>Loading...</div>;
    }



  return (

    <>
      <div className="grid  grid-cols-1 md:grid-cols-3 my-5 gap-2 mx-1">
        <div className="col-span-2">
          <p className="text-green-600 md:text-2xl mx-20  font-semibold text-lg ">Emploi de temps : </p>
          <img className="" src="assets/emploi.jpeg" />
        </div>

        <div className="bg-emerald-600 w-full h-full rounded-3xl ">
            <p className="text-white md:text-2xl mx-20 text-center font-semibold text-lg  my-5">Links</p>
            {group.links.map((el) => (
             <div className="text-white bg-green-300 mx-5 mb-2 rounded text-xl font-semibold">
             <a className="ml-5 " key={el.url} href={`${el.url}`}>  {el.title} </a> 
             <br />     
             </div>
        
            ))}
        </div>
      </div>

      <hr className="my-5"/>
    </>
  );
}
