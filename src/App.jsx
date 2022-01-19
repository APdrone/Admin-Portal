import "./App.css";

import { useState } from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { BrowserRouter } from "react-router-dom";
import UserRoutes from "./components/UserRoutes";
import { useSelector } from "react-redux";
import ConfirmationBox from "./components/ConfirmationBox";

function App() {
  const popupState = useSelector((state) => state.userActions.UserPopup);
  const [confirm, setConfirm] = useState(popupState);
  return (
    <BrowserRouter>
      <div className="container relative">
        <div className="grid grid-cols-6  sm:flex flex-col">
          <Navbar />

          <SideBar />
          {/* <Dashboard /> */}
          <UserRoutes />
        </div>
        {confirm && <ConfirmationBox />}
      </div>
    </BrowserRouter>
  );
}

export default App;
