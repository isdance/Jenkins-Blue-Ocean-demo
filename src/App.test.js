import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Tutu Loves Zhuzhu/i);
  expect(linkElement).toBeInTheDocument();
});
