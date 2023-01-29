import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllEmails,
  fetchEmailBody,
  saveClickedEmail,
} from "../app/features/emailSlice";
import { addToUnReadEmails } from "../app/features/emailSlice";
import { addToReadEmails } from "../app/features/emailSlice";
import EmailTab from "./EmailTab";
import Shimmer from "./loading/Shimmer";
import { Link } from "react-router-dom";

const AllEmailList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllEmails());
  }, []);

  const allEmails = useSelector((state) => state.email.listOfEmails);

  const emailClickHandler = (email) => {
    dispatch(addToReadEmails(email));
    dispatch(addToUnReadEmails(email));
    dispatch(fetchEmailBody(email.id));
    dispatch(saveClickedEmail(email));
  };

  return (
    <>
      <div>
        <div>
          {allEmails.length === 0 ? (
            <div className="pt-3">
              <Shimmer />
            </div>
          ) : (
            allEmails.map((email) => (
              <div onClick={() => emailClickHandler(email)} key={email.id}>
                <Link to={`/${email.id}`}>
                  <EmailTab email={email} />
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default AllEmailList;
