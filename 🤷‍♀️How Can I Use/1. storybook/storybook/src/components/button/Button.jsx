import React from "react";
import * as S from "./button.style";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  color,
  size,
  isBorder,
  borderWeight,
  radius,
  label,
  ...props
}) => {
  const handleButtonClick = () => {
    alert(`${label} is Clicked!`);
  };
  return (
    <S.Button
      type="button"
      color={color}
      size={size}
      isBorder={isBorder}
      borderWeight={borderWeight}
      radius={radius}
      onClick={handleButtonClick}
    >
      {label}
    </S.Button>
  );
};

Button.defaultProps = {
  color: "primary",
  size: "medium",
  isBorder: false,
  radius: "primary",
  label: "This is an Input",
};
