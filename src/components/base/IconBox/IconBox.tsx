import Box from "../Box";

interface IconBoxProps {
  icon: JSX.Element;
  children: React.ReactNode;
  variant?: "title" | "subtitle";
  className?: string;
}

const variantClasses = {
  title: "title-information",
  subtitle: "subtitle-information",
};

const IconBox = ({
  children,
  icon,
  variant = "title",
  className,
}: IconBoxProps) => {
  return (
    <Box className="icon-container">
      {icon}
      <p
        className={`${variantClasses[variant]}${
          className ? ` ${className}` : ""
        }`}
      >
        {children}
      </p>
    </Box>
  );
};

export default IconBox;
