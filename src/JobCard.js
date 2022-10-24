import React, { useContext, useEffect, useState } from "react";
import "./CompanyCard.css";
import UserContext from "./CountContext";

function JobCard({ job }) {
  let id = job.id;
  const [applied, setApplied] = useState();
  const { checkApplied, applyToJob } = useContext(UserContext);

  useEffect(
    function updateApplicationStatus() {
      setApplied(checkApplied(id));
    },
    [id, applied]
  );

  async function handleApply(e) {
    if (checkApplied(id)) return;
    applyToJob(id);
    setApplied(true);
  }
  const CheckEquity = () => {
    if (!job.equity || Number(job.equity) === 0) {
      return "No Equity";
    } else {
      return `${job.equity}`;
    }
  };
  const CheckSalary = () => {
    if (!job.salary || Number(job.salary) === 0) {
      return "No Salary";
    } else {
      return `${job.salary}`;
    }
  };
  return (
    <div className="card">
      <h6>{job.title} </h6>
      <ul>
        <li>
          <CheckSalary />
        </li>
        <li>
          <CheckEquity />
        </li>
        <li>{job.companyName}</li>
        <button onClick={handleApply} disabled={applied}>
          {applied ? "Applied" : "Apply"}
        </button>
      </ul>
    </div>
  );
}

export default JobCard;
