import React from "react";
import { render, screen } from "@testing-library/react";
import { Content } from "./Content";

test("Content contains var image", () => {
  render(<Content />);
  const car = screen.getAllByAltText("Car");
  expect(car).not.toBeNull();
});
