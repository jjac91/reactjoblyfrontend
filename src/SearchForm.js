import React, { useState } from "react";

const SearchForm = ({ getTerm }) => {
  const firstState = { searchTerm: "Enter search term"};
  const [formData, setFormData] = useState(firstState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getTerm(formData.searchTerm)
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="searchTerm"
        type="text"
        name="searchTerm"
        value={formData.name}
        onChange={handleChange}
      />
      <button id="searchButton">Submit</button>
    </form>
  );
};

export default SearchForm;
