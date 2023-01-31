import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToReadEmails,
  addToUnReadEmails,
  fetchEmailBody,
  saveClickedEmail,
} from "../../app/features/emailSlice";
import EmailTab from "../../components/EmailTab";

const UnreadEmails = () => {
  const dispatch = useDispatch();

  const emailClickHandler = (email) => {
    dispatch(saveClickedEmail(email));

    dispatch(addToReadEmails(email));
    dispatch(addToUnReadEmails(email));
    dispatch(fetchEmailBody(email.id));
  };

  const unReadEmailList = useSelector((store) => store.email.unReadEmails);

  return (
    <div>
      <div>
        {unReadEmailList.length === 0 ? (
          <div className="">No More Emails</div>
        ) : (
          unReadEmailList.map((email) => (
            <Link to="/email:id" key={email.id}>
              <div onClick={() => emailClickHandler(email)}>
                <EmailTab email={email} />
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default UnreadEmails;
