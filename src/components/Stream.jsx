import React from "react";
import Video from "./assets/video-slash-solid.svg";
import RedDot from "./assets/circle-solid.svg";

function Stream() {
  return (
    <div className="card">
      <div className="card-header fw-bold">
        <img className="red-dot" src={RedDot} alt="reddot" />
        Live Stream
      </div>
      <div className="card-body d-flex align-items-center justify-content-center">
        <img className="video-icon m-5" src={Video} alt="novideo" />
      </div>
    </div>
  );
}

export default Stream;
