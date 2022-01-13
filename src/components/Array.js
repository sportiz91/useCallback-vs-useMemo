import React, { useState, useEffect } from "react";

const Array = ({ blacky, makeItems }) => {
  const [arrayItems, setArrayItems] = useState([]);

  useEffect(() => {
    setArrayItems(makeItems());
    console.log("shot");
  }, [makeItems]);

  return (
    <div className={`the-array ${blacky ? "blacky" : "whity"}`}>
      {arrayItems.map((number) => (
        <h1 key={number} style={{ borderBottom: "1px solid green" }}>
          {number}
        </h1>
      ))}
    </div>
  );
};

export default Array;
