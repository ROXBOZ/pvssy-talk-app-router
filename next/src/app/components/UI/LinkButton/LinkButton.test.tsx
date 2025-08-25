import "@testing-library/jest-dom";

import LinkButton from ".";
import { render } from "@testing-library/react";

describe("LinkButton", () => {
  it("renders three bars for menu icon when label is 'Menu'", () => {
    const { getByRole } = render(
      <LinkButton label="Menu" color="secondary" onClick={() => {}} />,
    );
    // Should render three bars
    const bars = getByRole("button").querySelectorAll("div > div");
    expect(bars.length).toBe(3);
    // All bars should be visible and not rotated/translated/hidden
    expect(bars[0].className).not.toMatch(/rotate|translate|opacity-0/);
    expect(bars[1].className).not.toMatch(/rotate|translate|opacity-0/);
    expect(bars[2].className).not.toMatch(/rotate|translate|opacity-0/);
  });

  it("renders the close (X) icon when label is 'Fermer'", () => {
    const { getByRole } = render(
      <LinkButton label="Fermer" color="secondary" onClick={() => {}} />,
    );
    const bars = getByRole("button").querySelectorAll("div > div");
    expect(bars.length).toBe(3);
    // The first and last bars should have rotate/translate classes
    expect(bars[0].className).toMatch(/rotate-45/);
    expect(bars[2].className).toMatch(/-rotate-45/);
    // The middle bar should be hidden
    expect(bars[1].className).toMatch(/opacity-0/);
  });

  it("calls onClick when clicked in menu mode", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <LinkButton label="Menu" color="secondary" onClick={handleClick} />,
    );
    getByRole("button").click();
    expect(handleClick).toHaveBeenCalled();
  });
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
