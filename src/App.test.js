import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders prev element", () => {
  render(<App />);
  const prevElement = screen.getByTestId("prev-button");
  expect(prevElement).toBeInTheDocument();
});
