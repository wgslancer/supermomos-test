import Button, { ButtonProps } from "@/components/base/Button";
import Input from "@/components/base/Input";

interface AddBannerButtonProps extends ButtonProps {
  value: string;
  name: string;
}

const AddBannerButton = ({
  className,
  value,
  name,
  ...props
}: AddBannerButtonProps) => {
  return (
    <>
      <Button
        {...props}
        className={`add-banner-btn${className ? ` ${className}` : ""}`}
      />
      <Input type="hidden" value={value} name={name} />
    </>
  );
};

export default AddBannerButton;
