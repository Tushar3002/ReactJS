import React, { useState } from "react";

function FAQ({ curElem,onToggle ,isActive}) {



  return (
    <li>
      <div className="accordion-grid">
        <p>{curElem.question}</p>
        <button onClick={onToggle} className={isActive?"active-btn":""}>{isActive?"Close":"Show"}</button>
      </div>
      <p>{isActive && curElem.answer}</p>
    </li>
  );
}

export default FAQ;
