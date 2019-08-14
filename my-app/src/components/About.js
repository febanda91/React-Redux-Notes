import React, { Component } from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        My name is Francisco Banda, I am 28 years old. I am a Full-Stack
        Software Engineer. I was born and raise in Houston, Texas. My favorite
        professinal sports team is the Tennessee Titans. I love to code!
      </p>
    </div>
  );
};

export default Rainbow(About);
