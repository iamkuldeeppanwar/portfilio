import React, { useEffect, useState } from "react";
import "./Home.css";
import { MdContacts } from "react-icons/md";
import Modal from "../../../components/Modal/Modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import request from "../../../api";
import Loader from "../../../components/Loader/Loader";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import img from "../../../Thumbnails/WhatsApp Image 2023-12-21 at 3.20.48 PM.jpeg";

const Home = () => {
  const [windowOpen, setWindowOpen] = useState(false);
  const [Frontend, setFrontend] = useState([]);
  const [Backend, setBackend] = useState([]);
  const [Database, setDatabase] = useState([]);
  const [Tools, setTools] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [mainProjects, setMainProjects] = useState([]);
  const [moreProjects, setMoreProjects] = useState([]);

  const handleOpen = () => {
    setWindowOpen(!windowOpen);
  };

  useEffect(() => {
    getSkillsData();
    getProjectsData();
    getMoreProjectsData();
  }, []);

  const getSkillsData = async () => {
    try {
      setLoading(true);
      const { data } = await request("/get/skills");
      setFrontend(data.skills[0].Frontend);
      setBackend(data.skills[0].Backend);
      setDatabase(data.skills[0].Database);
      setTools(data.skills[0].Tools);
      setLoading(false);
    } catch (err) {
      console.log(err.msg);
    }
  };

  const getProjectsData = async () => {
    try {
      setLoading(true);
      const { data } = await request("/project/all");
      setMainProjects(data.project);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getMoreProjectsData = async () => {
    try {
      setLoading(true);
      const { data } = await request("/more/project");
      setMoreProjects(data.project);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container mx-auto px-6">
      <Modal open={windowOpen} handleOpen={handleOpen} />
      <div className="relative">
        <div className="mb-5 bg-img"></div>
        <div className="flex items-center flex-wrap justify-between w-full ">
          <div className="flex items-center gap-4 absolute sm:top-3 top-4 left-3">
            <img
              className="inline-block h-28 w-28 object-contain rounded-full ring-2 ring-white"
              src={img}
              alt="..."
            />
            <div>
              <h4 className="wordCarousel flex flex-col">
                <span className="text-high font-bold">HEY THERE,</span>
                <div className="flex">
                  <span className="font-bold text-sm sm:text-high">I AM:</span>
                  <ul className="flip5 text-sm sm:text-high">
                    <li>KULDEEP PANWAR</li>
                    <li>WEB DEVELOPER</li>
                  </ul>
                </div>
                <div className="text-normal font-normal md:block hidden">
                  Welcome to my site! I am web developer who willing to <br />{" "}
                  work with you to make your idea brilliant.
                </div>
              </h4>
            </div>
          </div>
          <div className="absolute right-4 top-2">
            <button
              onClick={() => handleOpen()}
              className="border-2 rounded-md p-1 hover:text-md transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <MdContacts color="#24A4DB" size={20} />
            </button>
          </div>
        </div>
      </div>

      <p className="text-xl font-bold my-5">PROJECTS</p>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-center gap-4">
        {!Loading ? (
          mainProjects?.map((project) => {
            return (
              <div className="rounded-t-lg" key={project.id}>
                <div className="relative">
                  <LazyLoadImage
                    className="rounded-t-lg h-52 text-"
                    width="100%"
                    alt="..."
                    effect="blur"
                    src={project.projectImage}
                  />
                  <div className="absolute inset-0 bg-green-50 opacity-20 rounded-lg"></div>
                </div>
                <div className="p-4 rounded-b-lg bg-white ">
                  <p className="text-black font-bold text-high cursor-pointer">
                    <Link to={project.hostedLink}>{project.projectName}</Link>
                  </p>
                  <div className="text-secondary text-normal">
                    {project.projectTechnology?.map((tech) => (
                      <>{tech}</>
                    ))}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <Loader />
        )}
      </div>

      <p className="text-xl my-5 font-bold">SKILLS</p>
      <div className="flex lg:justify-between justify-center items-center flex-wrap gap-3 mb-5">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center gap-4">
          <div className="p-4 bg-primary rounded-md sm:w-[120px] md:w-[150px] lg:w-[180px] xl:w-[200px] w-full">
            <p className="text-secondary font-bold text-high mb-3">Frontend</p>
            <ul className="flex flex-wrap gap-3">
              {!Loading ? (
                Frontend?.map((skl, index) => {
                  return (
                    <li
                      className={`p-1 text-sm font-medium bg-slate-800 rounded-md ${
                        skl === "REACT.JS" && `border border-blue-500`
                      }`}
                      key={index}
                    >
                      {skl}
                    </li>
                  );
                })
              ) : (
                <Loader />
              )}
            </ul>
          </div>

          <div className="p-4 bg-primary rounded-md sm:w-[120px] md:w-[150px] lg:w-[180px] xl:w-[200px] w-full">
            <p className="text-secondary font-bold text-high mb-3">Backend</p>
            <ul className="flex flex-wrap gap-3">
              {!Loading ? (
                Backend?.map((skl, index) => {
                  return (
                    <li
                      className={`p-1 text-sm font-medium bg-slate-800 rounded-md ${
                        skl === "NODE.JS" && `border border-green-500`
                      }`}
                      key={index}
                    >
                      {skl}
                    </li>
                  );
                })
              ) : (
                <Loader />
              )}
            </ul>
          </div>

          <div className="p-4 bg-primary rounded-md sm:w-[120px] md:w-[150px] lg:w-[180px] xl:w-[200px] w-full">
            <p className="text-secondary font-bold text-high mb-3">Database</p>
            <ul className="flex flex-wrap gap-3">
              {!Loading ? (
                Database?.map((skl, index) => {
                  return (
                    <li
                      className={`p-1 text-sm font-medium bg-slate-800 rounded-md ${
                        skl === "FIREBASE" && `border border-blue-500`
                      }`}
                      key={index}
                    >
                      {skl}
                    </li>
                  );
                })
              ) : (
                <Loader />
              )}
            </ul>
          </div>

          <div className="p-4 bg-primary rounded-md sm:w-[120px] md:w-[150px] lg:w-[180px] xl:w-[200px] w-full">
            <p className="text-secondary font-bold text-high mb-3">Tools</p>
            <ul className="flex flex-wrap gap-3">
              {!Loading ? (
                Tools?.map((skl, index) => {
                  return (
                    <li
                      className={`p-1 text-sm font-medium bg-slate-800 rounded-md ${
                        skl === "POSTMAN" && `border border-red-500`
                      }`}
                      key={index}
                    >
                      {skl}
                    </li>
                  );
                })
              ) : (
                <Loader />
              )}
            </ul>
          </div>
        </div>
        <div className="p-4 bg-primary rounded-md sm:w-[300px] w-full ">
          <p className="text-secondary font-bold text-high mb-3">
            More Projects
          </p>
          <div>
            <ul className="flex flex-col gap-3">
              {moreProjects?.map((moreProject) => {
                return (
                  <>
                    <li className="flex justify-between" key={moreProject.id}>
                      <Link to={moreProject.hostedLink}>
                        {moreProject.projectName}
                      </Link>
                      <div>
                        <FaAngleRight />
                      </div>
                    </li>
                    <hr />
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
