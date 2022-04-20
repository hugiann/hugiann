import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "../containers/Home";

test("Home page renders", async () => {
  const { getByText } = render(<Home />);

  expect(getByText(/Hey, I'm Nezhivar/)).toBeTruthy();
});
