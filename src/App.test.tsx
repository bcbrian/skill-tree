import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import App from "./App";
import * as get from "./api/get";
import { Users } from "./api";
// write some basic test to know that the criteria is met

test("Left click to add points.", async () => {
  // given all skill points are not used

  render(<App api={{ get }} />);

  // select a unslected skill
  const leftClick = { button: 0 };
  let skillNotSelected = screen.queryByAltText(/skill-0--not-selected/i);
  let skillSelected = screen.queryByAltText(/skill-0--selected/i);

  expect(skillNotSelected).toBeDefined();
  expect(skillSelected).toBeNull();

  if (skillNotSelected === null) {
    throw new Error("FAILED");
  }

  fireEvent.click(skillNotSelected, leftClick);

  skillNotSelected = screen.queryByAltText(/skill-0--not-selected/i);
  skillSelected = screen.queryByAltText(/skill-0--selected/i);
  // update something and check that it is updated...
  expect(skillNotSelected).toBeNull();
  expect(skillSelected).toBeDefined();
});

test("Right click to remove points.", () => {
  // given all skill points are not used

  render(
    <App
      api={{
        get: {
          ...get,
          user: () => Users[1],
        },
      }}
    />
  );

  // select a unslected skill
  const rightClick = { button: 2 };
  let skillNotSelected = screen.queryByAltText(/skill-0--not-selected/i);
  let skillSelected = screen.queryByAltText(/skill-0--selected/i);

  expect(skillNotSelected).toBeNull();
  expect(skillSelected).toBeDefined();

  if (skillSelected == null) {
    throw new Error("FAILED");
  }

  fireEvent.contextMenu(skillSelected, rightClick);

  skillNotSelected = screen.queryByAltText(/skill-0--not-selected/i);
  skillSelected = screen.queryByAltText(/skill-0--selected/i);
  // update something and check that it is updated...
  expect(skillNotSelected).toBeDefined();
  expect(skillSelected).toBeNull();
});

test.only("The user may only use up to 6 points.", () => {
  // given all skill points are not used

  render(
    <App
      api={{
        get: {
          ...get,
          user: () => Users[2],
        },
      }}
    />
  );

  // select a unslected skill
  const leftClick = { button: 0 };
  let skillNotSelected = screen.queryByAltText(/skill-6--not-selected/i);
  let skillSelected = screen.queryByAltText(/skill-6--selected/i);

  expect(skillNotSelected).toBeDefined();
  expect(skillSelected).toBeNull();

  if (skillNotSelected === null) {
    throw new Error("FAILED");
  }

  fireEvent.click(skillNotSelected, leftClick);

  skillNotSelected = screen.queryByAltText(/skill-6--not-selected/i);
  skillSelected = screen.queryByAltText(/skill-6--selected/i);
  // update something and check that it is updated...
  expect(skillNotSelected).toBeDefined();
  expect(skillSelected).toBeNull();
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
