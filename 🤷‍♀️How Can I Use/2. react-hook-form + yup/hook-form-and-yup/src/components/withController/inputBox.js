import styled from "styled-components";

const InputBox = ({ name, register, errors }) => {
  return (
    <div>
      <label htmlFor={name}>{name.toUpperCase()}</label>
      <Container
        name={name}
        placeholder={name}
        {...register(name)}
        errors={errors[name]}
      />
      {errors[name] && <ERROR role="alert">{errors[name].message}</ERROR>}
    </div>
  );
};

export default InputBox;

const Container = styled.input`
  display: block;
  margin: 10px 0;
  width: 300px;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
  }
`;

const ERROR = styled.div`
  color: salmon;
  margin-bottom: 20px;
`;
