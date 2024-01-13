import { Link } from "@remix-run/react";

const NavbarLink = ({ children, to }) => {
  return (
    <li>
      <Link
        className="hover:bg-secondary-50 sm:hover:bg-transparent hover:sm:ring-0 sm:hover:text-secondary-500 transition-all hover:ring-1 ring-secondary-100 rounded-lg text-text-800 font-base block px-3 py-2"
        to={to}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavbarLink;
