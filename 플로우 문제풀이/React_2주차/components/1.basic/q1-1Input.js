const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      style={{ textAlign: props.textAlign }}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Input;
