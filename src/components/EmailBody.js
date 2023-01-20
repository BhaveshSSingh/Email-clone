import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { addToFavEmails } from "../app/features/emailSlice";

const EmailBody = () => {
  const dispatch = useDispatch();

  const emailbody = useSelector((store) => store.email.emailBody);
  const clickedEmailInfo = useSelector((store) => store.email.clickedEmail);

  const date = clickedEmailInfo?.date;

  const favBtnHandler = (clickedEmailInfo) => {
    dispatch(addToFavEmails(clickedEmailInfo));
  };

  return (
    <>
      <div className="pr-6 pl-9 text-backGroundClr">
        <div className="w-16 h-16 object-fill rounded-full  bg-accentClr p-[15px] flex  justify-center">
          <div className="text-2xl">
            {clickedEmailInfo?.from?.name.substring(0, 1)}
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-3">
        <div className="flex justify-between">
          <div className="pr-1 font-bold text-3xl text-textClr">
            {clickedEmailInfo?.subject}
          </div>
          <button
            type="button"
            className="rounded-full h-[35px] bg-accentClr w-[150px]   text-readBackgound"
            onClick={() => favBtnHandler()}
          >
            Mark as favorite
          </button>
        </div>

        <span className="py-4">
          <Moment format="DD/MM/yyyy hh:mma">{date}</Moment>
        </span>
        <div className="pb-16">
          {emailbody?.data?.body?.replace(/[<div></div><p></p>]/g, "")}
        </div>
      </div>
    </>
  );
};

export default EmailBody;
