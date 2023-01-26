import Search from "./Search";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoJavascript } from "react-icons/io";
import { MdEmail, MdLightMode, MdPersonOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="z-50 header sticky top-0 bg-white shadow-md flex items-center justify-between px-6 py-1 dark:bg-gray-200 dark:text-white">
        <span className="w-3/12 underline flex items-center">
          <MdEmail size={40} className="text-purple-600" />
          <h3 className="text-purple-600 underline text-xl">InLook</h3>
        </span>

        <Search />
        <div className="flex justify-center items-center">
          <div className="w-10 h-10  ring-2 p-1 object-fill rounded-full  bg-purple-500 flex  justify-center mr-4">
            <div className="text-2xl">Q</div>
          </div>

          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked />
            <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600" />
          </label>
        </div>
      </div>
    </>
  );
};

export default Nav;
