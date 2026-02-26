import React from "react";

function Student({ student }) {
  return (
    <div>
      {student.map((student, i) => (
        <div key={i}>
          <ul>
            <li>
              Student-{i + 1} {student.name}
            </li>
            <li>Age : {student.age}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Student;
