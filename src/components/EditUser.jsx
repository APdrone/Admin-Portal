import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { add, remove } from "../store/UserSlice";

const EditUser = ({ type }) => {
  // console.log("match", match.params.id);
  const history = useHistory();
  const match = useRouteMatch();

  const userList = useSelector((state) => state.userActions.users);
  const count = useSelector((state) => state.userActions.count);

  // const [submitType, setSubmitType] = useState(type);
  // console.log("submiType", type);
  let newId,
    newName = "",
    newEmail = "",
    newTitle = "",
    newRole = "",
    newStatus = "";
  if (match.params.id) {
    newId = match.params.id;
    let user = userList[match.params.id - 1];
    // console.log(user);
    ({
      name: newName,
      email: newEmail,
      title: newTitle,
      role: newRole,
      status: newStatus,
    } = user);
    // console.log("if called");
  } else {
    newId = count + 1;
    // newName = "";
    // newEmail = "";
    // newTitle = "";
    // newRole = "";
    // newStatus = "";

    // console.log("else called", newName);
  }

  const dispatch = useDispatch();

  const userErrors = {
    name: "",
    email: "",
    title: "",
    role: "",
    status: "",
  };

  const [id, setId] = useState(newId);
  const [name, setName] = useState(newName);
  const [email, setEmail] = useState(newEmail);
  const [title, setTitle] = useState(newTitle);
  const [role, setRole] = useState(newRole);
  const [status, setStatus] = useState(newStatus);
  const [error, setError] = useState(userErrors);
  const [errorStatus, setErrorStatus] = useState(true);

  useEffect(() => {
    // console.log("useEffect", type);
    if (type === "add") {
      // setId(id);
      setName("");
      setEmail("");
      setTitle("");
      setRole("");
      // setStatus("");
    }
  }, [type]);

  const handleChange = ({ target: { name: enteredName, value } }) => {
    console.log(enteredName, value);
    const err = { ...error };
    switch (enteredName) {
      case "name": {
        if (!value) {
          // setError({ ...err, name: "* Userid is required" });
          err.name = "* Userid is required";
        } else {
          // setError({ ...err, name: "" });
          err.name = "";
        }
        setName(value);
        break;
      }
      case "email": {
        if (!value) {
          err.email = "* EmailId is required";
        } else {
          err.email = "";
        }
        setEmail(value);
        break;
      }
      case "title": {
        if (!value) {
          err.title = "* Title is required";
        } else {
          err.title = "";
        }
        setTitle(value);
        break;
      }
      case "role": {
        if (!value) {
          err.role = "* Role is required";
        } else {
          err.role = "";
        }
        setRole(value);
        break;
      }
      case "status": {
        console.log("status ::", enteredName, value);
        if (!value) {
          err.status = "* Status is required";
        } else {
          err.status = "";
        }
        setStatus(value);
        console.log("status ::", status);
        break;
      }

      // console.log(error);
    }
    setError(err);
    // console.log("if outside block", err);
    // console.log("else outside block", name, email, role, title, status);
    if (err.name || err.email || err.role || err.title) {
      setErrorStatus(true);
      console.log("if block", err.name, err.email, err.role, err.title);
    } else if (name && email && role && title) {
      setErrorStatus(false);
      console.log("else block", name, email, role, title, status);
    }
  };

  const updateResponse = (e) => {
    e.preventDefault();
    const newEntry = {
      id,
      name,
      email,
      title,
      role,
      status,
    };
    if (!errorStatus) {
      console.log(newEntry);
      dispatch(add(newEntry));
      setId("");
      setName("");
      setEmail("");
      setTitle("");
      setRole("");
      setStatus("");
      history.replace("/userSuccess");
    }

    // console.log("called on cancel");
  };

  return (
    <div className="col-span-5 justify-items-center bg-slate-50 relative ">
      <h1 className="text-center text-teal-700 font-bold tracking-wide mt-2 text-3xl underline underline-offset-2">
        {type === "add" ? "Submit" : "Edit"} User Details
      </h1>
      <div className="form-container">
        <form onSubmit={updateResponse}>
          {/* <div>
            <label htmlFor="id">Id</label>
            <input
              type="number"
              className=" "
              disabled
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div> */}
          <div className="my-3 ">
            <label htmlFor="name">Name</label>
            <span className="ml-12">{error.name}</span>
            <input
              name="name"
              className={`w-full  rounded-lg ${
                error.name
                  ? "focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  : ""
              }`}
              type="text"
              value={name}
              // onChange={(e) => setName(e.target.value)}
              onChange={handleChange}
            />
          </div>

          <div className="my-3">
            <label htmlFor="email">Email</label>
            <span className="ml-12">{error.email}</span>
            <input
              type="email"
              name="email"
              className={`w-full  rounded-lg ${
                error.email
                  ? "focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  : ""
              }`}
              value={email}
              // onChange={(e) => setEmail(e.target.value)}
              onChange={handleChange}
            />
          </div>
          <div className="my-3">
            <label htmlFor="title">Title</label>
            <span className="ml-12">{error.title}</span>
            <input
              type="text"
              name="title"
              className={`w-full  rounded-lg ${
                error.title
                  ? "focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  : ""
              }`}
              value={title}
              // onChange={(e) => setTitle(e.target.value)}
              onChange={handleChange}
            />
          </div>
          <div className="my-3 ">
            <label htmlFor="role">Role</label>
            <span className="ml-12">{error.role}</span>
            <input
              type="text"
              name="role"
              className={`w-full  rounded-lg ${
                error.role
                  ? "focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  : ""
              }`}
              value={role}
              // onChange={(e) => setRole(e.target.value)}
              onChange={handleChange}
            />
          </div>
          <div className="my-3">
            <label htmlFor="status">Status</label>
            <span className="ml-12">{error.status}</span>
            <select
              name="status"
              id="status"
              // className={`w-full rounded-lg ${
              //   error.status
              //     ? "focus:border-red-500 focus:ring-1 focus:ring-red-500"
              //     : ""
              // }`}
              className="w-full rounded-lg"
              value={status}
              // onChange={(e) => setStatus(e.target.value)}
              onChange={handleChange}
            >
              {/* <option value="">--Please choose an option--</option> */}
              <option value="Active">Active</option>
              <option value="Disable">InActive</option>
            </select>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              // onClick={() => history.replace("/userSuccess")}
              className={`text-white bg-cyan-500 rounded-full px-5 py-3 mx-2 hover:bg-cyan-600 w-36 ${
                errorStatus ? "opacity-25 cursor-not-allowed" : ""
              }`}
            >
              {type === "add" ? "Submit" : "Edit"}
            </button>

            <button
              type="button"
              onClick={() => history.goBack()}
              className="text-white bg-red-600 rounded-full px-5 py-3 mx-2 hover:bg-red-700 w-36 md:py-1 "
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
