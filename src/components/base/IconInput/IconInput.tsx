import Box from "../Box";
import Input, { InputProps } from "../Input";

interface IconInputProps extends InputProps {
  icon: JSX.Element;
}

const IconInput = ({ icon, className, ...props }: IconInputProps) => {
  return (
    <Box className={`icon-input-container${className ? ` ${className}` : ""}`}>
      <Box className="icon">{icon}</Box>
      <Input className="icon-input" {...props} />
    </Box>
  );
};

export default IconInput;
