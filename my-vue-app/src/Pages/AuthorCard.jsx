import React from "react";
// import {NavLink} from "react-router-dom";
import AuthorDetails from "./AuthorDetails";
import NewAuthorFrom from "./NewAuthorForm";

const AuthorCard = ({ author, setAuthor, onDeleteAuthor}) => {
const authors = author.map((a) => {
    return (
        <AuthorDetails 
        a= {a}
        key = {a.id}
        onDeleteAuthor={onDeleteAuthor}
        />
    );
})

    return (    
        <div>
            <NewAuthorFrom 
            author = {author}
            setAuthor = {setAuthor}
            />
            <div className="allCards1">
            {authors}
        </div> 
        </div>

    )
}

export default AuthorCard;