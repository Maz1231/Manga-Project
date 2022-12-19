import { Description } from "@mui/icons-material";
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
 
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={image} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{title}</div>
    <p class="text-gray-700 text-base">
      {description}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{isbn}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{year}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{price}</span>
  </div>
   <button className="deleteBtn" onClick={handleDeleteClick}>
          Trash this Team!
        </button>
</div>
 
    )}

    export default BookDetails;