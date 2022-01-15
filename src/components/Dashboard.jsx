import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../store/UserSlice";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

const Dashboard = ({ history }) => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userActions.users);

  return (
    <div className="col-span-5 justify-items-center rounded bg-slate-200 p-4 h-screen sm:text-xs sm:p-1 ">
      <table className="grid grid-cols-1  p-2 rounded bg-slate-100 md:text-sm  sm:text-xs sm:grid-cols-none">
        <thead>
          <tr className="grid grid-cols-12  text-center p-2 justify-items-start bg-slate-50 p-2 sm:grid-cols-none sm:flex justify-around">
            <th className="col-span-1 sm:hidden ">Id</th>
            <th className="col-span-5">Name</th>
            <th className="col-span-2 sm:hidden">Title</th>
            <th className="col-span-1">Status</th>
            <th className="col-span-2 sm:hidden">Role</th>
            <th className="col-span-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.map(({ id, name, email, title, status, role }) => (
            <tr
              className="grid grid-cols-12 p-2 border-b-4 border-slate-200 sm:grid-cols-none sm:flex justify-around"
              key={id}
            >
              <td className="col-span-1 sm:hidden">{id}</td>
              <td className="col-span-5 ">
                {name}
                <span className="sm:hidden">{email}</span>
              </td>
              <td className="col-span-2 sm:hidden ">{title}</td>
              <td className="col-span-1 ">{status}</td>
              <td className="col-span-2 sm:hidden ">{role}</td>
              <td className="col-span-1">
                <button
                  className="mr-2.5"
                  href="#"
                  onClick={() => history.push(`/editUser/${id}`)}
                >
                  <AiOutlineEdit />
                </button>
                <button href="#" onClick={() => dispatch(remove(id))}>
                  <AiOutlineDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
