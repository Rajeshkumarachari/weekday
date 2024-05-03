import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
//import JobData from "../context/JobData";

const CardList = () => {
  const [jobData, setJobData] = useState(null);

  //const [data, setData] = useContext(JobData);
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      limit: 10,
      offset: 0,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
    };

    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setJobData(result?.jdList);
        console.log(jobData);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className=" flex flex-wrap gap-6 mx-8">
      {jobData ? (
        jobData.map((job) => <Card key={job.jdUid} job={job} />)
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default CardList;
