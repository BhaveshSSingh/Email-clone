import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavEmails,
  fetchEmailBody,
  saveClickedEmail,
} from "../app/features/emailSlice";
import EmailBody from "../components/EmailBody";
import EmailTab from "../components/EmailTab";

const FavEmails = () => {
  const [splitScreen, setSplitScreen] = useState("");
  const [hidden, setHidden] = useState("hidden");

  const dispatch = useDispatch();

  const emailClickHandler = (email) => {
    setSplitScreen("flex");
    setHidden("");

    dispatch(fetchEmailBody(email.id));
    dispatch(addToFavEmails(email));
    dispatch(saveClickedEmail(email));
  };
  const favEmailList = useSelector((store) => store.email.favEmails);

  const removeDupe = (favEmailList) => {
    return favEmailList.filter(
      (item, index) => favEmailList.indexOf(item) === index
    );
  };

  return (
    <div className={`${splitScreen}`}>
      <div to="/email:id">
        {favEmailList.length === 0 ? (
          <h1>No Favorites Emails</h1>
        ) : (
          removeDupe(favEmailList).map((email) => (
            <div onClick={() => emailClickHandler(email)} key={email.id}>
              <EmailTab email={email} key={email.id} />
            </div>
          ))
        )}
      </div>
      <div
        className={`h-fit rounded-lg border border-gray-400 pr-9 dark:bg-gray-600  pt-6 mt-4 bg-white ml-6 flex  max-w-[60%] ${hidden}`}
      >
        <EmailBody />
      </div>
    </div>
  );
};

export default FavEmails;
