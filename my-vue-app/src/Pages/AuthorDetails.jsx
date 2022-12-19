import React, {useEffect, useState} from "react";
// import {useParams} from "react-router-dom";

function AuthorDetails({a, onDeleteAuthor}) {
    const {image, bio, first_name, last_name} = a;

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
 
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={image} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{first_name}{last_name}</div>
    <p class="text-gray-700 text-base">
      {bio}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#top10</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Anime</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
  <button className="deleteBtn" onClick={handleDeleteClick}>
          Trash this Team!
        </button>
</div>
 
    )}

    export default AuthorDetails;