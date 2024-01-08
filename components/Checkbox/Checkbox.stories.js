import { Checkbox } from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ['autodocs'],
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
    stateProp: "default",
    checked: "off",
    disabled: false,
    className: {},
    boxClassName: {},
    divClassName: {},
    divClassNameOverride: {},
  },
};
