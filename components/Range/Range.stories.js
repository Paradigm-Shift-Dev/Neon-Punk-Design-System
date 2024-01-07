import { Range } from ".";

export default {
  title: "Components/Range",
  component: Range,
  argTypes: {
    stateProp: {
      options: ["disabled", "hover", "active", "default"],
      control: { type: "select" },
    },
    value1: {
      options: ["zero"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    value: "Input value",
    showHelp: true,
    label: "Label",
    helpLabel: "100",
    showLabel: true,
    stateProp: "disabled",
    value1: "zero",
    className: {},
  },
};
