import React, {useEffect, useState} from "react";
// import {useParams} from "react-router-dom";

function StoreDetails({s, onDeleteStore}) {
    const {image, name, price, description} = s;

function handleDeleteClick() {
  fetch(`/api/stores/${s.id}`, {
    method: "DELETE",
  })
  .then((r) => r.json())
  .then(() => {
    onDeleteStore(s);
  });
}

  return ( 
 
    <div>
    <div className="card1">
    <img src={image} alt="AuthorImage" />
    <div className="container1">
      <div className="titles">
        {name}
        <button className="deleteBtn" onClick={handleDeleteClick}>
          Kick this Item!
        </button>
        </div>
        <ul className="stores">
          <ul>Desc: {description}</ul>
          <ul>Price: ${price}</ul>
            </ul>
      </div>
      </div>
      </div>
 
    )}

    export default StoreDetails;