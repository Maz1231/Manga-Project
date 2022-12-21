import React from "react";

function AuthorSearch( {searchAuthor, onSearchAuthor} ) {
    return (
        <div className="AuthorSearch">
            <label className="labelName">Search YOUR favorite Author!</label>
            <input 
            type="text"
            id="search"
            placeholder="Type a Author..."
            onChange={(e) => onSearchAuthor(e.target.value)}
            value={searchAuthor}/>
        </div>
    );
}

export default AuthorSearch;