import React, {useEffect, useState} from "react";
// import {useParams} from "react-router-dom";

function AuthorDetails({a, onDeleteAuthor}) {
    const {image, bio, first_name, last_name} = a;

function handleDeleteClick() {
  fetch(`/api/authors/${a.id}`, {
    method: "DELETE",
  })
  onDeleteAuthor(a)
}

  return ( 
 
    <div>
    <div className="card">
    <img src={image} alt="AuthorImage" />
    <div className="container">
      <div className="titles">
        {first_name} {last_name}
        <button className="deleteBtn" onClick={handleDeleteClick}>
          Remove this Author!
        </button>
        </div>
        <ul className="authors">
          <li>Bio: {bio}</li>
            </ul>
      </div>
      </div>
      </div>
 
    )}

    export default AuthorDetails;