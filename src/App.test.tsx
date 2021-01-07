import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// write some basic test to know that the criteria is met

test('Left click to add points.', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  expect(false).toBeTruthy();
});

test('Right click to remove points.', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  expect(false).toBeTruthy();
});

test('The user may only use up to 6 points.', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  expect(false).toBeTruthy();
});

test('Each item only accounts for one point.', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  expect(false).toBeTruthy();
});

test('Displays current point total', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  expect(false).toBeTruthy();
});

test('The user must select the items in order.', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  expect(false).toBeTruthy();
});

test('For example: The user may not put a point in the cake without first having put points in the chevrons and the silverware (in that order).', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  expect(false).toBeTruthy();
});
