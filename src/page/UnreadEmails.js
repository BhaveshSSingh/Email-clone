import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import EmailTab from "../components/EmailTab";

const UnreadEmails = () => {
  const [splitScreen, setSplitScreen] = useState("");
  const emailClickHandler = () => {
    setSplitScreen("flex");
  };

  const unReadEmailList = useSelector((store) => store.email.unReadEmails);
  useEffect(() => {}, [unReadEmailList]);

  return (
    <div className={`${splitScreen}`}>
      <Link to="/email:id">
        {unReadEmailList.length === 0 ? (
          <div>No More Emails</div>
        ) : (
          unReadEmailList.map((email) => (
            // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
            <div onClick={emailClickHandler}>
              <EmailTab email={email} key={email.id} />
            </div>
          ))
        )}
      </Link>
      <Outlet />
    </div>
  );
};

export default UnreadEmails;
