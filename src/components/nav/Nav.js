import Search from "./Search";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoJavascript } from "react-icons/io";
import { MdEmail, MdLightMode, MdPersonOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="z-50 header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02 dark:bg-gray-200 dark:text-white">
        <span className="w-3/12 underline flex items-center">
          <MdEmail size={40} className="text-purple-600" />
          <h3 className="text-purple-600 underline text-xl">InLook</h3>
        </span>

        <Search />
        {/* <div className="px-2 w-3/12 flex justify-end cursor-pointer"> */}
        <div>
          <img
            class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src="/docs/images/people/profile-picture-5.jpg"
            alt="avatar"
          />
        </div>
        {/* <Link to="/profile">
            <img
              className="w-10 h-10 object-fill rounded-full "
              src="https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg?w=2000"
              alt=""
            />
          </Link> */}
        <label class="relative inline-flex items-center mr-5 cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" checked />
          <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600" />
        </label>
      </div>
      {/* </div> */}
    </>
  );
};

export default Nav;
