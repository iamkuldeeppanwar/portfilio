import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import request from "../../../api";

const AddResume = () => {
  const [resume, setResume] = useState("");

  const handleReume = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", resume);
    const { data } = await request.post("/add/resume", formData);
    console.log(data);
  };

  return (
    <div className="w-full mb-5 bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Resume
        </h1>
        <form className="max-w-lg mx-auto" onSubmit={handleReume}>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            for="user_avatar"
          >
            Upload file
          </label>
          <input
            className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            required
            onChange={(e) => setResume(e.target.files[0])}
            type="file"
          />
          <button
            type="submit"
            className="flex text-white mt-5 bg-[#24A4DB] hover:bg-primary-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            <IoIosAdd size={20} />
            Add Resume
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddResume;
