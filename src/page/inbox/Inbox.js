import { useState } from "react";
import FavEmails from "./FavEmails";
import ReadEmails from "./ReadEmails";
import UnreadEmails from "./UnreadEmails";
import AllEmailList from "./AllEmailList";
import { useSelector } from "react-redux";

const Tabs = () => {
  const [toggleTab, setToggleTab] = useState("All");

  const selectTab = (content) => {
    setToggleTab(content);
  };
  const favEmail = useSelector((store) => store.email.favEmails);
  const readEmail = useSelector((store) => store.email.readEmails);
  const unReadEmail = useSelector((store) => store.email.unReadEmails);
  return (
    <div className="flex flex-col">
      <div className="flex rounded-lg border border-purple-300 p-2 max-w-full min-w-[88vw]">
        <button
          type="button"
          className={`p-1 w-[90px] rounded-full   ${
            toggleTab === "All"
              ? "active_tab  dark:bg-gray-600 dark:text-gray-100"
              : ""
          }`}
          onClick={() => selectTab("All")}
        >
          All 15
        </button>
        <button
          type="button"
          className={`p-1 w-[90px] rounded-full  ${
            toggleTab === "unread tab"
              ? "active_tab  dark:bg-gray-600 dark:text-gray-100"
              : ""
          }`}
          onClick={() => selectTab("unread tab")}
        >
          Unread {unReadEmail.length}
        </button>
        <button
          type="button"
          className={`p-1 mx-3 rounded-full w-[70px]   ${
            toggleTab === "read tab"
              ? "active_tab  dark:bg-gray-600 dark:text-gray-100"
              : ""
          }`}
          onClick={() => selectTab("read tab")}
        >
          Read {readEmail.length}
        </button>
        <button
          type="button"
          className={`p-1 rounded-full w-[100px]   ${
            toggleTab === "favorites tab"
              ? "active_tab  dark:bg-gray-600 dark:text-gray-100"
              : ""
          }`}
          onClick={() => selectTab("favorites tab")}
        >
          Favorites {favEmail.length}
        </button>
      </div>
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
    </div>
  );
};

export default Tabs;
