import React, { useState } from "react";

const Header = () => {
  const [designation, setDesignation] = useState("");

  const roleDetails = [
    "Role",
    "backend",
    "frontend",
    "ios",
    "android",
    "Flutter",
    "tech lead",
    "Fullstack",
    "React Native",
    "Dev-Ops",
    "Data Engineer",
    "Data Science",
  ];
  const numberOfEmployee = [
    "No of Employees",
    "1-10",
    "11-20",
    "21-50",
    "51-100",
    "101-200",
    "201-500",
    "500+",
  ];
  const experience = [
    "Experience",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ];
  const workType = ["Remote", "Hybrid", "In-Office"];

  const minPay = [
    "Minimum Base Pay Salary",
    "0",
    "10L",
    "20L",
    "30L",
    "40L",
    "50L",
    "60L",
    "70L",
  ];

  const handleDesignation = (e) => {
    setDesignation(e.target.value);
    console.log(designation);
  };

  return (
    <div className=" w-full  h-14 flex gap-1 my-4 ">
      <p>{designation} </p>
      <select
        value={designation}
        onChange={handleDesignation}
        className="border mx-2 text-sm rounded-md text-gray-500 h-10 px-1"
      >
        {roleDetails.map((role, i) => (
          <option key={i} value={role}>
            {role}
          </option>
        ))}
      </select>
      <select
        name="noOfEmployee"
        className="border mx-2 text-sm rounded-md text-gray-500 h-10 px-1"
      >
        {numberOfEmployee.map((number, l) => (
          <option value={number} key={l}>
            {number}
          </option>
        ))}
      </select>
      <select
        name="experience"
        className="border mx-2 text-sm rounded-md text-gray-500 h-10 px-1"
      >
        {experience.map((num, q) => (
          <option value={num} key={q}>
            {num}
          </option>
        ))}
      </select>
      <select
        name="remote"
        className="border mx-2 text-sm rounded-md text-gray-500 h-10 px-1"
      >
        {workType.map((type) => (
          <option value={type}>{type} </option>
        ))}
      </select>
      <select
        name="pay"
        className="border mx-2 text-sm rounded-md text-gray-500 h-10 px-1"
      >
        {minPay.map((pay) => (
          <option value={pay}>{pay} </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Search Company Name"
        className="border mx-2 text-sm rounded-md text-gray-500 h-10  focus:outline-none px-3"
      />
    </div>
  );
};

export default Header;
