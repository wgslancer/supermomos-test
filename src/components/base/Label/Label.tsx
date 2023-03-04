import { HTMLProps } from "react";

interface LabelProps extends HTMLProps<HTMLLabelElement> {}

const Label = ({ className, ...props }: LabelProps) => {
  return (
    <label {...props} className={`label${className ? ` ${className}` : ""}`} />
  );
};

export default Label;
