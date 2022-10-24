import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import JoblyApi from "./api";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobs() {
      let jobs = await JoblyApi.getAllJobs();
      console.log(jobs)
      setJobs(jobs);
    }
    getJobs();
  }, []);

  return (
    <div>
      {jobs.map((job) => (
        <JobCard job={job} key={job.id} />
      ))}
    </div>
  );
}
export default Jobs;
