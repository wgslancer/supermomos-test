interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`container${
        typeof className !== "undefined" ? " " + className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
