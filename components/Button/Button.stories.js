import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    priority: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["hover", "active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showLabel: true,
    showIconEnd: true,
    showIconStart: true,
    label: "Label",
    priority: "primary",
    stateProp: "hover",
    disabled: true,
    priorityPrimaryClassName: {},
  },
};
