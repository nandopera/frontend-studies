// Home.js

import React from "react";
import "./react-test.css";
import Works from "./works";

function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor justo eu sapien consequat consequat. Aliquam erat volutpat. Nunc eget finibus mauris. Praesent sollicitudin malesuada felis, eget lobortis libero malesuada vel. Donec sagittis purus dolor, eu tempus turpis lobortis et.</p>
      <Works />
    </div>
  );
}

export default Home;
