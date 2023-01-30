import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchEmailBody,
  saveClickedEmail,
} from "../../app/features/emailSlice";
import EmailTab from "../../components/EmailTab";

const ReadEmails = () => {
  const dispatch = useDispatch();

  const emailClickHandler = (email) => {
    dispatch(saveClickedEmail(email));

    dispatch(fetchEmailBody(email.id));
  };
  const readEmails = useSelector((store) => store.email.readEmails);
  return (
    <div>
      <div to="/email:id">
        {readEmails.length === 0 ? (
          <h1>No Read Emails</h1>
        ) : (
          readEmails.map((email) => (
            <div onClick={() => emailClickHandler(email)}>
              <Link to={`/${email.id}`} key={email.id}>
                <EmailTab email={email} />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReadEmails;
