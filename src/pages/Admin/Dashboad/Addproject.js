import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import request from "../../../api";

const Addproject = () => {
  const [projectImage, setProjectImage] = useState("");
  const [projectName, setProjectName] = useState("");
  const [hostedLink, setHostedLink] = useState("");
  const [technology, setTechnology] = useState("");
  const [allTech, setAllTech] = useState([]);

  useEffect(() => {
    console.log(allTech);
  }, [allTech]);

  const handleTechnology = (e) => {
    e.preventDefault();
    if (technology.length === 0) return;
    setAllTech((prevState) => [...prevState, technology]);
    setTechnology("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(allTech);
    formData.append("image", projectImage);
    formData.append("projectName", projectName);
    formData.append("hostedLink", hostedLink);
    allTech.forEach((tech, index) => {
      formData.append("projectTechnology", tech);
    });

    try {
      const response = await request.post("/create/project", formData);

      const data = response.data;
      console.log(data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error(
          "Server responded with a non-2xx status code:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from the server:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Add Projects
        </h1>
        <form
          className="space-y-4 md:space-y-6"
          action="#"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-2">
            <div>
              <label
                for="website-admin"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Project Image
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <svg
                    className="h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input
                  className="block p-2 w-full text-sm text-gray-900 border border-gray-300 rounded-r-lg  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="user_avatar_help"
                  id="user_avatar"
                  required
                  onChange={(e) => setProjectImage(e.target.files[0])}
                  type="file"
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Project Name
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <svg
                    className="h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  id="website-admin"
                  required
                  values={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Blog App"
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Hosted Link
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <svg
                    className="h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  id="website-admin"
                  required
                  values={hostedLink}
                  onChange={(e) => setHostedLink(e.target.value)}
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="https://@example.com"
                />
              </div>
            </div>
          </div>

          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Add Technology
            </label>
            <div className="flex w-full gap-2">
              <div className="flex w-full">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <svg
                    className="h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="M7.24 7.194a24.16 24.16 0 0 1 3.72-3.062m0 0c3.443-2.277 6.732-2.969 8.24-1.46 2.054 2.053.03 7.407-4.522 11.959-4.552 4.551-9.906 6.576-11.96 4.522C1.223 17.658 1.89 14.412 4.121 11m6.838-6.868c-3.443-2.277-6.732-2.969-8.24-1.46-2.054 2.053-.03 7.407 4.522 11.959m3.718-10.499a24.16 24.16 0 0 1 3.719 3.062M17.798 11c2.23 3.412 2.898 6.658 1.402 8.153-1.502 1.503-4.771.822-8.2-1.433m1-6.808a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  id="website-admin"
                  required
                  values={technology}
                  onChange={(e) => setTechnology(e.target.value)}
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="React.js"
                />
              </div>
              <button
                onClick={handleTechnology}
                className=" text-white bg-[#24A4DB] hover:bg-primary-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add
              </button>
            </div>
            {allTech?.map((tech, index) => {
              return (
                <div
                  key={index}
                  className="inline-block ml-1 mt-2 bg-slate-400 px-2 py-1 text-xs font-semibold leading-none uppercase rounded-full"
                >
                  {tech}
                </div>
              );
            })}
          </div>

          <button
            type="submit"
            className="flex text-white bg-[#24A4DB] hover:bg-primary-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            <IoIosAdd size={20} />
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproject;
