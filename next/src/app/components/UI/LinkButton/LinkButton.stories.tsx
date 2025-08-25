import LinkButton from "./LinkButton";
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
  title: "UI/LinkButton",
  component: LinkButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `LinkButton is a styled component that visually appears as a button but can function as either a button or a link. Use for Links with caution.
[Give feedback on GitHub](https://github.com/ROXBOZ/pvssy-talk-app-router/issues/12)
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
export const Primary = () => {
  return (
    <div style={{ display: "flex", gap: 24 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LinkButton
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
        <LinkButton
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
        <LinkButton
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
        <LinkButton
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
export const Secondary = () => {
  return (
    <div style={{ display: "flex", gap: 24 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LinkButton label="Default" color="secondary" href="/" />
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
        <LinkButton
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
        <LinkButton
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
        <LinkButton label="Disabled" color="secondary" href="/" disabled />
        <span style={{ marginTop: 8, fontSize: 12 }}>Disabled</span>
      </div>
    </div>
  );
};
export const Border = () => {
  return (
    <div style={{ display: "flex", gap: 24 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LinkButton
          label="Default"
          color="border"
          href="/"
          hasArrow
          arrowDirection="bottom"
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
        <LinkButton
          label="Hover"
          color="border"
          href="/"
          className="ring-primary-300 border-primary-400 ring-2"
          hasArrow
          arrowDirection="bottom"
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
        <LinkButton
          label="Active"
          color="border"
          href="/"
          className="bg-primary-300 border-primary-400"
          hasArrow
          arrowDirection="bottom"
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
        <LinkButton
          label="Disabled"
          color="border"
          href="/"
          hasArrow
          arrowDirection="bottom"
          disabled
        />
        <span style={{ marginTop: 8, fontSize: 12 }}>Disabled</span>
      </div>
    </div>
  );
};
