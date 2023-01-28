import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { addToFavEmails } from "../app/features/emailSlice";
import { BiArrowBack } from "react-icons/bi";
import Shimmerbody from "../components/loading/Shimmerbody";
import { Link } from "react-router-dom";

const SingleEmailPage = () => {
  const dispatch = useDispatch();

  const emailbody = useSelector((store) => store.email.emailBody);
  const clickedEmailInfo = useSelector((store) => store.email.clickedEmail);

  const date = clickedEmailInfo?.date;

  const favBtnHandler = (clickedEmailInfo) => {
    dispatch(addToFavEmails(clickedEmailInfo));
  };
  return (
    <>
      <div className="border border-purple-300 rounded-lg p-2">
        <Link to="/inbox">
          <button
            type="button"
            class="text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:focus:ring-purple-800"
          >
            <BiArrowBack />
            <span class="sr-only">Icon description</span>
          </button>
        </Link>
        with maybe delete functionality ?
      </div>{" "}
      <div className="pr-6 pl-9 text-gray-100 ">
        <div className="w-16 h-16 object-fill rounded-full  bg-purple-500 p-[15px] flex  justify-center">
          <div className="text-2xl">
            {clickedEmailInfo?.from?.name.substring(0, 1)}
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-3 ">
        <div className="flex justify-between">
          <div className="pr-1 font-bold text-3xl text-black">
            {clickedEmailInfo?.subject}
          </div>
          <button
            type="button"
            className="rounded-full h-[35px] bg-purple-500 w-[150px] text-gray-200"
            onClick={() => favBtnHandler()}
          >
            Mark as favorite
          </button>
        </div>

        <span className="py-4">
          <Moment format="DD/MM/yyyy hh:mma">{date}</Moment>
        </span>
        <div className="pb-16">
          {!emailbody?.data?.body ? (
            <Shimmerbody />
          ) : (
            emailbody?.data?.body?.replace(/[<div></div><p></p>]/g, "")
          )}
        </div>
      </div>
    </>
  );
};

export default SingleEmailPage;
