import React, { useEffect, useState } from "react";
import faq from "../API/faq.json";
import FAQ from "./UI/FAQ";

function Accordian() {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);

  const handleButton = (id) => {
    setActiveId((prev) => (prev === id ? false : id));
  };

  useEffect(() => {
    setData(faq);
  },[]);
  return (
    <>
      <h1>The Accordion</h1>
      <ul className="section-accordion">
        {data &&
          data.map((curElem, idx) => {
            return (
              <FAQ
                key={curElem.id}
                curElem={curElem}
                isActive={activeId === curElem.id}
                onToggle={()=>handleButton(curElem.id)}
              />
            );
          })}
      </ul>
    </>
  );
}

export default Accordian;
