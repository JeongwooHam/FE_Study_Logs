import { useCallback, useMemo, useState } from "react";
import Child_2 from "./Hooks 예습/cpnt/Child_2";
import Child from "./Hooks 예습/cpnt/Child";
import Child_3 from "./Hooks 예습/cpnt/Child_3";

const FamilyWithMemo = () => {
  const [parentsAge, setParentsAge] = useState(0);

  const increaseParentAge = () => {
    setParentsAge(parentsAge + 1);
  };

  //   console.log("Parents are rendered🙆‍♀️");

  // parentAge state에 변경이 있을 때 Child_2 component가 렌더링 되는 것을 막아줌
  const name = useMemo(() => {
    return { lastName: "Ted", firstName: "Chiang" };
  }, []);

  return (
    <div style={{ border: "3px solid black", padding: "10px" }}>
      <h1>PARENTS</h1>
      <p>Age: {parentsAge}</p>
      <button onClick={increaseParentAge}>Parents' age is increased</button>
      <Child_2 name={name} />
    </div>
  );
};

export const FamilyWithCallback = () => {
  const [parentsAge, setParentsAge] = useState(0);

  const increaseParentAge = () => {
    setParentsAge(parentsAge + 1);
  };

  console.log("Parents are rendered🙆‍♀️");

  // isCalled 버튼이 눌릴 때에만 실행되도록 함
  const isCalled = useCallback(() => {
    console.log("The function is called.");
  }, []);

  return (
    <div style={{ border: "3px solid black", padding: "10px" }}>
      <h1>PARENTS</h1>
      <p>Age: {parentsAge}</p>
      <button onClick={increaseParentAge}>Parents' age is increased</button>
      <Child_3 name={"aaa"} isCalled={isCalled} />
    </div>
  );
};

export default FamilyWithMemo;
