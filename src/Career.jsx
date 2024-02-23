import React from "react";
import Data from "./Data";

function Career({ carditems }) {
  const car = carditems.filter((item) => {
    return item.head === "career";
  });
  return (
    <div className="container">
      <div className="row">
        <h1 style={{ textAlign: "center" }}>
          <b>Career</b>
        </h1>
        {car.map((item) => {
          return <Data key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Career;
