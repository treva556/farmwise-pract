import React from "react";
import Sidebar from "./Sidebar";
import Pendingshops from "./Pendingshops";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Adminprofile() {
  return (
    // <BrowserRouter>
      <div className="flex">
        <Sidebar />
        {/* <Switch>
          <Route path="/pending" component={Pendingshops} />
          {/* Add more routes for other components 
        </Switch>
         */}
      </div>
    // </BrowserRouter>
  );
}

export default Adminprofile;