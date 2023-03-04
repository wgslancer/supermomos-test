import Button, { ButtonProps } from "../Button";

const variantClasses = {
  text: "variant-btn-text",
  contained: "variant-btn-contained",
};

type ButtonVariants = "text" | "contained";

interface VarianButtonProps extends ButtonProps {
  variant?: ButtonVariants;
}

const VariantButton = ({
  variant = "text",
  className,
  ...props
}: VarianButtonProps) => {
  return (
    <Button
      {...props}
      className={`variant-btn ${variantClasses[variant]} ${className}`}
    />
  );
};

export default VariantButton;
