import Tabs from "./components/Tabs";
import { BsFillPencilFill } from "react-icons/bs";

const App = () => {
  return (
    <div
      className="bg-gray-100  text-black  p-8 
    h-full px-10 "
    >
      <span className="">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
        >
          <div className="flex justify-center items-center">
            <BsFillPencilFill className="mr-2" /> Compose
          </div>
        </button>
        <p className="pr-4 pl-4 inline-block">Filter By:</p>
        <Tabs />
      </span>
    </div>
  );
};

export default App;
