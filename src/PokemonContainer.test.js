import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders pokemon container", () => {
  render(<App />);
  const pokemonElement = screen.getByTestId("pokemon-container");
  expect(pokemonElement).toBeInTheDocument();
});
