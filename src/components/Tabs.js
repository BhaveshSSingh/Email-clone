import { useState } from "react";
import FavEmails from "../page/FavEmails";
import ReadEmails from "../page/ReadEmails";
import UnreadEmails from "../page/UnreadEmails";
import AllEmailList from "./AllEmailList";

const Tabs = () => {
  const [toggleTab, setToggleTab] = useState("All");

  const selectTab = (content) => {
    setToggleTab(content);
  };

  return (
    <>
      <div className="flex rounded-lg border border-purple-300 p-2 w-[88vw]">
        <button
          type="button"
          className={`p-1 w-[90px] rounded-full   ${
            toggleTab === "All"
              ? "active_tab  dark:bg-gray-600 dark:text-gray-100"
              : ""
          }`}
          onClick={() => selectTab("All")}
        >
          All
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
          Unread
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
          Read
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
          Favorites
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
    </>
  );
};

export default Tabs;
