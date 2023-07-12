import "./input.style";

export const Input = ({ primary, size, placeholder, ...props }) => {
  const mode = primary
    ? "storybook-input--primary"
    : "storybook-input--secondary";
  return (
    <input
      className={["storybook-input", `storybook-input--${size}`, mode].join(
        " "
      )}
      placeholder={placeholder}
    />
  );
};

Input.defaultProps = {
  primary: true,
  size: "small",
  placeholder: "This is an Input",
};
