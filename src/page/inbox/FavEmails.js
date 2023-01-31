import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToFavEmails,
  fetchEmailBody,
  saveClickedEmail,
} from "../../app/features/emailSlice";
import EmailTab from "../../components/EmailTab";

const FavEmails = () => {
  const dispatch = useDispatch();

  const emailClickHandler = (email) => {
    dispatch(fetchEmailBody(email.id));
    dispatch(addToFavEmails(email));
    dispatch(saveClickedEmail(email));
  };
  const favEmailList = useSelector((store) => store.email.favEmails);

  return (
    <div>
      <div to="/email:id">
        {favEmailList.length === 0 ? (
          <h1>No Favorites Emails</h1>
        ) : (
          favEmailList.map((email) => (
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

export default FavEmails;
