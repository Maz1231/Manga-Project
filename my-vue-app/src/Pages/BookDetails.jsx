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
 <div>
    <div className="card" style={{display: "flex", flexWrap: "wrap"}}>
    <img src={image} alt="divisionImage" />
    <div className="container">
      <div className="titles">
        {title}
        <button className="deleteBtn" onClick={handleDeleteClick}>
          Trash this Book!
        </button>
        </div>
        <ul className="divisionStats">
          <li>Isbn: {isbn}</li>
          <li>Year: {year} Price: {price} buy: {buy}</li>     
          <li>Desc: {description}</li>
        </ul>
      </div>
      </div>
      </div>
 
    )}

    export default BookDetails;