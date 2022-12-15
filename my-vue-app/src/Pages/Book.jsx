import React, {useEffect, useState}  from "react";
// import { UserContext } from "../context/context";
// import NavBar from "./NavBar";
import BookCard from "./BookCard";

const Book = () => {
    const [book, setBook] = useState([]);
    
   
    
    

    useEffect(() => {
        fetch("/api/books").then((r) => {
          if (r.ok) {
            r.json().then((book) => setBook(book));
          }
        });
      }, []);

      console.log(book)

    function handleDeleteBooks(bookDelete) {
      const removeBook = book.filter(
        (b) => b.id !== bookDelete.id
      );
      setBook(removeBook)
    }

      
   

    return ( 
      <div>
        <BookCard 
        book={book} b
        setBook={setBook}
        onDeleteBook={handleDeleteBooks}
        />
      </div>)
  
}

export default Book;