import React from "react";
import "./style.css";

const Loader: React.FC = () => (
  <div className="spinner-box">
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  </div>
);

export default Loader;
