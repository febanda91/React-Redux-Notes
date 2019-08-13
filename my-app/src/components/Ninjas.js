import React from "react";
import "./Ninjas.css";

function Ninjas({ ninjas, deleteNinja }) {
  return ninjas.map(ninja => {
    return ninja.age > 25 ? (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <button onClick={() => deleteNinja(ninja.id)}>Delete Ninja</button>
      </div>
    ) : null;
  });
}

export default Ninjas;
