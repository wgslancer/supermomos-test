import Input, { InputProps } from "@/components/base/Input";

interface EditTitleInputProps extends InputProps {}

const EditTitleInput = ({ className, ...props }: EditTitleInputProps) => {
  return (
    <Input
      {...props}
      className={`edit-title-input${
        typeof className !== "undefined" ? ` ${className}` : ""
      }`}
    />
  );
};

export default EditTitleInput;
