import Button, { ButtonProps } from "@/components/base/Button";

interface AddBannerButtonProps extends ButtonProps {}

const AddBannerButton = ({ className, ...props }: AddBannerButtonProps) => {
  return (
    <Button
      {...props}
      className={`add-banner-btn${className ? ` ${className}` : ""}`}
    />
  );
};

export default AddBannerButton;
