import { Dropdown } from ".";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    state: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showLabel: true,
    helpLabel: "Helpful text to further explain the the Label",
    label: "Label",
    showHelp: true,
    value: "Input value",
    state: "default",
    className: {},
  },
};
