import React, { useContext } from "react";
import UserContext from "./CountContext";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const spacedOr = "  or "
  const { currentUser } = useContext(UserContext);
  const CheckUser = () => {
    if (currentUser) {
      return (
        <div className="home">
          <h1>Welcome {currentUser.username}</h1>
        </div>
      );
    } else {
      return (
        <div className="home">
          <h1>
          <Link exact to="/login">
            Login
          </Link>
            {spacedOr}
          <Link exact to="/signup">
            Signup
          </Link>
          </h1>
        </div>
      );
    }
  };
  return <CheckUser />;
}
export default Home;
