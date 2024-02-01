import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ sideNavOpen, sideNav }) => {
  return (
    <div className="sm:hidden fixed right-0 flex py-2 px-2 justify-end z-10">
      {!sideNav && (
        <GiHamburgerMenu
          className="cursor-pointer"
          onClick={() => sideNavOpen()}
          size={20}
        />
      )}
    </div>
  );
};

export default Header;
