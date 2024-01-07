import { HoverState } from ".";

export default {
  title: "Components/HoverState",
  component: HoverState,
  argTypes: {
    stateProp: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "hover",
    className: {},
    text: "Item",
  },
};
