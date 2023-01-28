import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import {
  addToReadEmails,
  addToUnReadEmails,
  fetchEmailBody,
  saveClickedEmail,
} from "../app/features/emailSlice";
import EmailBody from "../components/EmailBody";
import EmailTab from "../components/EmailTab";

const UnreadEmails = () => {
  const [splitScreen, setSplitScreen] = useState("");
  const [hidden, setHidden] = useState("hidden");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailClickHandler = (email) => {
    setSplitScreen("flex");
    setHidden("");
    dispatch(saveClickedEmail(email));

    dispatch(addToReadEmails(email));
    dispatch(addToUnReadEmails(email));
    dispatch(fetchEmailBody(email.id));
  };

  const unReadEmailList = useSelector((store) => store.email.unReadEmails);

  return (
    <div className={`${splitScreen}`}>
      <div to="/email:id">
        {unReadEmailList.length === 0 ? (
          <div className="">No More Emails</div>
        ) : (
          unReadEmailList.map((email) => (
            <div onClick={() => emailClickHandler(email)} key={email.id}>
              <EmailTab email={email} />
            </div>
          ))
        )}
      </div>
      <Outlet />
      {/* <div
        className={`h-fit rounded-lg border border-gray-400 pr-9 dark:bg-gray-600  pt-6 mt-4 bg-white ml-6 flex  max-w-[60%] ${hidden}`}
      >
        <EmailBody />
      </div> */}
    </div>
  );
};

export default UnreadEmails;
