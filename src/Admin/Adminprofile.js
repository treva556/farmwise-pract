import React from "react";
import Sidebar from "./Sidebar";
import Pendingshops from "./Pendingshops";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function Adminprofile() {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/pending" component={Pendingshops} />
      </Routes>
    </div>
  );
}

export default Adminprofile;