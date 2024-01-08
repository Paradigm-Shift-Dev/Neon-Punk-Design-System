import { Input } from ".";

export default {
  title: "Components/Input",
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    stateProp: {
      options: ["active-focused", "hover", "default"],
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
    stateProp: "default",
    disabled: false,
    invalid: false,
    className: {},
    inputType: "text",
  },
};
