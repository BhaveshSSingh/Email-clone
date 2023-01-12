import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getEmailList } from "../api/fetchData";
import EmailTab from "./EmailTab";

const EmailList = () => {
  const [emailList, setEmailList] = useState([]);

  useEffect(() => {
    getEmailList(setEmailList);
  }, []);

  const [splitScreen, setSplitScreen] = useState("");
  const addFlex = () => {
    setSplitScreen("flex");
  };

  return (
    <div className={`${splitScreen}`}>
      <Link to="/email:id">
        <div onClick={addFlex}>
          {emailList.map((email) => (
            <EmailTab email={email} key={email.id} />
          ))}
        </div>
      </Link>

      <Outlet />
    </div>
  );
};

export default EmailList;
