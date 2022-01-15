import React from "react";

const ConfirmationBox = ({ history }) => {
  return (
    <div className="bg-white w-screen h-screen absolute top-0 opacity-80">
      <div className=" popup-container bg-slate-700 text-white rounded-lg p-6">
        <div>
          <p>
            User is successfully updated.Please share the user credentials with
            the user
          </p>
        </div>
        <div className="mt-4">
          <button
            className="text-white text-lg bg-lime-600 rounded-full px-4 py-3 mx-2 hover:bg-lime-700 w-36"
            onClick={() => history.replace("/home")}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationBox;
