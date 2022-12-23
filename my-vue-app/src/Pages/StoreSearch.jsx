import React from "react";

function StoreSearch( {searchStore, onSearchStore} ) {
    return (
        <div className="BookSearch">
            <label className="labelName">Search YOUR favorite Item!</label>
            <input 
            type="text"
            id="search"
            placeholder="Type a Book..."
            onChange={(e) => onSearchStore(e.target.value)}
            value={searchStore}/>
        </div>
    );
}

export default StoreSearch;