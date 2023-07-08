import { styled } from "styled-components";
import FIRSTIMG from "../img/1.jpg";

const EditAccount = () => {
  return (
    <>
      <S.Title>Edit Account</S.Title>
      <div>
        <img src={FIRSTIMG} alt="firstImg" />
      </div>
    </>
  );
};

export default EditAccount;

const Title = styled.div`
  margin: 50px;
  font-weight: bold;
  font-size: 30px;
`;

const S = { Title };
