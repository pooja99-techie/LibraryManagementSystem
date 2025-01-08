import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ crumbs }) => {
  return (
    <div className="breadcrumb">
      {crumbs.map((crumb, index) => (
        <span key={index}>
          {crumb.path ? <Link to={crumb.path}>{crumb.name}</Link> : crumb.name}
          {index < crumbs.length - 1 && " / "}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
