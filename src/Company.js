import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import JoblyApi from "./api";
import JobCard from "./JobCard";

function Company(cantFind) {
  const [company, setCompany] = useState({});
  const [jobs, setJobs] = useState([]);
  const { handle } = useParams();

  useEffect(() => {
    async function getCompany() {
      try {
        let company = await JoblyApi.getCompany(handle);
        console.log(company.jobs);
        setCompany(company);
        setJobs(company.jobs);
      } catch (error) {
        setCompany(error);
      }
    }
    getCompany();
  }, []);
  console.log(company);
  console.log();
  if (Object.keys(company).includes("0")) return <Redirect to={cantFind} />;
  return (
    <div>
      <div>
        <h1>{company.name}</h1>
        <h3>Employees:{company.numEmployees}</h3>
        <img src={company.logoUrl} alt={company.name} />
        <p>{company.description}</p>
      </div>
      <div>
        {jobs.map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
}
export default Company;
