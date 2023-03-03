import Box from "../Box";
import Date, { DateProps } from "../Date";

interface IconDateProps extends DateProps {
  icon: JSX.Element;
}

const IconDate = ({ icon, className, ...props }: IconDateProps) => {
  return (
    <Box className={`icon-date-container${className ? ` ${className}` : ""}`}>
      <Box className="icon">{icon}</Box>
      <Date {...props} />
    </Box>
  );
};

export default IconDate;
