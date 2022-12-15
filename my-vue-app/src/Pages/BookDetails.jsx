import React, {useEffect, useState} from "react";
// import {useParams} from "react-router-dom";

function BookDetails({b, onDeleteBook}) {
    const {title, isbn, year, price, buy, image, description} = b;

function handleDeleteClick() {
  fetch(`/api/books/${b.id}`, {
    method: "DELETE",
  })
  .then((r) => r.json())
  .then(() => {
    onDeleteBook(d);
  });
}

  return ( 
 
    <div className="card">
    <img src={image} alt="divisionImage" />
    <div className="container">
      <div className="titles">
        {title}
        <button className="deleteBtn" onClick={handleDeleteClick}>
          Trash this Team!
        </button>
        </div>
        <ul className="divisionStats">
          <li>Match Played: {isbn}</li>
          <li>Won: {year} Draw: {price} Lost: {buy}</li>     
          <li>Last 5 Games: {description}</li>
        </ul>
      </div>
      </div>
 
    )}

    export default BookDetails;