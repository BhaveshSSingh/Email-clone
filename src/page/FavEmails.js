import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import EmailTab from "../components/EmailTab";

const FavEmails = () => {
  const [splitScreen, setSplitScreen] = useState("");

  const emailClickHandler = () => {
    setSplitScreen("flex");
  };
  const favEmails = useSelector((store) => store.filter);

  return (
    <div className={`${splitScreen}`}>
      <Link to="/email:id">
        {favEmails.map((email) => (
          // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
          <div onClick={emailClickHandler}>
            <EmailTab email={email} key={email.id} />
          </div>
        ))}
      </Link>

      <Outlet />
    </div>
  );
};

export default FavEmails;
