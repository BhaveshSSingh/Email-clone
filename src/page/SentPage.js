import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const SentPage = () => {
  return (
    <div>
      <div className="border  border-purple-300 rounded-lg p-2">
        <Link to="/inbox">
          <button
            type="button"
            className="text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:focus:ring-purple-800"
          >
            <BiArrowBack />
          </button>
        </Link>
      </div>
      <h3>to check </h3>
    </div>
  );
};

export default SentPage;
