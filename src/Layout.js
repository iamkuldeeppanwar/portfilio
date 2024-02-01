import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header/Header";
import SideNav from "./components/Sidebar/SideNav";
import Login from "./pages/Admin/Login/Login";
import Dashboard from "./pages/Admin/Dashboad/Dashboard";
import Home from "./pages/Users/Home/Home";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const isAdmin = localStorage.getItem("admin")
    ? localStorage.getItem("admin")
    : false;

  useEffect(() => {
    if (isAdmin) {
      navigate("/admin/dashboard");
    }
  }, [isAdmin, navigate]);

  return (
    <>
      <div className="flex dark:bg-slate-800">
        <SideNav sideNavOpen={handleOpen} sideNav={isOpen} />
        <div className="flex-1 sm:ml-48 sm:p-8">
          <Header sideNavOpen={handleOpen} sideNav={isOpen} />
          <Routes>
            <Route path="/admin/login" element={<Login />} />
            {isAdmin && (
              <Route
                path="/admin/dashboard"
                element={<Dashboard isAdmin={isAdmin} />}
              />
            )}
            {routes.map((com, index) => {
              return (
                <Route key={index} path={com.path} element={com.component} />
              );
            })}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Layout;
