import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SignupForm = ({ registerUser }) => {
  const history = useHistory();
  const firstState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };
  const [formData, setFormData] = useState(firstState);
  const [errors, setErrors] =useState([])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
     await registerUser(formData);
     history.push("/");
    }
    catch(err){
      setErrors(err)
    }
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <ul>
        <li>
          <label htmlFor="username">User Name:</label>
          <input
            id="username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </li>
        <li>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </li>
        <li>
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </li>
        <li>
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </li>
        <li>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </li>
        <li>
          <button id="signupButton">Submit</button>
        </li>
        {errors}
      </ul>
    </form>
  );
};

export default SignupForm;
