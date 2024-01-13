import React from "react";

export default function NavigationMenu() {
  const [MenuOpen, setMenuOpen] = React.useState(false);
  return (
    <div className="">
      <button
        onClick={() => setMenuOpen(!MenuOpen)}
        className="border sm:hidden block ring-background-500 rounded ring-2 py-1 px-5"
      >
        MENU
      </button>
      <div className={`${MenuOpen ? "flex" : "hidden"} sm:flex`}>
        <ul className="flex items-center justify-between space-x-6  text-text">
          <li>
            <a className="hover:text-primary transition-all" href="">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-primary transition-all" href="">
              Projects
            </a>
          </li>
          <li>
            <a className="hover:text-primary transition-all" href="">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
