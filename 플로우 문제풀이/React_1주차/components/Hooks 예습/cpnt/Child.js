import { memo } from "react";

// name과 age props의 변화가 없으면 굳이 렌더링 될 필요 없는 컴포넌트
const Child = ({ name, age }) => {
  // 부모의 parentsAge, chlldAge가 변경될 때마다 다시 렌더링 되고, 콘솔이 찍힘
  // 부모 나이 변경 버튼을 누르면 자녀 나이에는 영향이 없음에도 불구하고
  // 자식 컴포넌트는 계속 다시 렌더링 됨
  // console.log("Child is rendered, too🙆‍♀️");

  return (
    <div style={{ border: "3px solid skyblue", padding: "10px" }}>
      <h3>CHILD</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default memo(Child);

/*
[React.memo]
component를 인자로 받아서 또 다른 component를 return하는 '함수'.
Child component를 인자로 받아서 최적화된 Child component를 return 해준 것.
최적화된 Child component는 
렌더링이 될 상황(parentsAge의 변경으로 Famliy component가 다시 렌더링 될 떄)에 놓일 때마다
Prop Check를 수행하여 props (name, age) 중 하나라도 변경이 있다면 렌더링 허락.
아니라면 이전에 이미 렌더링된 component의 렌더링 결과 재사용

자녀 나이를 증가시키는 버튼이 눌리는 경우
childAge state에 변화가 생겨 받아오는 age 값이 바뀌므로 렌더링을 수행함.
parentsAge state만 변한 경우 childAge state의 값은 그대로이므로 렌더링 수행하지 않음.
*/
