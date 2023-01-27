import { AiOutlineStar } from "react-icons/ai";
import { BsFillPencilFill, BsFillPersonFill } from "react-icons/bs";
import { CiInboxIn } from "react-icons/ci";
import { SiMinutemailer } from "react-icons/si";
import { Link } from "react-router-dom";

const Panel = () => {
  return (
    <>
      <div className="z-30 bg-white h-[89vh] max-w-min-1/3 border border-b-0   shadow-lg dark:bg-gray-900 dark:text-white dark:border-gray-700">
        <ul className="pt-3 m-2">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-8"
          >
            <div className="flex justify-center items-center">
              <BsFillPencilFill className="mr-2" /> Compose
            </div>
          </button>
          <Link to="inbox">
            <li className="px-4 flex  justify-start items-center py-2 hover:bg-purple-700 hover:text-white cursor-pointer                   rounded-xl">
              <div className="px-2">
                <CiInboxIn color="" className="left-0" />
              </div>
              Inbox
            </li>
          </Link>
          <Link to="sent">
            <li className="flex items-center px-4 py-2 hover:bg-purple-700 hover:text-white cursor-pointer rounded-xl justify-start">
              <div className="px-2">
                <SiMinutemailer color="" />
              </div>
              Sent
            </li>
          </Link>
          <Link to="starred">
            <li className="flex items-center px-4 py-2 hover:bg-purple-700 hover:text-white cursor-pointer rounded-xl justify-start">
              <div className="px-2">
                <AiOutlineStar color="" />
              </div>
              Starred
            </li>
          </Link>
          <Link to="profile">
            <li className="flex items-center px-4 py-2 hover:bg-purple-700 hover:text-white cursor-pointer rounded-xl justify-start">
              <div className="px-2">
                <BsFillPersonFill color="" />
              </div>
              Profile
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Panel;
