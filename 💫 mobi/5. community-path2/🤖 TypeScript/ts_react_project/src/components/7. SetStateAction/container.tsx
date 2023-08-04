import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface Props {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<Props> = ({ setIsModalOpen }) => {
  return (
    <S.Wrapper>
      <S.MoalContainer>
        <div>모달 확인하기</div>
        <div>CONTENTS</div>
        <div>
          <button onClick={() => setIsModalOpen(false)}>모달 닫기</button>
        </div>
      </S.MoalContainer>
    </S.Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const MoalContainer = styled.div`
  width: 500px;
  height: 500px;
  z-index: 10000;
  position: relative;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .closeBtn {
    z-index: 10001;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
`;

const S = { Wrapper, MoalContainer };
