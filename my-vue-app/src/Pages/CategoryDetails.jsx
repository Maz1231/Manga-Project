import React, {useEffect, useState} from "react";
// import {useParams} from "react-router-dom";

function CategoryDetails({c, onDeleteCategory}) {
    const {name} = c;

function handleDeleteClick() {
  fetch(`/api/categories/${c.id}`, {
    method: "DELETE",
  })
  .then((r) => r.json())
  .then(() => {
    onDeleteCategory(d);
  });
}

  return ( 
 
    <div className="card">
    <img src='{image}' alt="divisionImage" />
    <div className="container">
      <div className="titles">
        <button className="deleteBtn" onClick={handleDeleteClick}>
          Trash this Team!
        </button>
        </div>
        <ul className="divisionStats">
          <li>Match Played: {name}</li>
        </ul>
      </div>
      </div>
 
    )}

    export default CategoryDetails;