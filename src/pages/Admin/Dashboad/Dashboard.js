import React, { useEffect } from "react";
import Addproject from "./Addproject";
import Addskills from "./Addskills";
import AddMoreprojects from "./AddMoreprojects";
import AddResume from "./AddResume";
import { useNavigate } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";

const Dashboard = ({ isAdmin }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/");
  };

  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
    }
  }, [isAdmin, navigate]);

  return (
    <section className="sm:dark:bg-gray-900 rounded-xl">
      <div className="flex justify-end items-center p-2 gap-2">
        <span className="cursor-pointer" onClick={handleLogout}>
          Logout
        </span>
        <MdOutlineLogout size={20} />
      </div>
      <div className="flex flex-col px-6 py-8 gap-6 lg:py-0">
        <div className="flex items-center justify-center mt-5 mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Admin Dashboard
        </div>
        <Addproject />
        <Addskills />
        <AddMoreprojects />
        <AddResume />
      </div>
    </section>
  );
};

export default Dashboard;
