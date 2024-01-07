import { CheckboxGroup } from ".";

export default {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
};

export const Default = {
  args: {
    required: false,
    label: "Group title",
    errorLabel: "Group error text",
    infoLabel: "Group information text",
    disabled: true,
    invalid: true,
    className: {},
  },
};
