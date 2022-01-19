import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { add, remove } from "../store/UserSlice";

const EditUser = ({ type }) => {
  const history = useHistory();
  const match = useRouteMatch();

  const userList = useSelector((state) => state.userActions.users);
  const count = useSelector((state) => state.userActions.count);

  let newId,
    newName = "",
    newEmail = "",
    newTitle = "",
    newRole = "",
    newStatus = "";
  if (match.params.id) {
    newId = match.params.id;
    let user = userList[match.params.id - 1];

    ({
      name: newName,
      email: newEmail,
      title: newTitle,
      role: newRole,
      status: newStatus,
    } = user);
  } else {
    newId = count + 1;
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
    if (type === "add") {
      setName("");
      setEmail("");
      setTitle("");
      setRole("");
    }
  }, [type]);

  const handleChange = ({ target: { name: enteredName, value } }) => {
    const err = { ...error };
    switch (enteredName) {
      case "name": {
        if (!value) {
          err.name = "* Userid is required";
        } else {
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
        if (!value) {
          err.status = "* Status is required";
        } else {
          err.status = "";
        }
        setStatus(value);

        break;
      }

      // console.log(error);
    }
    setError(err);

    if (err.name || err.email || err.role || err.title) {
      setErrorStatus(true);
    } else if (name && email && role && title) {
      setErrorStatus(false);
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
      status: status || "Active",
    };
    if (!errorStatus) {
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
              onChange={handleChange}
            />
          </div>
          <div className="my-3">
            <label htmlFor="status">Status</label>
            <span className="ml-12">{error.status}</span>
            <select
              name="status"
              id="status"
              className="w-full rounded-lg"
              value={status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Disable">InActive</option>
            </select>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
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
