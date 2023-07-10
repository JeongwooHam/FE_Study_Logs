import { memo } from "react";

const Child_3 = ({ name, isCalled }) => {
  console.log("Child is rendered, too🙆‍♀️");

  return (
    <div style={{ border: "3px solid skyblue", padding: "10px" }}>
      <h3>CHILD</h3>
      <p>FirstName: {name.firstName}</p>
      <p>LastName: {name.lastName}</p>
      <button onClick={isCalled}>Is function called?</button>
    </div>
  );
};

export default memo(Child_3);

/*
React.memo를 통해 최적화되어 있음에도 불구하고
parentAge state의 변화로 렌더링이 다시 될 때마다
isCalled는 새로운 함수를 할당받게 되므로
매번 Child_3도 렌더링 됨
>> useCallback을 사용하여 최적화 가능
*/
