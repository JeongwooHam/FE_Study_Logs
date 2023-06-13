import { useState } from "react";

const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const onChnage = (e) => {
    setValue(e.target.value);
  };
  return [value, onChnage, setValue];
};
export default useInput;
