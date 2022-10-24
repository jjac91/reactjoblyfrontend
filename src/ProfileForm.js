import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import JoblyApi from "./api";

import UserContext from "./CountContext";

const ProfileForm = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
  });
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let updatedInfo = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };
    let username = formData.username;
    let updatedUser;
    try {
      updatedUser = await JoblyApi.updateUser(username, updatedInfo);
    } catch (err) {
      setErrors(err);
      return;
    }
    setErrors([]);
    setCurrentUser(updatedUser);
  };
  return (
    <form onSubmit={handleSubmit}>
      <ul>
        <li>
          <label htmlFor="username">User Name:</label>
          {currentUser.username}
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
          <button id="updateButton">Update</button>
        </li>
        {errors}
      </ul>
    </form>
  );
};

export default ProfileForm;
