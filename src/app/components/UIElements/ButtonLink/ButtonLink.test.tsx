import "@testing-library/jest-dom";

import { fireEvent, render } from "@testing-library/react";

import React from "react";
import ButtonLink from "./ButtonLink";

describe("ButtonLink", () => {
  // it("renders as a button when no href is provided", () => {
  //   const { getByRole } = render(
  //     <ButtonLink label="Test" color="primary" onClick={() => {}} />,
  //   );
  //   expect(getByRole("button")).toBeInTheDocument();
  // });

  it("renders as a link when href is provided", () => {
    const { getByRole } = render(
      <ButtonLink label="Test Link" color="secondary" href="/test" />,
    );
    expect(getByRole("link")).toBeInTheDocument();
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

  it("calls onClick when button is clicked", () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <ButtonLink label="Clickable" color="primary" onClick={onClick} />,
    );
    fireEvent.click(getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });

  it("shows arrow in correct direction (left)", () => {
    const { getByText } = render(
      <ButtonLink
        label="Arrow Left"
        color="primary"
        hasArrow
        arrowDirection="left"
      />,
    );
    expect(getByText("←")).toBeInTheDocument();
  });

  it("shows arrow in correct direction (right)", () => {
    const { getByText } = render(
      <ButtonLink
        label="Arrow Right"
        color="primary"
        hasArrow
        arrowDirection="right"
      />,
    );
    expect(getByText("→")).toBeInTheDocument();
  });

  it("shows arrow in correct direction (bottom)", () => {
    const { getByText } = render(
      <ButtonLink
        label="Arrow Bottom"
        color="primary"
        hasArrow
        arrowDirection="bottom"
      />,
    );
    expect(getByText("↓")).toBeInTheDocument();
  });
});
