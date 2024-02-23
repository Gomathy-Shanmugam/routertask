import React from "react";
import Data from "./Data";

function Datascience({ carditems }) {
  const science = carditems.filter((item) => {
    return item.head === "datascience";
  });
  return (
    <div className="container">
      <div className="row">
        <h1 style={{ textAlign: "center" }}>
          <b>Data Science</b>
        </h1>
        {science.map((item) => {
          return <Data key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Datascience;
