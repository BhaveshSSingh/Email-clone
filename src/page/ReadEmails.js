import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmailBody, saveClickedEmail } from "../app/features/emailSlice";
import EmailBody from "../components/EmailBody";
import EmailTab from "../components/EmailTab";

const ReadEmails = () => {
  const [splitScreen, setSplitScreen] = useState("");
  const [hidden, setHidden] = useState("hidden");

  const dispatch = useDispatch();

  const emailClickHandler = (email) => {
    setSplitScreen("flex");
    setHidden("");
    dispatch(saveClickedEmail(email));

    dispatch(fetchEmailBody(email.id));
  };
  const readEmails = useSelector((store) => store.email.readEmails);
  return (
    <div className={`${splitScreen}`}>
      <div to="/email:id">
        {readEmails.length === 0 ? (
          <h1>No Read Emails</h1>
        ) : (
          readEmails.map((email) => (
            <div onClick={() => emailClickHandler(email)}>
              <EmailTab email={email} key={email.id} />
            </div>
          ))
        )}
      </div>
      <div
        className={`h-fit rounded-lg border border-gray-400 pr-9  dark:bg-gray-600 pt-6 mt-4 bg-white ml-6 flex  max-w-[60%] ${hidden}`}
      >
        <EmailBody />
      </div>
    </div>
  );
};

export default ReadEmails;
