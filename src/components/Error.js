import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div
      className="error-container"
      style={{ textAlign: "center", padding: "50px", color: "#fc6468" }}
    >
      <h1 style={{ color: "#f46464" }}>
        {err.status} {err.statusText}
      </h1>
      <p>
        Oops! The page you are looking for might be unavailable or does not
        exist.
      </p>
      <p>
        Please check the URL or go back to the <a href="/">homepage</a>.
      </p>
    </div>
  );
};

export default Error;
