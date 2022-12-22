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
    

    function handleDeleteBooks(bookDelete) {
      const removeBook = book.filter(
        (b) => b.id !== bookDelete.id
      );
      setBook(removeBook)
    }

    function handlePrice(updatedPrice) {
      setPlayer((book) =>
          book.map((bookPos) => {
          return bookPos.id === updatedPrice.id ? updatedPrice : bookPos;
      })
      )};

    // const showBook = book.filter((t) => {
    //   return t.title.toLowerCase().includes(searchBook.toLowerCase())
    // })

      //the issue for the form ^^^
   

    return ( 
      <div>
        <BookSearch searchBook={searchBook} onSearchBook={setSearchBook}/>
        <BookCard 
        book={book} 
        setBook={setBook}
        onDeleteBook={handleDeleteBooks}
        handlePrice={handlePrice}
        />
      </div>)
  
}

export default Book;