import { Divide, Divide as Hamburger } from "hamburger-react";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import NavbarLink from "../ui/nav-link";
import { useLocation } from "@remix-run/react";
const Navbar = () => {
  var [openMenu, setOpenMenu] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);
  function OpenMenu() {
    setOpenMenu(!openMenu);
  }
  return (
    <nav className="bg-white/20 backdrop-blur-lg z-10  fixed w-full">
      <div className="container">
        <div className="flex h-14 items-center justify-between">
          <div className="bg-background-50 sm:hidden shadow rounded-full">
            <Divide size={25} toggled={openMenu} onToggle={OpenMenu} />
          </div>
          <div className="block">
            <span className="text-2xl font-bold text-secondary-500">
              <span>
                <span className="text-primary-500">Dadan</span>DEV_
              </span>
            </span>
          </div>
          <ul
            className={`fixed sm:relative sm:bg-transparent sm:opacity-100 sm:h-auto sm:top-0 sm:py-0 sm:border-none sm:w-auto sm:flex-row top-14 bg-background-50 left-0 w-full px-2 flex flex-col  gap-1 py-4 border-t opacity-0 transition-opacity ${
              openMenu ? "opacity-100" : ""
            }`}
          >
            <NavbarLink to={"/"}>Home</NavbarLink>
            <NavbarLink to={"/education"}>Education</NavbarLink>
            <NavbarLink to={"/portofolio"}>Portofolio</NavbarLink>

            <NavbarLink to={"/project"}>Projek</NavbarLink>
          </ul>
          <Icon
            className="bg-background-50 shadow rounded-full p-2"
            icon={`circum:dark`}
            width={40}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
