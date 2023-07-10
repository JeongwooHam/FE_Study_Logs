import { useState } from "react";
import Child from "./Hooks 예습/cpnt/Child";

const Family = () => {
  const [parentsAge, setParentsAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const increaseParentAge = () => {
    setParentsAge(parentsAge + 1);
  };

  const increaseChildAge = () => {
    setChildAge(childAge + 1);
  };

  // console.log("Parents are rendered🙆‍♀️");

  return (
    <div style={{ border: "3px solid black", padding: "10px" }}>
      <h1>PARENTS</h1>
      <p>Age: {parentsAge}</p>
      <button onClick={increaseParentAge}>Parents' age is increased</button>
      <button onClick={increaseChildAge}>Child's age is increased</button>
      <Child name={"aaa"} age={childAge} />
    </div>
  );
};

export default Family;
