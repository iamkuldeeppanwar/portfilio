import React from "react";
import routes from "../../routes";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const SideNav = ({ sideNavOpen, sideNav }) => {
  return (
    <div>
      <div
        className={`${
          sideNav
            ? "transform translate-x-0 sm:flex ml-5 mt-5"
            : "transform translate-x-[-100%] sm:transform sm:translate-x-0"
        } fixed sm:ml-5 sm:mt-5 rounded-md h-[40vh] transition-all duration-300 ease-in-out bg-primary z-20`}
      >
        <div className="flex flex-col py-5 px-7 ">
          <div className="sm:hidden flex justify-end ">
            <IoMdClose
              onClick={() => sideNavOpen()}
              size={20}
              className="cursor-pointer text-secondary "
            />
          </div>
          {routes.map((com, index) => {
            return (
              <div
                key={index}
                className="flex items-center py-3 gap-3 text-secondary hover:text-md transform hover:scale-110 transition-all duration-300 ease-in-out"
              >
                {com.icon}
                <Link onClick={() => sideNavOpen()} to={com.path}>
                  {com.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SideNav;
