export interface InputProps extends React.HTMLProps<HTMLInputElement> {}

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={`input${
        typeof className !== "undefined" ? " " + className : ""
      }`}
    />
  );
};

export default Input;
