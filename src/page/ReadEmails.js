import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import EmailTab from "../components/EmailTab";

const ReadEmails = () => {
  const [splitScreen, setSplitScreen] = useState("");

  const emailClickHandler = () => {
    setSplitScreen("flex");
  };
  const readEmails = useSelector((store) => store.email.readEmails);

  return (
    <div className={`${splitScreen}`}>
      <Link to="/email:id">
        {readEmails.map((email) => (
          <div onClick={emailClickHandler}>
            <EmailTab email={email} key={readEmails.id} />
          </div>
        ))}
      </Link>

      <Outlet />
    </div>
  );
};

export default ReadEmails;
