import React from "react";
import { Link } from "react-router-dom";

export default function Monke() {
  return (
    <div style={{ backgroundColor: "aquamarine" }}>
      <h1>Hello i'm Monke</h1>
      <Link to="/">Go back to Kermo :(</Link>
      <div>
        <img style={{width: 500, height: 500}} src="https://media.tenor.com/images/36ac974ad4c6050c3074a188d6f6b953/tenor.gif"></img>
      </div>
    </div>
  );
}


