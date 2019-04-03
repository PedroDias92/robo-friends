import React from "react";

export default function Scroll(props) {
  console.log(props);
  return (
    <div
      style={{
        overflowY: "auto",
        border: "1px solid black",
        height: "500px"
      }}
    >
      {props.children}
    </div>
  );
}
