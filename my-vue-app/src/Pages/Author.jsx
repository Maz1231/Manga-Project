import React, {useEffect, useState}  from "react";
// import { UserContext } from "../context/context";
// import NavBar from "./NavBar";
import AuthorCard from "./AuthorCard";
import AuthorSearch from "./AuthorSearch"
const Author = () => {
    const [author, setAuthor] = useState([]);
    const [searchAuthor, setSearchAuthor] = useState("")
    
   
    
    

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

    const showAuthor = author.filter((t) => {
      return t.first_name.toLowerCase().includes(searchAuthor.toLowerCase())
    })

      
   

    return ( 
      <div>
        <AuthorSearch searchAuthor={searchAuthor} onSearchAuthor={setSearchAuthor}/>
        <AuthorCard 
        author={showAuthor} a
        setAuthor={setAuthor}
        onDeleteAuthor={handleDeleteAuthors}
        />
      </div>)
  
}

export default Author;