import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import schema from "../../consts/schema";
import InputBox from "./inputBox";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <Title>SIGN UP</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <div>
          <label htmlFor="password">PASSWORD</label>
          <InputBox
            name="password"
            placeholder="password"
            {...register("password")}
            errors={errors["password"]}
          />
          {errors.password && (
            <ERROR role="alert">{errors.password.message}</ERROR>
          )}
        </div>
        <div>
          <label htmlFor="passwordConfirm">PASSWORD CONFIRM</label>
          <InputBox
            name="passwordConfirm"
            placeholder="password confirm"
            {...register("passwordConfirm")}
            errors={errors["passwordConfirm"]}
          />
          {errors.passwordConfirm && (
            <ERROR role="alert">{errors.passwordConfirm.message}</ERROR>
          )}
        </div>
        <div>
          <label htmlFor="name">NAME</label>
          <InputBox
            name="name"
            placeholder="name"
            {...register("name")}
            errors={errors["name"]}
          />
          {errors.name && <ERROR role="alert">{errors.name.message}</ERROR>}
        </div>
        <div>
          <label htmlFor="age">AGE</label>
          <InputBox
            name="age"
            placeholder="age"
            {...register("age")}
            errors={errors["age"]}
          />
          {errors.age && <ERROR role="alert">{errors.age.message}</ERROR>}
        </div> */}
        <InputBox name={"email"} register={register} errors={errors} />
        <InputBox name={"password"} register={register} errors={errors} />
        <InputBox
          name={"passwordConfirm"}
          register={register}
          errors={errors}
        />
        <InputBox name={"name"} register={register} errors={errors} />
        <InputBox name={"age"} register={register} errors={errors} />

        <div>
          <Button>SUBMIT</Button>
        </div>
      </form>
    </Container>
  );
};

export default SignUpForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  form {
    margin-top: 20px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 36px;
`;

// const InputBox = styled.input`
//   display: block;
//   margin: 10px 0;
//   width: 300px;
//   height: 50px;
//   border: none;
//   border-bottom: 1px solid black;
//   &:focus {
//     outline: none;
//   }
// `;

const Button = styled.button`
  background-color: "black";
  color: white;
  border: none;
  width: 100px;
  height: 50px;
  margin-left: 100px;
`;

const ERROR = styled.div`
  color: salmon;
  margin-bottom: 20px;
`;
