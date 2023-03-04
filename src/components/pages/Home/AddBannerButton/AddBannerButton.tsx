import Button, { ButtonProps } from "@/components/base/Button";
import Input from "@/components/base/Input";
import { forwardRef } from "react";

interface AddBannerButtonProps extends ButtonProps {
  value: string;
  name: string;
}

// eslint-disable-next-line react/display-name
const AddBannerButton = forwardRef<HTMLButtonElement, AddBannerButtonProps>(
  ({ className, value, name, ...props }, ref) => {
    return (
      <>
        <Button
          {...props}
          ref={ref}
          className={`add-banner-btn${className ? ` ${className}` : ""}`}
        />
        <Input type="hidden" value={value} name={name} />
      </>
    );
  }
);

export default AddBannerButton;
