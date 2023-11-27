import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="container">
      <h2>Home Page</h2>
      <p>Veja nossa lista de úsuarios ou detalhes.</p>
      <Link className="link" to={"/lista"}>Lista</Link>
    </div>
  );
};

export default Home;
