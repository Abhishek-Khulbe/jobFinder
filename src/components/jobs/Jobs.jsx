import React, { useEffect, useState } from "react";
import SingleJob from "./../SingleJob/SingleJob";
import jobs from "./jobs.css";

export default function Jobs() {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    fetch("http://refertest.pythonanywhere.com/job/openings")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setJobs(data.data);
      });
  }, []);

  return (
    <div className="gridContainer">
      {jobs &&
        jobs.map((m) => {
          return <SingleJob key={m.id} {...m} />;
        })}
    </div>
  );
}
