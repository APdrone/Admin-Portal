import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="col-span-full row-span-1 p-4 bg-gradient-to-r from-slate-300 to-slate-100 border-b-2 border-red-600 ">
      <div className="flex justify-between">
        <h1 className="text-2xl text-neutral-600 font-black">
          User Management
        </h1>
        <div className="flex">
          <div className="relative inline-block">
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              3+
            </span>

            <AiOutlineBell className="mx-2" />
          </div>

          <div className="relative inline-block">
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              7
            </span>

            <AiOutlineMail className="ml-4 mr-2" />
          </div>

          <h3 className="ml-4">Adam </h3>
          <img
            className="inline-block h-6 w-6 rounded-full ring-2 ring-white ml-2 mr-4"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
