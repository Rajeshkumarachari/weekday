import React, { useState } from "react";
import { ImPower } from "react-icons/im";

const Card = ({ job }) => {
  const [jobJd, setJobJd] = useState(job?.jobDetailsFromCompany.slice(0, 300));
  const [show, setShow] = useState(false);
  const showAll = () => {
    setJobJd(job?.jobDetailsFromCompany.slice(0, 720));
    setShow(!show);
  };
  const closeAll = () => {
    setJobJd(job?.jobDetailsFromCompany.slice(0, 300));
    setShow(!show);
  };
  // console.log(job?.jobDetailsFromCompany);
  return (
    <div className="border w-[300px]  rounded-2xl shadow-sm ">
      <h1 className=" flex  justify-left ml-12 my-2 font-medium">
        {job?.jobRole?.toUpperCase()}
      </h1>
      <h1 className=" flex justify-left ml-12 -mt-3">{job?.location} </h1>
      <div className="mx-4">
        <p className=" font-medium">About Company :</p>
        <p className=" text-sm font-medium">About Us</p>
        <div className=" w-full ">
          <p>{jobJd} </p>
          {show ? (
            <span
              onClick={closeAll}
              className=" flex justify-center text-blue-800 cursor-pointer"
            >
              Close job
            </span>
          ) : (
            <span
              onClick={showAll}
              className=" flex justify-center text-blue-800 cursor-pointer"
            >
              View job
            </span>
          )}
        </div>
        <div className="  grid my-2">
          <button
            onClick={() => window.open(job?.jdLink, "_blank")}
            className=" bg-teal-300  py-2 rounded-md flex justify-center items-center gap-3"
          >
            <ImPower className="text-yellow-400" />
            Easy Apply
          </button>

          <button className=" bg-indigo-600 py-2 mt-2 rounded-md text-white">
            Unlock referral asks
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
