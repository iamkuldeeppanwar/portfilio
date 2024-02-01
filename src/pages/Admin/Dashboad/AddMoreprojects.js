import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import request from "../../../api";

const AddMoreprojects = () => {
  const [projectName, setProjectName] = useState("");
  const [moreSkills, addMoreSkills] = useState("");
  const [hostedLink, setHostedLink] = useState("");
  const [allskills, setAllSkills] = useState([]);

  const handleSkills = (e) => {
    e.preventDefault();
    if (moreSkills.length === 0) return;
    setAllSkills((prevState) => [...prevState, moreSkills]);
    addMoreSkills("");
  };

  useEffect(() => {
    console.log(allskills);
  }, [allskills]);

  const handleMoreProjects = async (e) => {
    e.preventDefault();
    const skills = {
      projectName,
      hostedLink,
      projectTechnology: [...allskills],
    };
    try {
      const { data } = await request.post("/more/add/project", skills);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          More Projects
        </h1>
        <form
          className="space-y-4 md:space-y-6"
          action="#"
          onSubmit={handleMoreProjects}
        >
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
            <div>
              <label
                for="website-admin"
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
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Blog App"
                />
              </div>
            </div>

            <div>
              <label
                for="website-admin"
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
                  value={hostedLink}
                  onChange={(e) => setHostedLink(e.target.value)}
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="https://example.com"
                />
              </div>
            </div>
          </div>

          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Add Skills
            </label>
            <div className="flex w-full gap-2">
              <div className="flex w-full">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <svg
                    className="h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  id="website-admin"
                  required
                  value={moreSkills}
                  onChange={(e) => addMoreSkills(e.target.value)}
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="React.js"
                />
              </div>
              <button
                onClick={handleSkills}
                className=" text-white bg-[#24A4DB] hover:bg-primary-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add
              </button>
            </div>
            {allskills?.map((tech, index) => {
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
            <IoIosAdd size={20} /> Add More Projects
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMoreprojects;
