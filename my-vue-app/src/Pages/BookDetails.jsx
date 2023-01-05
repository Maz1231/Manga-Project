import React, {useEffect, useState} from "react";
// import {useParams} from "react-router-dom";

function BookDetails({b, onDeleteBook, handlePrice}) {
    const {title, isbn, year, price, buy, image, description} = b;
    const [prices, setPrice] = useState("")

function handleDeleteClick() {
  fetch(`/api/books/${b.id}`, {
    method: "DELETE",
  })
  onDeleteBook(b)
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
    <div className="card">
    <img src={image} alt="bookImage" />
    <div className="container">
      <div className="titles">
        {title}
        <button className="deleteBtn" onClick={handleDeleteClick}>
          Delete this Book!
        </button>
        <button className="addToCart">
          Add to Cart!
        </button>
        </div>
        <ul className="divisionStats">
          <li>Isbn: {isbn}</li>
          <li>Price: {price}$</li>  
          <li>Year: {year}</li>
          <li>Rating: {buy}</li> 
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