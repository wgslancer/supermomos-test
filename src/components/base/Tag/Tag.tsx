import { CloseIcon } from "@/components/assets/Icon";
import Box from "../Box";
import Button, { ButtonProps } from "../Button";

interface TagProps extends ButtonProps {
  selected?: boolean;
}

const Tag = ({ children, selected, className, ...props }: TagProps) => {
  return (
    <Button
      {...props}
      type="button"
      className={`tag${!!selected ? " tag-selected" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
      {!!selected && (
        <Box className="tag-close-icon">
          <CloseIcon />
        </Box>
      )}
    </Button>
  );
};

export default Tag;
