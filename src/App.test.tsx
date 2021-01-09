import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import * as get from "./api/get";
// write some basic test to know that the criteria is met

test("Left click to add points.", () => {
  // given all skill points are not used
  render(<App api={{ get }} />);
  // select a unslected skill
  const leftClick = { button: 0 };
  const skill = screen.queryByAltText(/skill-0/i);
  if (skill == null) {
    throw new Error("FAILED");
  }
  fireEvent.click(skill, leftClick);
  // update something and check that it is updated...
  expect(false).toBeTruthy();
});

test("Right click to remove points.", () => {
  // given all skill points are used not used
  render(<App api={{ get }} />);
  // unselect a selected skill
  const rightClick = { button: 2 };
  const skill = screen.queryByAltText(/skill/i);
  if (skill == null) {
    throw new Error("FAILED");
  }
  fireEvent.click(skill, rightClick);
  // update something and check that it is updated...
  expect(false).toBeTruthy();
});

test("The user may only use up to 6 points.", () => {
  // given all skill points are used
  render(<App api={{ get }} />);
  // select a unslected skill
  const leftClick = { button: 0 };
  const skill = screen.queryByAltText(/skill/i);
  if (skill == null) {
    throw new Error("FAILED");
  }
  fireEvent.click(skill, leftClick);
  // update something and check that it is updated...
  expect(false).toBeTruthy();
});

test("Each item only accounts for one point.", () => {
  // same as a differnt test just checking a different outcome

  // given all skill points are not used
  render(<App api={{ get }} />);
  // select a unslected skill
  const leftClick = { button: 0 };
  const skill = screen.queryByAltText(/skill/i);
  if (skill == null) {
    throw new Error("FAILED");
  }
  fireEvent.click(skill, leftClick);
  // update something and check that it is updated...
  expect(false).toBeTruthy();
});

test("Displays current point total", () => {
  render(<App api={{ get }} />);
  const totalPoints = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  expect(false).toBeTruthy();
});

test("The user must select the items in order. Select the next one.", () => {
  // given all skill points are not used
  render(<App api={{ get }} />);
  // select a unslected skill
  const leftClick = { button: 0 };
  const skill = screen.queryByAltText(/skill/i);
  if (skill == null) {
    throw new Error("FAILED");
  }
  fireEvent.click(skill, leftClick);
  // update something and check that it is updated...
  expect(false).toBeTruthy();
});

test("The user must select the items in order. Try to skip one.", () => {
  // given all skill points are not used
  render(<App api={{ get }} />);
  // select a unslected skill
  const leftClick = { button: 0 };
  const skill = screen.queryByAltText(/skill/i);
  if (skill == null) {
    throw new Error("FAILED");
  }
  fireEvent.click(skill, leftClick);
  // update something and check that it is updated...
  expect(false).toBeTruthy();
});
