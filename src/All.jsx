import React from "react";
import "./All.css";
import Data from "./Data";

function All({ carditems }) {
  return (
    <div className="container">
      <div className="row">
        {carditems.map((item) => {
          // console.log("item:", item);
          return <Data key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default All;
