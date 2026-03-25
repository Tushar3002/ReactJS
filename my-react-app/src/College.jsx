import React from "react";
import Student from "./Student";

function College({ val }) {
  return (
    <div
      style={{
        backgroundColor: "lightgreen",
        padding: "10px",
        margin: "20px",
        border: "2px solid black",
        borderRadius: "20px",
        width: "400px",
        alignContent: "center",
      }}
    >
      <h3>CollegeName : {val.collegeName}</h3>
      <h3>City : {val.city}</h3>

      <div>
        <Student student={val.students} />
      </div>
    </div>
  );
}

export default College;