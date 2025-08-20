import ButtonLink from "./ButtonLink";
import React from "react";

export const Default = {
  args: {
    label: "Button",
    color: "primary",
    href: "/",
    hasArrow: true,
    arrowDirection: "right",
  },
};

export default {
  title: "UI/ButtonLink",
  component: ButtonLink,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `ButtonLink is a component that renders either a Link or a Button, depending on whether it receives a href or a onClick prop.

### TODO
- [ ] Add accessibility features (e.g. focus styles)
- [ ] Test with long labels
- [ ] "color" should be renamed "style" and allow outline and fill for both primary and secondary colors.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: { table: { disable: true } },
    type: { table: { disable: true } },
    onClick: { table: { disable: true } },
    href: { table: { disable: true } },
  },
};
export const PrimaryStates = () => {
  return (
    <div style={{ display: "flex", gap: 24 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ButtonLink
          label="Default"
          color="primary"
          href="/"
          hasArrow
          arrowDirection="right"
        />
        <span style={{ marginTop: 8, fontSize: 12 }}>Default</span>
      </div>
      {/* Hover (simulated with a custom class) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ButtonLink
          label="Hover"
          color="primary"
          href="/"
          hasArrow
          arrowDirection="right"
          className="ring-primary-400 ring-2"
        />
        <span style={{ marginTop: 8, fontSize: 12 }}>Hover</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ButtonLink
          label="Active"
          color="primary"
          href="/"
          hasArrow
          arrowDirection="right"
          className="bg-primary-400"
        />
        <span style={{ marginTop: 8, fontSize: 12 }}>Active</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ButtonLink
          label="Disabled"
          color="primary"
          href="/"
          hasArrow
          arrowDirection="right"
          disabled
        />
        <span style={{ marginTop: 8, fontSize: 12 }}>Disabled</span>
      </div>
    </div>
  );
};
export const SecondaryStates = () => {
  return (
    <div style={{ display: "flex", gap: 24 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ButtonLink label="Default" color="secondary" href="/" />
        <span style={{ marginTop: 8, fontSize: 12 }}>Default</span>
      </div>
      {/* Hover (simulated with a custom class) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ButtonLink
          label="Hover"
          color="secondary"
          href="/"
          className="ring-secondary-300 ring-2"
        />
        <span style={{ marginTop: 8, fontSize: 12 }}>Hover</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ButtonLink
          label="Active"
          color="secondary"
          href="/"
          className="bg-secondary-300"
        />
        <span style={{ marginTop: 8, fontSize: 12 }}>Active</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ButtonLink label="Disabled" color="secondary" href="/" disabled />
        <span style={{ marginTop: 8, fontSize: 12 }}>Disabled</span>
      </div>
    </div>
  );
};
