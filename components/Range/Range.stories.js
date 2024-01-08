import { Range } from ".";

export default {
  title: "Components/Range",
  component: Range,
  tags: ['autodocs'],
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
    stateProp: "default",
    value1: "zero",
    className: {},
  },
};
