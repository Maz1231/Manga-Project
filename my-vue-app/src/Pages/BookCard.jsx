import React from "react";
// import {NavLink} from "react-router-dom";
import BookDetails from "./BookDetails";
import NewBookForm from "./NewBookForm";

const BookCard = ({ book, setBook, onDeleteBook }) => {
const books = book.map((b) => {
    return (
        <BookDetails 
        b= {b}
        key = {b.id}
        onDeleteBook={onDeleteBook}
        />
    );
})

    return (    
        <div>
            <NewBookForm 
            book = {book}
            setBook = {setBook}
            />
            {/* <PlayerDetails></PlayerDetails> */}
            <div style={{display: "flex", flexWrap: "wrap"}}>
            <div className="allCards">
            {books}
        </div> 
        </div>
        </div>

    )
}

export default BookCard;