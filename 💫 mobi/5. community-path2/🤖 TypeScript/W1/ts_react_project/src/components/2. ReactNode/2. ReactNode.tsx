import React, { ReactNode } from "react";

type NodeComponentProps = {
  children: ReactNode;
};

const NodeComponent = ({ children }: NodeComponentProps) => {
  return <>{children}</>;
};

export function COMPONENT1() {
  return (
    <div>
      <NodeComponent>
        <input />
      </NodeComponent>
    </div>
  );
}

export function COMPONENT2() {
  return (
    <div>
      <NodeComponent>나는 그냥 문자열!</NodeComponent>
    </div>
  );
}

export function COMPONENT3() {
  return (
    <div>
      <NodeComponent>
        {[1, "2", false].map((el) => (
          <div>{el}</div>
        ))}
      </NodeComponent>
    </div>
  );
}

export function COMPONENT4() {
  return (
    <div>
      <NodeComponent>
        <React.Fragment>
          <table>
            <tr>
              <td>FIRST</td>
              <td>SECOND</td>
            </tr>
          </table>
        </React.Fragment>
      </NodeComponent>
    </div>
  );
}
