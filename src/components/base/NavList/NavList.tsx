interface NavListProps {
  children: React.ReactNode;
  className?: string;
}

const NavList = ({ children, className }: NavListProps) => {
  return (
    <ul
      className={`nav-list${
        typeof className !== "undefined" ? " " + className : ""
      }`}
    >
      {children}
    </ul>
  );
};

export default NavList;
