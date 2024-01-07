import { Checkbox } from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
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
    isFocused: false,
    label: "Label",
    helpLabel: "Contextual help message",
    showHelp: true,
    showLabel: true,
    stateProp: "hover",
    checked: "off",
    disabled: true,
    className: {},
    boxClassName: {},
    divClassName: {},
    divClassNameOverride: {},
  },
};
