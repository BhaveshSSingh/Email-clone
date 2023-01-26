import { Outlet } from "react-router-dom";
import Filters from "./components/Filters";
import Nav from "./components/nav/Nav";
import Panel from "./components/panel/Panel";

const App = () => {
  return (
    <div
      className="bg-gray-100  text-black  
    h-full  min-h-screen"
    >
      <Nav />
      {/* <span className="">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
        >
          <div className="flex justify-center items-center">
            <BsFillPencilFill className="mr-2" /> Compose
          </div>
        </button>

        <Filters />
      </span> */}
      <div className="flex">
        <Panel />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
