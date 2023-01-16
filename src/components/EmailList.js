import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { getEmailList } from "../api/fetchData";
import { addToReadEmails } from "../app/emailSlice";
import EmailTab from "./EmailTab";

const EmailList = () => {
  const [emailList, setEmailList] = useState([]);
  const [splitScreen, setSplitScreen] = useState("");

  useEffect(() => {
    getEmailList(setEmailList);
  }, []);

  const dispatch = useDispatch();

  const emailClickHandler = (email) => {
    setSplitScreen("flex");

    dispatch(addToReadEmails(email));
  };

  return (
    <div className={`${splitScreen}`}>
      <Link to="/email:id">
        {emailList.map((email) => (
          <div onClick={() => emailClickHandler(email)}>
            <EmailTab email={email} key={email.id} />
          </div>
        ))}
      </Link>

      <Outlet />
    </div>
  );
};

export default EmailList;
