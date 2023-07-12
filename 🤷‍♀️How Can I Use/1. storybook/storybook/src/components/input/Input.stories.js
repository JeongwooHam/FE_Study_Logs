import { Input } from "./input.jsx";

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "radio", options: ["small", "medium", "large"] },
  },
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  size: "small",
  placeholder: "This is an Input",
};
