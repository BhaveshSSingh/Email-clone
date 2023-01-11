import { Link } from "react-router-dom";
import EmailTab from "./EmailTab";

const EmailList = () => {
  return (
    <div>
      <span>
        <p className="pr-4 inline-block">Filter By:</p>
        <button type="button" className="p-1  rounded-full hover w-[70px]">
          Unread
        </button>
        <button
          type="button"
          className="p-1 rounded-full bg-filterButton w-[70px] border border-borderClr mx-3"
        >
          Read
        </button>
        <button type="button" className="p-1 rounded-full w-[70px]">
          Favorites
        </button>
      </span>

      <Link to="/email:id">
        <div>
          <EmailTab />
          <EmailTab />
          <EmailTab />
          <EmailTab />
          <EmailTab />
          <EmailTab />
          <EmailTab />
          <EmailTab />
          <EmailTab />
          <EmailTab />
          <EmailTab />
          <EmailTab />
          <EmailTab />
          <EmailTab />
          <EmailTab />
          <EmailTab />
        </div>
      </Link>
    </div>
  );
};

export default EmailList;
