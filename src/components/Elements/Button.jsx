import React from "react";

export const Button = (props) => {
  const { color, children, icon } = props;
  return (
    <button className={`${color} mx-2`}>
      {children} <i class={icon}></i>
    </button>
  );
};
