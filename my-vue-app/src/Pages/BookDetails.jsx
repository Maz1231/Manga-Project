import React, {useEffect, useState} from "react";
// import {useParams} from "react-router-dom";

function BookDetails({b, onDeleteBook, handlePrice}) {
    const {title, isbn, year, price, buy, image, description} = b;
    const [prices, setPrice] = useState("")

function handleDeleteClick() {
  fetch(`/api/books/${b.id}`, {
    method: "DELETE",
  })
  .then((r) => r.json())
  .then(() => {
    onDeleteBook(d);
  });
}

const handleUpdatePrice = () => {
  fetch(`/api/books/${b.id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
  },
  body: JSON.stringify({
      price: prices
  })
})
  .then((r) => r.json())
  .then((newPrice) => {
  handlePrice(newPrice)
  })
  setPrice("");
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
          <li> 
        <input 
      type="text" 
      onChange = {(e)=>{setPrice(e.target.value)}}
      value={prices} 
      />
        <button className="update" onClick={handleUpdatePrice}>Update Price</button></li>
        </ul>
      </div>
      </div>
      </div>
 
    )}

    export default BookDetails;