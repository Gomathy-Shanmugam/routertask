import React from "react";

function Data({ item }) {
  return (
    <div
      className="card"
      style={{ height: "450px", width: "350px", margin: "10px" }}
    >
      <img
        src={item.img}
        class="card-img-top"
        alt="..."
        style={{ height: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <h6 style={{ color: "green" }}>READ MORE</h6>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{item.date}</li>
      </ul>
    </div>
  );
}

export default Data;
