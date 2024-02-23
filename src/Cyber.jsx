import React from "react";
import Data from "./Data";

function Cyber({ carditems }) {
  const security = carditems.filter((item) => {
    return item.head === "cyber";
  });
  return (
    <div className="container">
      <div className="row">
        <h1 style={{ textAlign: "center" }}>
          <b>Cyber Security</b>
        </h1>
        {security.map((item) => {
          return <Data key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Cyber;
