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
    <div className="book">
    <div className="book-content">
      <div className="book-info">
        <div className="book-category">
          {price}$
        </div>
        <div className="book-title">
          {title}
        </div>

        <div className="book-author">
          {description}
        </div>

        <div className="container-buttons">
          <button className="action-button" type="button">{year}</button>
          <div className="vertical-divider" />
          <button className="action-button" type="button" onClick={handleDeleteClick}>Remove</button>
          <div className="vertical-divider" />
          <input 
      type="text" 
      onChange = {(e)=>{setPrice(e.target.value)}}
      value={prices} 
      />
          <button className="action-button" type="button" onClick={handleUpdatePrice}>Update</button>
        </div>
      </div>
      <div className="progress-container">
      <img src={image} alt="BookImage" />
        <div className="circular-progress-container">
          <div className="circular-progress" />
        </div>
        <div className="progress-statistics">
          <p className="percent-complete">Rating {buy}</p>
          <p className="completed"></p>
        </div>
        <div className={"progress-divider"} />
      </div>
      <div className="current-chapter-container">
      <div class="flex space-x-2 justify-center">
  <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
    {isbn}
    <span class="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded ml-2">7</span>
  </button>
</div>
        <div>
          <p className="current-chapter-label">CURRENT CHAPTER</p>
          <p className="current-chapter-number"></p>
        </div>
        <button className="update-progress-button" type="button" onClick={buy}>Add To Cart!</button>
      </div>
    </div>
  </div>
 
    )}

    export default BookDetails;