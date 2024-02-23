import React from "react";
import Data from "./Data";

function Fullstack({ carditems }) {
  const fsd = carditems.filter((item) => {
    return item.head === "fullstack";
  });
  return (
    <div className="container">
      <div className="row">
        <h1 style={{ textAlign: "center" }}>
          <b>Full Stack Development</b>
        </h1>
        {fsd.map((item) => {
          return <Data key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Fullstack;
