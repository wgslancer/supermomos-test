import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export interface DateProps extends ReactDatePickerProps {}

const Date = ({ className, ...props }: DateProps) => {
  return (
    <ReactDatePicker
      {...props}
      className={`date${
        typeof className !== "undefined" ? ` ${className}` : ""
      }`}
    />
  );
};

export default Date;
