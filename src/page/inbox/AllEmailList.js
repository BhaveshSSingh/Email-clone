import { useDispatch, useSelector } from "react-redux";
import {
  fetchEmailBody,
  saveClickedEmail,
} from "../../app/features/emailSlice";
import { addToUnReadEmails } from "../../app/features/emailSlice";
import { addToReadEmails } from "../../app/features/emailSlice";
import EmailTab from "../../components/EmailTab";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Shimmer from "../../helpers/loading/Shimmer";

const AllEmailList = () => {
  const dispatch = useDispatch();

  const allEmails = useSelector((state) => state.email.listOfEmails);

  const emailClickHandler = (email) => {
    dispatch(addToReadEmails(email));
    toast("Added to Read 📖");

    dispatch(addToUnReadEmails(email));
    dispatch(fetchEmailBody(email.id));
    dispatch(saveClickedEmail(email));
  };
  const searchQuery = useSelector((state) => state.email.searchQuery);

  const searchFilteredData = () => {
    return allEmails.filter(
      (item) =>
        item.from.name.toLowerCase().includes(searchQuery) ||
        item.from.email.toLowerCase().includes(searchQuery) ||
        item.short_description.toLowerCase().includes(searchQuery) ||
        item.subject.toLowerCase().includes(searchQuery)
    );
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
            searchFilteredData().map((email) => (
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
