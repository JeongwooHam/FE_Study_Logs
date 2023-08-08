import React, { ReactElement } from "react";

type ElComponent = {
  children: ReactElement;
};

const ElComponent = ({ children }: ElComponent) => {
  return <div>{children}</div>;
};

export function COMPONENT1() {
  return (
    <div>
      <ElComponent>
        <input />
      </ElComponent>
    </div>
  );
}

/*
'ElComponent' 구성 요소는 텍스트를 자식 요소로 수락하지 않습니다. 
JSX의 텍스트는 'string' 형식이지만, 
'children'의 필요한 형식은 'ReactElement<any, string | JSXElementConstructor<any>>'입니다.
*/
export function COMPONENT2() {
  return (
    <div>
      <ElComponent>나는 그냥 문자열!</ElComponent>
    </div>
  );
}

/*
'Element[]' 형식에 'ReactElement<any, string | JSXElementConstructor<any>>' 형식의 
type, props, key 속성이 없습니다.
*/
export function COMPONENT3() {
  return (
    <div>
      <ElComponent>
        {[1, "2", false].map((el) => (
          <div>{el}</div>
        ))}
      </ElComponent>
    </div>
  );
}

export function COMPONENT4() {
  return (
    <div>
      <ElComponent>
        <React.Fragment>
          <table>
            <tr>
              <td>FIRST</td>
              <td>SECOND</td>
            </tr>
          </table>
        </React.Fragment>
      </ElComponent>
    </div>
  );
}
