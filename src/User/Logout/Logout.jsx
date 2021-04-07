import React from "react";

const Logout = () => {
  localStorage.clear();
  window.location.href = "/";
  return <div></div>;
};

export default Logout;
