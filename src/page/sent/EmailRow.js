import React from "react";

const EmailRow = ({ email }) => {
  const { subject, short_description, date } = email;
  return (
    <>
      <div className="border  border-gray-400 hover:border-purple-500 hover:bg-purple-500 hover:bg-opacity-5  min-h-32 pb-2 pt-3 my-4  flex rounded-lg cursor-pointer w-full ">
        <div className="pr-6 pl-6  text-gray-100">
          <div className="w-16 h-16 object-fill rounded-full  bg-purple-500 p-[15px] flex  justify-center">
            <div className="text-2xl">{email?.to?.substring(0, 1)}</div>
          </div>
        </div>

        <div className="p-3">
          <h3>
            From : <span className="pr-1 font-bold">{email?.to}</span>
          </h3>
          <h3 className="pb-3">
            Subject : <span className="pr-1 font-bold">{subject}</span>{" "}
          </h3>

          <p className="line__clamp">{short_description}</p>
          <div className="pt-2">
            <span className="pr-7">
              <div>{new Date(date?.seconds * 1000).toUTCString()}</div>
            </span>{" "}
            <span className="text-purple-500">{}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailRow;
