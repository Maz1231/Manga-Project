import React, {useEffect, useState}  from "react";
// import { UserContext } from "../context/context";
// import NavBar from "./NavBar";
import AuthorCard from "./AuthorCard";

const Author = () => {
    const [author, setAuthor] = useState([]);
    
   
    
    

    useEffect(() => {
        fetch("/api/authors").then((r) => {
          if (r.ok) {
            r.json().then((author) => setAuthor(author));
          }
        });
      }, []);


    function handleDeleteAuthors(authorDelete) {
      const removeAuthor = author.filter(
        (a) => a.id !== authorDelete.id
      );
      setBook(removeAuthor)
    }

      
   

    return ( 
      <div>
        <AuthorCard 
        author={author} a
        setAuthor={setAuthor}
        onDeleteAuthor={handleDeleteAuthors}
        />
      </div>)
  
}

export default Author;