import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { fetchAllEmails } from "../app/features/emailSlice";
import { addToUnReadEmails } from "../app/features/emailSlice";
import { addToReadEmails } from "../app/features/emailSlice";
import EmailTab from "./EmailTab";

const EmailList = () => {
  const [splitScreen, setSplitScreen] = useState("");

  const allEmails = useSelector((state) => state.email.listOfEmails);

  useEffect(() => {
    dispatch(fetchAllEmails());
  }, []);

  const dispatch = useDispatch();

  const emailClickHandler = (email) => {
    setSplitScreen("flex");

    dispatch(addToReadEmails(email));
    dispatch(addToUnReadEmails(email));
  };

  return (
    <>
      <div className={`${splitScreen}`}>
        <Link to="/email:id">
          {allEmails.map((email) => (
            // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
            <div onClick={() => emailClickHandler(email)}>
              <EmailTab email={email} key={email.id} />
            </div>
          ))}
        </Link>

        <Outlet />
      </div>
    </>
  );
};

export default EmailList;
