import { memo } from "react";

const Child_2 = ({ name, isCalled }) => {
  // console.log("Child is rendered, too🙆‍♀️");

  return (
    <div style={{ border: "3px solid skyblue", padding: "10px" }}>
      <h3>CHILD</h3>
      <p>FirstName: {name.firstName}</p>
      <p>LastName: {name.lastName}</p>
    </div>
  );
};

export default memo(Child_2);

/*
[React.memo로 최적화를 해주었는데 parentsAge에 변경이 생기면 Child_2도 다시 렌더링 되는 이유]
name이 전달받는 값이 객체이기 때문!
parentsAge state의 변화로 FamilyWithMemoAndCallback component가 다시 렌더링 될 때마다
name 변수는 초기화 되고, 매번 새로운 주소값을 갖는 객체를 할당받게 되므로
React.memo는 name 에 변화가 생긴 것으로 인식하기 때문에
Child_2가 받는 props에 age 관련 값이 없음에도 불구하고
parentsAge state가 변경될 때마다 Child_2도 다시 렌더링 되는 것!
>> 객체를 meoization 해주기! (with useMemo)
*/
