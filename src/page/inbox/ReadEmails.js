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

  const searchQuery = useSelector((state) => state.email.searchQuery);
  const searchFilteredData = () => {
    return readEmails.filter(
      (item) =>
        item.from.name.toLowerCase().includes(searchQuery) ||
        item.from.email.toLowerCase().includes(searchQuery) ||
        item.short_description.toLowerCase().includes(searchQuery) ||
        item.subject.toLowerCase().includes(searchQuery)
    );
  };

  return (
    <div>
      <div to="/email:id">
        {readEmails.length === 0 ? (
          <h1>No Read Emails</h1>
        ) : (
          searchFilteredData().map((email) => (
            <div onClick={() => emailClickHandler(email)} key={email.id}>
              <Link to={`/${email.id}`} key={email.id}>
                <EmailTab email={email} key={email.id} />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReadEmails;
