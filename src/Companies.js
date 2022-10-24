import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
function Company() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(null);

  useEffect(() => {
    async function getCompanies() {
      if (searchTerm == null) {
        let companies = await JoblyApi.getCompanies();
        setCompanies(companies);
      } else {
        let companies = await JoblyApi.filterCompany(searchTerm);
        console.log(companies);
        setCompanies(companies);
      }
    }
    getCompanies();
  }, [searchTerm]);
  const getTerm = (term) => setSearchTerm(term);
  const CheckNoResults =() => {
    if (companies.length === 0) {
      return( <p>No results found!</p>)
    } else {
      return (companies.map((company) => (
        <CompanyCard company={company} key={company.handle} />
      )));
    }
  }
  
  return (
    <div>
      <SearchForm getTerm={getTerm} />
      <CheckNoResults />
    </div>
  );
}
export default Company;
