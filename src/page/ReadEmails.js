import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import EmailTab from "../components/EmailTab";

const ReadEmails = () => {
  const [splitScreen, setSplitScreen] = useState("");

  const emailClickHandler = () => {
    setSplitScreen("flex");
  };
  const readEmails = useSelector((store) => store.readEmail);

  // const removeDupe = (readEmails) => {
  //   return readEmails.filter(
  //     (item, index) => readEmails.indexOf(item) === index
  //   );
  // };

  return (
    <div className={`${splitScreen}`}>
      <Link to="/email:id">
        {readEmails.map((email) => (
          // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
          <div onClick={emailClickHandler}>
            <EmailTab email={email} key={email.id} />
          </div>
        ))}
        {/* {readEmails.map((email) => (
          <div onClick={emailClickHandler}>
            <EmailTab email={email} key={email.id} />
          </div>
        ))} */}
      </Link>

      <Outlet />
    </div>
  );
};

export default ReadEmails;
