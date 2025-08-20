import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import ButtonLink from "./ButtonLink";

describe("ButtonLink", () => {
  it("renders as a link when href is provided", () => {
    const { getByRole } = render(
      <ButtonLink label="Test Link" color="secondary" href="/test" />,
    );
    expect(getByRole("link")).toBeInTheDocument();
  });

  it("renders as a button when no href is provided", () => {
    const { getByRole } = render(
      <ButtonLink label="Test" color="primary" onClick={() => {}} />,
    );
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("shows disabled state for button", () => {
    const { getByRole } = render(
      <ButtonLink label="Disabled" color="primary" disabled />,
    );
    expect(getByRole("button")).toBeDisabled();
  });

  it("shows disabled state for link", () => {
    const { getByRole } = render(
      <ButtonLink
        label="Disabled Link"
        color="secondary"
        href="/test"
        disabled
      />,
    );
    expect(getByRole("link")).toHaveAttribute("aria-disabled", "true");
  });
});
