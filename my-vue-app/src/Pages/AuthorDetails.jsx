import React, {useEffect, useState} from "react";
// import {useParams} from "react-router-dom";

function AuthorDetails({a, onDeleteAuthor}) {
    const {first_name, last_name} = a;

function handleDeleteClick() {
  fetch(`/api/authors/${a.id}`, {
    method: "DELETE",
  })
  .then((r) => r.json())
  .then(() => {
    onDeleteAuthor(d);
  });
}

  return ( 
 
    <div className="card">
    <img src='{image}' alt="divisionImage" />
    <div className="container">
      <div className="titles">
        {first_name}
        <button className="deleteBtn" onClick={handleDeleteClick}>
          Trash this Team!
        </button>
        </div>
        <ul className="divisionStats">
          <li>Match Played: {last_name}</li>
        </ul>
      </div>
      </div>
 
    )}

    export default AuthorDetails;