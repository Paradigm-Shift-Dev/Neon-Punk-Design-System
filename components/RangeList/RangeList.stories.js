import { RangeList } from ".";

export default {
  title: "Components/RangeList",
  component: RangeList,
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
    showHelp: true,
    label: "Label",
    helpLabel: "100",
    showLabel: true,
    state: "disabled",
    value1: "zero",
    className: {},
  },
};
