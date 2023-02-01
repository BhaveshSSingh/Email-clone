import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import EmailRow from "./EmailRow";
import Shimmer from "../../components/loading/Shimmer";

const SentPage = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const unSub = onSnapshot(
      query(collection(db, "message"), orderBy("date", "desc")),
      (snapshot) => {
        setEmails(snapshot.docs);
      }
    );
    return () => {
      unSub();
    };
  }, [db]);

  return (
    <div className="">
      <div className="border  w-[88vw]  border-purple-300 rounded-lg p-2">
        <Link to="/inbox">
          <button
            type="button"
            className="text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:focus:ring-purple-800"
          >
            <BiArrowBack />
          </button>
        </Link>
      </div>
      <div>
        {!emails && (
          <div className="pt-3">
            <Shimmer />
          </div>
        )}{" "}
        {emails.length === 0 ? (
          <div>"No Sent Emails"</div>
        ) : (
          emails.map((email) => (
            <Link key={email.id} to={`/sent/${email.id}`} email={email}>
              <EmailRow email={email.data()} emailId={email.id} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default SentPage;
