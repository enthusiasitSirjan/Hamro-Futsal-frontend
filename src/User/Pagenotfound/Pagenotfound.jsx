import React from "react";
import pagenotfound from "../../assets/pagenotfound.png";

const PageNotFound = () => {
  const GoHome = () => {
    window.location.href = "/";
  };
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="pg-main-content">
        <div>
          <img src={pagenotfound} alt="page-not-found" />
        </div>
        <div className="pg-nf-h">
          <h3>
            The page you requested can not be found. Please <br />
            press the button below to go to the index page.
          </h3>
        </div>
        <div className="btn-flex">
          <button onClick={GoHome}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <div>
                <svg
                  width="17"
                  height="15"
                  viewBox="0 0 17 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.50248 6.54172H16.1673V8.45839H4.50248L9.64298 13.5989L8.2879 14.954L0.833984 7.50006L8.2879 0.0461426L9.64298 1.40123L4.50248 6.54172Z"
                    fill="#1C0025"
                    opacity="0.5"
                  />
                </svg>
              </div>
              <div className="pg-nf-h">
                <h2 style={{ lineHeight: "0px" }}>Home</h2>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
