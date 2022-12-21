import React, {useEffect, useState}  from "react";
// import { UserContext } from "../context/context";
// import NavBar from "./NavBar";
import BookCard from "./BookCard";
import BookSearch from "./BookSearch"

const Book = () => {
    const [book, setBook] = useState([]);
    const [searchBook, setSearchBook] = useState("")
    
   
    
    

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

    const showBook = book.filter((t) => {
      return t.title.toLowerCase().includes(searchBook.toLowerCase())
    })

      
   

    return ( 
      <div>
        <BookSearch searchBook={searchBook} onSearchBook={setSearchBook}/>
        <BookCard 
        book={showBook} 
        setBook={setBook}
        onDeleteBook={handleDeleteBooks}
        />
      </div>)
  
}

export default Book;