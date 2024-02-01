import Home from "./pages/Users/Home/Home";
import Resume from "./pages/Users/Resume/Resume";
import { IoHomeOutline } from "react-icons/io5";
import { RxResume } from "react-icons/rx";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <IoHomeOutline size={23} />,
    component: <Home />,
  },
  {
    path: "/resume",
    name: "Resume",
    icon: <RxResume size={23} />,
    component: <Resume />,
  },
  {
    text: "Social",
    path: "https://www.linkedin.com/in/kuldeep-singh-panwar-b12486210/",
    name: "Linkedin",
    icon: <FiLinkedin color="#0277b5" size={23} />,
  },
  {
    text: "Social",
    path: "https://github.com/iamkuldeeppanwar",
    name: "Github",
    icon: <FiGithub color="#2a9d8f" size={23} />,
  },
];

export default routes;
