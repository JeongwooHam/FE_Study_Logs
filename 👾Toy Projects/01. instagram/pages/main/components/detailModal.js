import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faEyeSlash,
  faCircleUser,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useOpenModal } from "../context/open-modal";

const DetailModal = () => {
  const { isOpenModal, handleModal } = useOpenModal();
  if (isOpenModal) {
    return (
      <>
        <S.Wrapper onClick={() => handleModal()}></S.Wrapper>
        <S.ModalContainer>
          <S.ModalContent>
            <FontAwesomeIcon icon={faCircleInfo} />
            광고가 뜨는 이유
          </S.ModalContent>
          <hr />
          <S.ModalContent>
            <FontAwesomeIcon icon={faEyeSlash} />
            숨기기
          </S.ModalContent>
          <hr />
          <S.ModalContent>
            <FontAwesomeIcon icon={faCircleUser} />
            계정 정보
          </S.ModalContent>
          <hr />
          <S.ModalContent style={{ color: "red" }}>
            <FontAwesomeIcon icon={faExclamation} />
            신고
          </S.ModalContent>
        </S.ModalContainer>
      </>
    );
  }
};

export default DetailModal;

const Wrapper = styled.div`
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalContainer = styled.div`
  z-index: 1001;
  width: 300px;
  height: 260px;
  position: fixed;
  top: 42%;
  left: 48%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 35px;
`;

const ModalContent = styled.div`
  width: 100%;
  height: 40px;
  padding-top: 5%;
`;

const S = { Wrapper, ModalContainer, ModalContent };
