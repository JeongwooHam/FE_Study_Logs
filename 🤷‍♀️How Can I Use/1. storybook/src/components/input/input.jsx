import "./input.style";
import { Input, Error, Container } from "./input.style";

export const CustomInput = ({ shape, size, placeholder, error, ...props }) => {
  return (
    <>
      <Container size={size}>
        <Input shape={shape} placeholder={placeholder} />
        {error && <Error>{error}</Error>}
      </Container>
    </>
  );
};

CustomInput.defaultProps = {
  shape: "primary",
  size: "small",
  placeholder: "This is an Input",
};
