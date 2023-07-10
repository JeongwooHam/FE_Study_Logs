import { styled } from "styled-components";
import Toggle from "./toggle";
import { TOGGLELIST } from "../../consts/CONSTS";

const NavBar = () => {
  return (
    <S.Container>
      {TOGGLELIST.map((toggle, i) => (
        <Toggle key={i} toggle={toggle} />
      ))}
    </S.Container>
  );
};

export default NavBar;

const Container = styled.div`
  position: absolute;
  left: 0;
  width: 400px;
  height: calc(100% - 50px);
  background-color: #f9f5f6;
`;

const S = { Container };
