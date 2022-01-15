import React from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineDashboard,
  AiOutlineHome,
  AiOutlineUserAdd,
  AiOutlineProfile,
} from "react-icons/ai";

const SideBar = () => {
  return (
    <>
      <div className="row-span-1 bg-gradient-to-r from-purple-500 to-pink-500 h-screen sm:h-auto">
        <div className="text-center text-white">
          <h3 className="py-3 border-b-2 border-slate-200 mb-4">
            <AiOutlineDashboard className="inline-block text-2xl mr-3" />
            Dashboard
          </h3>
          <ul className="flex flex-col justify-items-center content-center sm: flex-row">
            <li className=" py-3  ">
              <AiOutlineHome className=" inline-block text-2xl mr-3" />
              <NavLink activeStyle={{ color: "green" }} to="/home">
                Home
              </NavLink>
            </li>
            <li className="py-3">
              <AiOutlineUserAdd className="inline-block text-2xl mr-3 " />
              {/* <NavLink activeClassName="link" to="/addUser"> */}
              <NavLink activeStyle={{ color: "green" }} to="/addUser">
                Create
              </NavLink>
            </li>
            <li className="py-3">
              <AiOutlineProfile className="inline-block text-2xl mr-3" />
              <NavLink activeStyle={{ color: "green" }} to="/profile">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
