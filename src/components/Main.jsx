import "./Main.css";
import { useState, createRef } from "react";

function Main() {
  const [contentRef, setContentRef] = useState(() => createRef());

  return (
    <div className="Main">
      <div className="title-wrapper">
        <div className="icon-wrapper">
          <img
            src="https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f4dd.svg"
            alt=""
          />
        </div>
        <div className="controls"></div>
        <div className="title">
          <span
            contentEditable
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                contentRef.current.focus();
              }
            }}
          >
            메모
          </span>
        </div>
      </div>
      <div className="content-wrapper" contentEditable ref={contentRef}></div>
    </div>
  );
}

export default Main;
