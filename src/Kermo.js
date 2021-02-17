import React from "react";
import { Link } from "react-router-dom";

export default function Kermo() {
  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>Hi my name is Kermo</h1>
      <Link to="/monke">Check out my friend :)</Link>
      <div>
        <img style={{width: 500, height: 500}} src="https://media.tenor.com/images/3b7f38e4c197b86eb7c459b1589b87b7/tenor.gif"></img>
      </div>
    </div>
  );
}
