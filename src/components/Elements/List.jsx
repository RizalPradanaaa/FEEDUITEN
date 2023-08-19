import React from "react";

export const List = (props) => {
  const { icon, children, date, total, text = "", icon_color = "" } = props;
  return (
    <div className="row d-flex my-3 align-items-center">
      <div className="col-8 col-md-6 d-flex ">
        <i className={`${icon} icon icon2 mx-2 ${icon_color}`}></i>
        <div className="d-flex flex-column mx-3">
          <h5>{children}</h5>
          <p>{date}</p>
        </div>
      </div>
      <div className="col-4 col-md-6 d-flex justify-content-end">
        <b className={`mx-2 ${text}`}>Rp. {total},-</b>
      </div>
    </div>
  );
};
