import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    message && <p style={{ color: "red", fontWeight: "bold" }}>{message}</p>
  );
};

export default ErrorMessage;
