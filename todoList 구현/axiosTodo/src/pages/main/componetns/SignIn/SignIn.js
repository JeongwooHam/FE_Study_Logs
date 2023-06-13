import * as S from "../style";
import BasicButton from "components/Button/Button";
import { useNavigate } from "react-router-dom";
import { SignInUser } from "context/auth";

const SignInForm = () => {
  const navigation = useNavigate();

  const onPressSignIn = async (e) => {
    e.preventDefault();
    console.log(e.target.email.value, e.target.password.value);
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await SignInUser(email, password);
      navigation("/todo/3");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <S.Form onSubmit={onPressSignIn}>
      <S.InputBox>
        <label>이메일</label>
        <input name="email" />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호</label>
        <input name="password" />
      </S.InputBox>
      <BasicButton size={"full"} shape={"default"} variant={"primary"}>
        로그인
      </BasicButton>
    </S.Form>
  );
};
export default SignInForm;
