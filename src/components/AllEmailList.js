import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllEmails,
  fetchEmailBody,
  saveClickedEmail,
} from "../app/features/emailSlice";
import { addToUnReadEmails } from "../app/features/emailSlice";
import { addToReadEmails } from "../app/features/emailSlice";
import EmailTab from "./EmailTab";
import EmailBody from "./EmailBody";
import Shimmer from "./loading/Shimmer";

const AllEmailList = () => {
  const [splitScreen, setSplitScreen] = useState("");
  const [hidden, setHidden] = useState("hidden");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllEmails());
  }, []);
  const allEmails = useSelector((state) => state.email.listOfEmails);

  const emailClickHandler = (email) => {
    setSplitScreen("flex");
    setHidden("");

    dispatch(addToReadEmails(email));
    dispatch(addToUnReadEmails(email));
    dispatch(fetchEmailBody(email.id));
    dispatch(saveClickedEmail(email));
  };

  return (
    <>
      <div className={`${splitScreen}`}>
        <div>
          {allEmails.length === 0 ? (
            <div className="pt-3">
              <Shimmer />
            </div>
          ) : (
            allEmails.map((email) => (
              <div onClick={() => emailClickHandler(email)} key={email.id}>
                <EmailTab email={email} />
              </div>
            ))
          )}
        </div>

        <div
          className={`h-fit rounded-lg border border-gray-400 pr-9  pt-6 mt-4 bg-white ml-6 flex  max-w-[60%] ${hidden}`}
        >
          <EmailBody />
        </div>
      </div>
    </>
  );
};

export default AllEmailList;
