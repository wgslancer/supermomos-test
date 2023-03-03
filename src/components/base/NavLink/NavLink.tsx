interface NavLinkProps {
  children: React.ReactNode;
  className?: string;
  extraPopup?: boolean;
}

const NavLink = ({ children, className, extraPopup }: NavLinkProps) => {
  return (
    <li
      className={`nav${extraPopup ? ` nav-extra-popup` : ""}${
        typeof className !== "undefined" ? " " + className : ""
      }`}
    >
      {children}
      {extraPopup && (
        <div className="icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="#333333"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </li>
  );
};

export default NavLink;
