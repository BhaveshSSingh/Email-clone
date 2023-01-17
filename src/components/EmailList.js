import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { getEmailList } from "../api/fetchData";
import { fetchAllEmails } from "../app/features/emailSlice";
import { addToReadEmails } from "../app/features/readEmailSlice";
import EmailTab from "./EmailTab";

const EmailList = () => {
  const [emailList, setEmailList] = useState([]);
  const [splitScreen, setSplitScreen] = useState("");

  const allEmails = useSelector((state) => state.email.listOfEmails);

  useEffect(() => {
    getEmailList(setEmailList);
    dispatch(fetchAllEmails());
  }, []);

  const dispatch = useDispatch();

  const emailClickHandler = (email) => {
    setSplitScreen("flex");

    dispatch(addToReadEmails(email));
  };

  return (
    <>
      <div className={`${splitScreen}`}>
        <Link to="/email:id">
          {allEmails?.data?.list?.map((email) => (
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
