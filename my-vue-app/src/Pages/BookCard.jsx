import React from "react";
// import {NavLink} from "react-router-dom";
import BookDetails from "./BookDetails";
import NewBookFrom from "./NewBookForm";

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
            <NewBookFrom 
            book = {book}
            setBook = {setBook}
            />
            {/* <PlayerDetails></PlayerDetails> */}
            <div className="allCards">
            {books}
        </div> 
        </div>

    )
}

export default BookCard;