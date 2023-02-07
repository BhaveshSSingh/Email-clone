import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchLetter } from "../../app/features/emailSlice";

const Search = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const searchHandler = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    dispatch(searchLetter(query));
  };

  return (
    <div className="w-[40%] ">
      <div className=" my-2">
        <form className="flex items-center">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-purple-300 dark:text-purple-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipeRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-purple-200 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-2.5  dark:bg-gray-400 dark:border-purple-600 dark:placeholder-gray-800 dark:white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              placeholder="Search"
              required
              value={query}
              onChange={searchHandler}
            />
          </div>
          <button
            onClick={searchHandler}
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-purple-700 rounded-lg border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
