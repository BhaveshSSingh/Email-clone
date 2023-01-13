import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const EmailBody = () => {
  const [emailBody, setEmailBody] = useState("");

  useEffect(() => {
    getEmailBody();
  }, []);

  const getEmailBody = async () => {
    const data = await fetch(
      "https://flipkart-email-mock.vercel.app/?id=5"
    ).then((res) => res.json());
    setEmailBody(data.body);
    console.log(data);
  };

  return (
    <>
      <div className=" h-fit rounded-lg border border-borderClr pr-9  pt-6 mt-4 bg-white ml-6 flex ">
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
