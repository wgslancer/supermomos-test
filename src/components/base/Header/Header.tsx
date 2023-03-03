import Image from "next/image";
import Container from "../Container";
import NavLink from "../NavLink";
import NavList from "../NavList";

type NavLink = {
  name: string;
  path: string;
  extraPopup?: boolean;
  render?: () => JSX.Element;
};

const navLinks: Array<NavLink> = [
  { name: "Blog", path: "/blog" },
  { name: "Socials", path: "/socials" },
  { name: "Past Socials", path: "/past-socials" },
  {
    name: "Club",
    path: "/club",
    extraPopup: true,
    render: () => {
      return <div>Hello</div>;
    },
  },
  { name: "contact", path: "/contact" },
];

const Header = () => {
  return (
    <Container className="header">
      <Image
        src="/assets/images/header-logo.png"
        width={200}
        height={36}
        alt="Branding Logo"
      />

      <NavList>
        {navLinks.map(({ name, path, extraPopup }) => (
          <NavLink key={path} extraPopup={extraPopup}>
            {name}
          </NavLink>
        ))}
      </NavList>
    </Container>
  );
};

export default Header;
