import "./Error.css";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err); // Log the error for debugging

  return (
    <div className="error-page">
      {" "}
      {/* Apply the 'error-page' class */}
      <h1 className="error-heading"> Oops!</h1>
      <h2>Something Went Wrong</h2>
      {err?.status && (
        <h2 className="error-details">
          {err.status}: {err.statusText}
        </h2>
      )}
      <p>We're sorry, an unexpected error occurred. Please try again later.</p>
    </div>
  );
};

export default Error;
