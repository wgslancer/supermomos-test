import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`button${className ? ` ${className}` : ""}`}
    />
  );
};

export default Button;
