import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
              <Link to={`/${email.id}`}>
                <EmailTab email={email} key={email.id} />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReadEmails;
