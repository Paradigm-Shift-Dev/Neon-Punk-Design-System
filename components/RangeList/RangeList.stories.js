import { RangeList } from ".";

export default {
  title: "Components/RangeList",
  component: RangeList,
  tags: ['autodocs'],
  argTypes: {
    state: {
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
    showHelp: false,
    label: "Label",
    helpLabel: "100",
    showLabel: true,
    state: "default",
    value1: "zero",
    className: {},
  },
};
