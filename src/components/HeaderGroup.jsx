import React from "react";

export default function HeaderGroup(props) {
  const { eta, group } = props.groupData;
  
  return (
    <div className="">
      <nav className="mx-2 lg:mx-32 flex justify-between items-center  my-5">
        <div className="flex items-center font-semibold font-k2d text-lg">
          <img className="w-20" src="assets/logo-circle.png" alt="CFK" />
          <p>CF Khemisset</p>
        </div>

        <div className="flex gap-1">
          <a className="rounded bg-green-600 text-white px-4 py-1 flex items-center font-semibold hover:bg-green-500" href={`/#/eta/${eta.name}`}>
            <img className="w-5 mr-2" src="assets/backArrow.svg" /> Back
          </a>

          <button className="rounded bg-green-600 text-white px-4 py-1 flex items-center font-semibold hover:bg-green-500">
            <img className="w-5 mr-2" src="assets/user.svg" /> Profile
          </button>
        </div>
      </nav>

      <div
        className="h-96 bg-cover bg-center relative w-full"
        style={{
          backgroundImage: `url("${group.headerImg}")`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-45"></div>

        <div className="absolute inset-0 flex items-center w-full h-full ">
          <div className="ml-20">
              <h1 className="text-4xl font-semibold font-almarai text-white uppercase">
                {eta.name}
              </h1>
              <h1 className="text-3xl  font-almarai text-white ">
                {group.name}
              </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
