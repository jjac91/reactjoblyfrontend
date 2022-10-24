import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginForm = ({ loginUser }) => {
  const history = useHistory();
  const firstState = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(firstState);
  const [errors, setErrors] = useState([]);

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
      await loginUser(formData);
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
          <button id="loginButton">Submit</button>
        </li>
        {errors}
      </ul>
    </form>
  );
};

export default LoginForm;
