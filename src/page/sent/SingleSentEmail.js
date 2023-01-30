import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Shimmerbody from "../../components/loading/Shimmerbody";

const SingleSentEmail = () => {
  const emailData = useSelector((store) => store.message.selectedMessage);
  return (
    <>
      <div className="border  border-purple-300 rounded-lg p-2 flex justify-between w-[88vw]">
        <Link to="/sent">
          <button
            type="button"
            className="text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:focus:ring-purple-800"
          >
            <BiArrowBack />
          </button>
        </Link>
        <div>
          <button
            type="button"
            className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
          >
            <BsFillPencilFill />
          </button>{" "}
          <button
            type="button"
            className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
          >
            <AiFillDelete />
          </button>
        </div>
      </div>{" "}
      <div className="border mt-4  p-9 border-purple-300 rounded-lg  flex ">
        <div className="pr-6 pl-9 text-gray-100 ">
          <div className="w-16 h-16 object-fill rounded-full  bg-purple-500 p-[15px] flex  justify-center">
            <div className="text-2xl">{emailData?.to?.substring(0, 1)}</div>
          </div>
        </div>
        <div className="flex flex-col pt-3 ">
          <div className="flex justify-between">
            <div className="pr-1 font-bold text-3xl text-black dark:text-gray-400">
              {emailData?.subject}
            </div>
            {/* <button
              type="button"
              className="rounded-full h-[35px] bg-purple-500 w-[150px] text-gray-200"
              //   onClick={() => favBtnHandler()}
            >
              Mark as favorite
            </button> */}
          </div>

          <span className="py-4">
            <div>{new Date(emailData?.date?.seconds * 1000).toUTCString()}</div>
          </span>
          <div className="pb-16">
            {!emailData?.short_description ? (
              <Shimmerbody />
            ) : (
              emailData?.short_description
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleSentEmail;
