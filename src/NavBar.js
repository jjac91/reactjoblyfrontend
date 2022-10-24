import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Navbar.css";
import UserContext from "./CountContext";
function NavBar({ logOutUser }) {
  const history = useHistory();
  function logOut() {
    logOutUser();
    history.push("/");
  }
  const {currentUser} = useContext(UserContext);
  console.log(currentUser)
  const CheckUser = () => {
    if (currentUser) {
      return (
        <div className="nav">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/companies">
            Companies
          </NavLink>
          <NavLink exact to="/jobs">
            Jobs
          </NavLink>
          <NavLink exact to="/profile">
            Profile
          </NavLink>
          <NavLink exact to="/logout" onClick={logOut}>
            Logout {currentUser.username}
          </NavLink>
        </div>
      );
    } else {
      return (
        <div className="nav">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/login">
            Login
          </NavLink>
          <NavLink exact to="/signup">
            Signup
          </NavLink>
        </div>
      );
    }
  };
  return <CheckUser />;
}
export default NavBar;
