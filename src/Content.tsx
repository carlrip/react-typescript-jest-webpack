import React from "react";
import content from "./content.module.css";
import car from "./car.jpg";

export const Content = () => (
  <div className={content.container}>
    <img src={car} className={content.car} alt="Car" />
  </div>
);
