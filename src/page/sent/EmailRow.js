import React from "react";
import { useDispatch } from "react-redux";
import { selectMessage } from "../../app/features/messageSlice";

const EmailRow = ({ email, emailId }) => {
  // console.log(email);
  const { to, subject, short_description, date } = email;

  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectMessage({ emailId, to, subject, short_description, date }));
  };

  // console.log(uid);

  return (
    <>
      <div
        onClick={openMail}
        className="border  border-gray-400 hover:border-purple-500 hover:bg-purple-500 hover:bg-opacity-5  min-h-32 pb-2 pt-3 my-4  flex rounded-lg cursor-pointer w-[88vw] "
      >
        <div className="pr-6 pl-6  text-gray-100">
          <div className="w-16 h-16 object-fill rounded-full  bg-purple-500 p-[15px] flex  justify-center">
            <div className="text-2xl">{to?.substring(0, 1)}</div>
          </div>
        </div>

        <div className="p-3">
          <h3>
            From : <span className="pr-1 font-bold">{to}</span>
          </h3>
          <h3 className="pb-3">
            Subject : <span className="pr-1 font-bold">{subject}</span>{" "}
          </h3>

          <p className="line__clamp">{short_description}</p>
          <div className="pt-2">
            <span className="pr-7">
              <div>{new Date(date?.seconds * 1000).toUTCString()}</div>
            </span>{" "}
            {/* <span className="text-purple-500"> ddd</span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailRow;
