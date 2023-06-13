import { useState } from "react";

const useInputs = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const onChnage = (event) => {
    console.log(event.target.name);
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return [values, onChnage, setValues];
};
export default useInputs;
