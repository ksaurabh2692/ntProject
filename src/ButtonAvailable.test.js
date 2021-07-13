import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders next element", () => {
  render(<App />);
  const nextElement = screen.getByTestId("next-button");
  expect(nextElement).toBeInTheDocument();
});
