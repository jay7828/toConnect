import React from "react";

function Loader() {
  return (
    <div
      className="loader__wrap"
      role="alertdialog"
      aria-busy="true"
      aria-live="polite"
      aria-label="Loading…"
    >
      <div className="loader" aria-hidden="true">
        <div className="loader__sq"></div>
        <div className="loader__sq"></div>
      </div>
    </div>
  );
}

export default Loader;
