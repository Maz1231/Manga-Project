import React, {useEffect, useState} from "react";
// import {useParams} from "react-router-dom";

function StoreDetails({s, onDeleteStore, handlePrice}) {
    const {image, name, price, description} = s;
    const [prices, setPrice] = useState("")

function handleDeleteClick() {
  fetch(`/api/stores/${s.id}`, {
    method: "DELETE",
  })
  onDeleteStore(s);
}

const handleUpdatePrice = () => {
  fetch(`/api/stores/${s.id}`, {
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
          <li>Desc: {description}</li>
          <li>Price: ${price}</li>
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

    export default StoreDetails;