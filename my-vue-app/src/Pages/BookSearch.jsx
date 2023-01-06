import React from "react";

function BookSearch( {searchBook, onSearchBook} ) {
    return (
        <div className="BookSearch">
            <label className="labelName">Search!</label>
            <input 
            type="text"
            id="search"
            placeholder="Type a Book..."
            onChange={(e) => onSearchBook(e.target.value)}
            value={searchBook}/>
        </div>
    );
}

export default BookSearch;