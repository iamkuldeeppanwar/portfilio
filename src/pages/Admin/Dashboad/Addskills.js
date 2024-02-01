import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import request from "../../../api";

const Addskills = () => {
  const [skills, setSkills] = useState("");
  const [skill, setSkill] = useState("");
  const [chosenSkill, setChosenSkill] = useState({});

  const handleAddSkills = (e) => {
    e.preventDefault();
    if (skill.length === 0) return;
    const temp = chosenSkill;
    if (temp[skills]) {
      temp[skills].push(skill);
    } else {
      temp[skills] = [skill];
    }
    setSkill("");
    setChosenSkill(temp);
  };

  const handleSubmitSkills = async (e) => {
    e.preventDefault();
    try {
      const { data } = await request.post("/add/skills", {
        skills: chosenSkill,
      });
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Skills
        </h1>
        <form
          className="space-y-4 md:space-y-6"
          action="#"
          onSubmit={handleSubmitSkills}
        >
          <div>
            <label
              for="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>
            <select
              onChange={(e) => setSkills(e.target.value)}
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled selected>
                Choose a skills
              </option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Database">Database</option>
              <option value="Tools">Tools</option>
            </select>
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
                  onChange={(e) => setSkill(e.target.value)}
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Node.js"
                />
              </div>
              <button
                onClick={handleAddSkills}
                className=" text-white bg-[#24A4DB] hover:bg-primary-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add
              </button>
            </div>
            {chosenSkill[skills]?.map((tech, index) => {
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
            Add Skills
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addskills;
