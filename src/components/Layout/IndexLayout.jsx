import React from "react";

export const IndexLayout = (props) => {
  const { children } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="mt-3">FEEDUITEN APPS</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="mt-3">Rp. 1.500.000,-</h2>
          <p>Sisa uang kamu tersisa 75% lagi</p>
        </div>
      </div>
      {children}
    </div>
  );
};
