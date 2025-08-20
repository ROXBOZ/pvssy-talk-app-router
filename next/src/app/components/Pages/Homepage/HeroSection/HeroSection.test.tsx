jest.mock("../../../../../../config/sanity", () => ({
  __esModule: true,
  urlFor: () => ({ url: () => "/mocked-image-url.jpg" }),
}));

jest.mock("@sanity/image-url", () => () => ({
  url: () => "/mocked-image-url.jpg",
}));
import React from "react";
import { render, screen } from "@testing-library/react";
import HeroSection, { HeroBlockData } from "./HeroSection";

const baseData: HeroBlockData = {
  title: "Test Title",
  text: "Test description",
  callToAction: {
    label: "Click Me",
    href: "/test-link",
  },
  figure: {
    altText: "Test alt",
    image: {
      asset: { _ref: "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg" },
      alt: "Image alt",
    },
  },
};

describe("HeroSection", () => {
  it("renders title, text, button, and image", () => {
    render(<HeroSection data={baseData} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /click me/i })).toHaveAttribute(
      "href",
      "/test-link",
    );
    expect(screen.getByAltText(/test alt|image alt/i)).toBeInTheDocument();
  });

  it("renders PortableText if text is array", () => {
    const data: HeroBlockData = {
      ...baseData,
      text: [
        {
          _type: "block",
          children: [{ _type: "span", text: "Rich text" }],
        },
      ],
    };
    render(<HeroSection data={data} />);
    expect(screen.getByText("Rich text")).toBeInTheDocument();
  });

  it("handles missing image gracefully", () => {
    const data: HeroBlockData = { ...baseData, figure: undefined };
    render(<HeroSection data={data} />);
    expect(screen.getByText(/no image/i)).toBeInTheDocument();
  });

  it("handles missing callToAction gracefully", () => {
    const data: HeroBlockData = { ...baseData, callToAction: undefined };
    render(<HeroSection data={data} />);
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
