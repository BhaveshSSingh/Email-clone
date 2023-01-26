import { Link, useRouteError } from "react-router-dom";

const ErrorMsg = () => {
  const error = useRouteError();
  return (
    <div className="">
      An unexpected error occurred
      <div className="flex">
        <h1>Details: {error.statusText || error.message} </h1>
        <Link to="/">
          <button
            type="button"
            className="bg-blue-500 text-white p-2 rounded-md m-2"
          >
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorMsg;
