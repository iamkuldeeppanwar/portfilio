import React from "react";

import { MdMarkEmailRead } from "react-icons/md";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Modal = ({ open, handleOpen }) => {
  return (
    <div className="flex justify-center">
      <div
        id="progress-modal"
        tabindex="-1"
        aria-hidden="true"
        className={`${
          !open ? "hidden" : "block"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full md:left-[35%] lg:left-[40%] top-28 ">
          <div className="relative bg-white rounded-lg shadow dark:bg-primary">
            <button
              onClick={() => handleOpen()}
              type="button"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="progress-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5">
              <svg
                className="w-5 h-5 text-gray-400 dark:text-secondary mb-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M8 5.625c4.418 0 8-1.063 8-2.375S12.418.875 8 .875 0 1.938 0 3.25s3.582 2.375 8 2.375Zm0 13.5c4.963 0 8-1.538 8-2.375v-4.019c-.052.029-.112.054-.165.082a8.08 8.08 0 0 1-.745.353c-.193.081-.394.158-.6.231l-.189.067c-2.04.628-4.165.936-6.3.911a20.601 20.601 0 0 1-6.3-.911l-.189-.067a10.719 10.719 0 0 1-.852-.34 8.08 8.08 0 0 1-.493-.244c-.053-.028-.113-.053-.165-.082v4.019C0 17.587 3.037 19.125 8 19.125Zm7.09-12.709c-.193.081-.394.158-.6.231l-.189.067a20.6 20.6 0 0 1-6.3.911 20.6 20.6 0 0 1-6.3-.911l-.189-.067a10.719 10.719 0 0 1-.852-.34 8.08 8.08 0 0 1-.493-.244C.112 6.035.052 6.01 0 5.981V10c0 .837 3.037 2.375 8 2.375s8-1.538 8-2.375V5.981c-.052.029-.112.054-.165.082a8.08 8.08 0 0 1-.745.353Z" />
              </svg>

              <div className="flex items-center gap-2 mb-3 text-sm font-bold text-gray-900 dark:text-secondary">
                <MdMarkEmailRead size={20} />
                <div>kuldeep10panwar@gmail.com</div>
              </div>

              <div className="flex items-center gap-2 mb-3 text-sm font-bold text-gray-900 dark:text-secondary">
                <FiGithub color="#2a9d8f" size={20} />
                <Link to="https://github.com/iamkuldeeppanwar">
                  https://github.com/iamkuldeeppanwar
                </Link>
              </div>

              <div className="flex gap-2 text-sm font-bold text-gray-900 dark:text-secondary">
                <FiLinkedin color="#0277b5" size={26} />
                <Link to="https://www.linkedin.com/in/kuldeep-singh-panwar-b12486210">
                  https://www.linkedin.com/in/kuldeep-singh-panwar-b12486210
                </Link>
              </div>

              {/* <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                <div
                  className="bg-orange-500 h-2.5 rounded-full"
                  //   style="width: 85%"
                ></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
