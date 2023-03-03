interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={`box${
        typeof className !== "undefined" ? " " + className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Box;
