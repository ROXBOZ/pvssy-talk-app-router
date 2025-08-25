import "@testing-library/jest-dom";

import LinkButton from "./LinkButton";
import { render } from "@testing-library/react";

describe("LinkButton", () => {
  it("renders as a link when href is provided", () => {
    const { getByRole } = render(
      <LinkButton label="Test Link" color="secondary" href="/test" />,
    );
    expect(getByRole("link")).toBeInTheDocument();
  });

  it("renders as a button when no href is provided", () => {
    const { getByRole } = render(
      <LinkButton label="Test" color="primary" onClick={() => {}} />,
    );
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("shows disabled state for button", () => {
    const { getByRole } = render(
      <LinkButton label="Disabled" color="primary" disabled />,
    );
    expect(getByRole("button")).toBeDisabled();
  });

  it("shows disabled state for link", () => {
    const { getByRole } = render(
      <LinkButton
        label="Disabled Link"
        color="secondary"
        href="/test"
        disabled
      />,
    );
    expect(getByRole("link")).toHaveAttribute("aria-disabled", "true");
  });
});
