import { Toggle } from ".";

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    stateProp: {
      options: ["hover", "active", "default"],
      control: { type: "select" },
    },
    checked: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showLabel: true,
    showHelp: true,
    helpLabel: "Contextual help message",
    value: "Input value",
    label: "Label",
    isFocused: false,
    stateProp: "hover",
    checked: "off",
    disabled: true,
    className: {},
    toggleClassName: {},
    toggle: "/img/toggle-5.svg",
  },
};
