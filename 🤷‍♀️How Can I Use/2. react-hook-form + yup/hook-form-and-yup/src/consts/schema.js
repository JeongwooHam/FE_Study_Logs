import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .matches(/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i, {
      message: "이메일 형식에 맞지 않습니다.",
      excludeEmptyString: true,
    })
    .required("이메일을 입력해주세요"),
  password: yup
    .string()
    .matches(
      /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/,
      "비밀번호 양식을 맞춰주세요"
    )
    .required("비밀번호를 입력해주세요"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호와 일치하지 않습니다.")
    .required("비밀번호 확인을 진행해주세요."),
  name: yup.string().max(5).required("이름을 입력해주세요."),
  age: yup
    .string()
    .matches(/^[1-9][0-9]*$/, {
      message: "정확한 값을 입력해주세요",
      excludeEmptyString: true,
    })
    .required("나이를 입력해주세요"),
});

export default schema;
