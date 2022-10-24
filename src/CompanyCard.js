import React from "react";
import { NavLink } from "react-router-dom";
import "./CompanyCard.css";

function CompanyCard({ company, logoUrl }) {
  return (
    <NavLink to={`/companies/${company.handle}`}>
      <div className="card">
        <h6>
          {company.name} <img src={logoUrl} alt={company.name} />
        </h6>
        <p>{company.description}</p>
      </div>
    </NavLink>
  );
}

export default CompanyCard;
