import React from "react";
import { Outlet } from "react-router-dom";
import EmailBody from "./components/EmailBody";
import EmailList from "./components/EmailList";

const App = () => {
  const flex = () => {
    return "flex";
  };

  // figure out a way to add flex to styles onClick of the emailList or the tags do it inside
  return (
    <div
      className={`bg-backGroundClr  text-textClr  p-8 h-full px-10 
   flex`}
    >
      <EmailList />
      <Outlet />
      {/* show nothing in the start when clicked? show emailbody */}

      {/* <EmailBody /> */}
    </div>
  );
};

export default App;

// layout with just buttons
// then list inside and there have them in flex
