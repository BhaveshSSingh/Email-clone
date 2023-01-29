import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Panel from "./components/Panel";
import SendMail from "./components/SendMail";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/inbox");
  }, []);

  const messageOpen = useSelector((store) => store.message.sendMessageIsOpen);

  return (
    <div
      className="bg-gray-100
         text-black  
       dark:bg-gray-800 dark:text-gray-100
    h-full  min-h-screen
    "
    >
      <Nav />
      <div className="flex">
        <Panel />

        <div className="p-2">
          <Outlet />
        </div>
      </div>
      {messageOpen && <SendMail />}
    </div>
  );
};

export default App;
