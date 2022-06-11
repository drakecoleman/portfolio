import * as React from "react";
import Laptop from "../../Assets/laptop.jpg";

function greetings() {
  return (
    <div className="boxforImage">
      <div className="boxShadow"></div>
      <div className="heroDiv">
        <h1 className="heroName">Drake Coleman</h1>
        <h2>A Junior Developer</h2>
      </div>

      <img src={Laptop} />
    </div>
  );
}

export default greetings;
