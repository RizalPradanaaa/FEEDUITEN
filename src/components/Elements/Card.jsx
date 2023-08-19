import React from "react";

export const Card = (props) => {
  const { icon, title, total, count, icon_color = "" } = props;
  return (
    <div className="col-md-6">
      <div className="card">
        <i className={`${icon} icon ${icon_color}`}></i>
        <p className="my-1">{title}</p>
        <h3>Rp. {total},-</h3>
        <p className="mb-1">
          <i className="fw-bold ">{count}</i> Transaksi
        </p>
      </div>
    </div>
  );
};
