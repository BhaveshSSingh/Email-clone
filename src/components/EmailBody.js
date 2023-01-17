import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getEmailBody } from "../api/fetchData";
import { addToFavEmails } from "../app/emailSlice";

const EmailBody = () => {
  const [emailBody, setEmailBody] = useState("");

  useEffect(() => {
    getEmailBody(setEmailBody);
  }, []);

  const getEmailBody = async (setEmailBody, id) => {
    const data = await fetch(
      `https://flipkart-email-mock.vercel.app/?id=${1}`
    ).then((res) => res.json());
    setEmailBody(data.body);
  };

  const dispatch = useDispatch();

  const favBtnHandler = (emailBody) => {
    dispatch(addToFavEmails(emailBody));
  };

  return (
    <>
      <div className=" h-fit rounded-lg border border-borderClr pr-9  pt-6 mt-4 bg-white ml-6 flex  max-w-[60%]">
        {/* body img */}
        <div className="pr-6 pl-9 text-backGroundClr">
          <div className="w-16 h-16 object-fill rounded-full  bg-accentClr p-[15px] flex  justify-center">
            <div className="text-2xl">F</div>
          </div>
        </div>
        {/* body */}
        <div className="flex flex-col pt-3">
          <div className="flex justify-between">
            <div className="pr-1 font-bold text-3xl text-textClr">
              Subject Name
            </div>
            <button
              type="button"
              className="rounded-full h-[35px] bg-accentClr w-[150px]   text-readBackgound"
              onClick={favBtnHandler}
            >
              Mark as favorite
            </button>
          </div>

          <span className="py-4">Date/2020 10:30am</span>
          <div className="pb-16">
            {emailBody.replace(/[<div></div><p></p>]/g, "")}
          </div>
        </div>

        <div>{/* kk */}</div>
      </div>
    </>
  );
};

export default EmailBody;
