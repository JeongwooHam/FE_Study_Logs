import { styled } from "styled-components";
import SECONDIMG from "../img/2.jpg";

const DeleteAccount = () => {
  return (
    <>
      <S.Title>Delete Account</S.Title>
      <div>
        <img src={SECONDIMG} alt="secondImg" />
      </div>
    </>
  );
};

export default DeleteAccount;

const Title = styled.div`
  margin: 50px;
  font-weight: bold;
  font-size: 30px;
`;

const S = { Title };
