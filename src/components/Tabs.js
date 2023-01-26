import { useState } from "react";
import { useSelector } from "react-redux";
import FavEmails from "../page/FavEmails";
import ReadEmails from "../page/ReadEmails";
import UnreadEmails from "../page/UnreadEmails";
import AllEmailList from "./AllEmailList";
import EmailList from "./AllEmailList";

const Tabs = () => {
  const [toggleTab, setToggleTab] = useState("All");

  const allEmailLength = useSelector(
    (store) => store.email.listOfEmails.length
  );
  const unReadEmailLength = useSelector(
    (store) => store.email.unReadEmails.length
  );
  const readEmailLength = useSelector((store) => store.email.readEmails.length);
  const favEmailLength = useSelector((store) => store.email.favEmails.length);

  const selectTab = (content) => {
    setToggleTab(content);
  };

  return (
    <>
      <button
        type="button"
        className={`p-1 w-[90px] rounded-full ${
          toggleTab === "All" ? "active_tab" : ""
        }`}
        onClick={() => selectTab("All")}
      >
        All {allEmailLength}
      </button>
      <button
        type="button"
        className={`p-1 w-[90px] rounded-full ${
          toggleTab === "unread tab" ? "active_tab" : ""
        }`}
        onClick={() => selectTab("unread tab")}
      >
        Unread {unReadEmailLength === 0 ? "" : unReadEmailLength}
      </button>
      <button
        type="button"
        className={`p-1 mx-3 rounded-full w-[70px]  ${
          toggleTab === "read tab" ? "active_tab" : ""
        }`}
        onClick={() => selectTab("read tab")}
      >
        Read {readEmailLength === 0 ? "" : readEmailLength}
      </button>
      <button
        type="button"
        className={`p-1 rounded-full w-[100px]  ${
          toggleTab === "favorites tab" ? "active_tab" : ""
        }`}
        onClick={() => selectTab("favorites tab")}
      >
        Favorites {favEmailLength === 0 ? "" : favEmailLength}
      </button>
      {
        <>
          <div
            className={toggleTab === "All" ? "block min-h-screen" : "hidden"}
          >
            <AllEmailList />
          </div>

          <div
            className={
              toggleTab === "unread tab" ? "block min-h-screen" : "hidden"
            }
          >
            <UnreadEmails />
          </div>

          <div
            className={
              toggleTab === "read tab" ? "block min-h-screen" : "hidden"
            }
          >
            <ReadEmails />
          </div>

          <div
            className={
              toggleTab === "favorites tab" ? "block min-h-screen" : "hidden"
            }
          >
            <FavEmails />
          </div>
        </>
      }
    </>
  );
};

export default Tabs;
