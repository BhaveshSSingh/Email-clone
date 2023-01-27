import { Outlet } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Panel from "./components/panel/Panel";

const App = () => {
  return (
    <div
      className="bg-gray-100
         text-black  
       dark:bg-gray-800 dark:text-gray-100
    h-full  min-h-screen"
    >
      <Nav />
      <div className="flex">
        <Panel />

        <div className="p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
