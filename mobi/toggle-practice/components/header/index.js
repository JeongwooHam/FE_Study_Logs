import { styled } from "styled-components";

const Header = () => {
  return (
    <S.Container>
      <div>🫠THIS IS AN ADMIN PAGE🫠</div>
    </S.Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #ff9eaa;
  color: white;
  font-size: 20px;
  line-height: 50px;
  font-weight: bold;
  letter-spacing: 5px;
`;

const S = { Container };
