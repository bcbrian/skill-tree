import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// write some basic test to know that the criteria is met

test('Left click to add points.', () => {
  // given all skill points are not used
  render(<App />);
  // select a unslected skill
  const leftClick = { button: 0 }
  fireEvent.click(screen.queryByAltText(/skill/i), leftClick);
  // update something and check that it is updated...
  expect(false).toBeTruthy();
});

test('Right click to remove points.', () => {
  // given all skill points are used not used
  render(<App />);
  // unselect a selected skill
  const rightClick = { button: 2 }
  fireEvent.click(screen.queryByAltText(/skill/i), rightClick);
  // update something and check that it is updated...
  expect(false).toBeTruthy();
});

test('The user may only use up to 6 points.', () => {
  // given all skill points are used
  render(<App />);
  // select a unslected skill
  const rightClick = { button: 0 }
  fireEvent.click(screen.queryByAltText(/skill/i), rightClick);
  // update something and check that it is updated...
  expect(false).toBeTruthy();
});

test('Each item only accounts for one point.', () => {
  // same as a differnt test just checking a different outcome

  // given all skill points are not used
  render(<App />);
  // select a unslected skill
  const leftClick = { button: 0 }
  fireEvent.click(screen.queryByAltText(/skill/i), leftClick);
  // update something and check that it is updated...
  expect(false).toBeTruthy();
});

test('Displays current point total', () => {
  render(<App />);
  const totalPoints = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  expect(false).toBeTruthy();
});

test('The user must select the items in order. Select the next one.', () => {
  // given all skill points are not used
  render(<App />);
  // select a unslected skill
  const leftClick = { button: 0 }
  fireEvent.click(screen.queryByAltText(/skill/i), leftClick);
  // update something and check that it is updated...
  expect(false).toBeTruthy();
});

test('The user must select the items in order. Try to skip one.', () => {
  // given all skill points are not used
  render(<App />);
  // select a unslected skill
  const leftClick = { button: 0 }
  fireEvent.click(screen.queryByAltText(/skill/i), leftClick);
  // update something and check that it is updated...
  expect(false).toBeTruthy();
});
