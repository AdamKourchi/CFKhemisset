import React from "react";


export default function HeaderEta(props) {
    const {eta} = props
    return (
        <div className="mx-2 lg:mx-32">
          <nav className="flex justify-between items-center  mt-5">
            <div className="flex items-center font-semibold font-k2d text-lg">
              <img className="w-20" src="assets/logo-circle.png" alt="CFK" />
              <p>CF Khemisset</p>
            </div>
    
            <div className="flex gap-1">
            <a className="rounded bg-green-600 text-white px-4 py-1 flex items-center font-semibold hover:bg-green-500" href="/CFKhemisset">
            <img className="w-5 mr-2" src="assets/backArrow.svg" /> Back
          </a>
              <button className="rounded bg-green-600 text-white px-4 py-1 flex items-center font-semibold hover:bg-green-500">
                <img className="w-5 mr-2" src="assets/user.svg" /> Login
              </button>
            </div>
          </nav>
          <hr className="my-5 " />          

          <div
            className="h-64 bg-cover bg-center relative"
            style={{
              backgroundImage: `url('assets/heroWallpaper.jpeg')`,
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-45"></div>
    
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-semibold font-k2d text-white">
                {eta.name}
              </h1>
            </div>
          </div>
        </div>
      );
}