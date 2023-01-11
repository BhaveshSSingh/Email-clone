import { Link, useRouteError } from "react-router-dom";

const ErrorMsg = () => {
  const error = useRouteError();
  return (
    <div className="">
      You done Goofed up boy
      <div className="flex">
        <h1>Details: {error.statusText || error.message} </h1>
        <Link to="/">
          <button
            type="button"
            className="bg-accentClr text-textClr p-2 rounded-md m-2"
          >
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorMsg;
