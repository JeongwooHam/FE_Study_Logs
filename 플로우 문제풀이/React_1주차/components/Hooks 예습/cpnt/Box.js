import { useEffect, useState } from "react";

const Box = ({ controlBoxStyle }) => {
  const [style, setStyle] = useState({});

  // Box 컴포넌트가 맨 처음 렌더링 될 때, prop으로 받아온 controlBoxStyle에 변화가 생길 때 호출됨
  // controlBoxStyle 함수가 return한 값을 setStyle을 통해 style state에 넣어줌

  // input을 통해 size state의 값이 변할 때마다 useEffect가 실행되는 이유는
  // size state의 변화로 MakeBoxChange '함수형' 컴포넌트가 다시 렌더링 될 때마다
  // 안에 들어있는 변수인 createBoxStyle이 초기화되고 새로운 함수가 할당되기 때문임
  // 새로운 함수가 매번 Box component에 prop으로 전달되므로 해당 prop을 dependency로 받는 useEffect가 실행되는 것
  useEffect(() => {
    // console.log("박스의 크기가 변화되었습니다.");
    setStyle(controlBoxStyle());
  }, [controlBoxStyle]);

  // style state가 빈 div 태그에 style로 들어가 박스를 만듦
  return <div style={style}></div>;
};

export default Box;
