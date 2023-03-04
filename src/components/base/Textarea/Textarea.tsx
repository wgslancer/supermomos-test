import { HTMLProps } from "react";

interface TextareaProps extends HTMLProps<HTMLTextAreaElement> {}

const Textarea = ({ className, ...props }: TextareaProps) => {
  return (
    <textarea
      {...props}
      className={`textarea${className ? ` ${className}` : ""}`}
    />
  );
};

export default Textarea;
