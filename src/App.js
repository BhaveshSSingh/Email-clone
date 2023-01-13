import EmailList from "./components/EmailList";

const App = () => {
  return (
    <div className="bg-backGroundClr  text-textClr  p-8 h-full px-10 ">
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
      <EmailList />
    </div>
  );
};

export default App;
