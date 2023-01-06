import React, { useEffect, useState }  from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function NewBookForm({book, setBook}) {
    const [title, setTitle] = useState("");
    const [isbn, setIsbn] = useState("");
    const [year, setYear] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [author_id, setAuthor] = useState("");
    


    function handleSumbit(e) {
        e.preventDefault();

        fetch("http:/api/books", {
            method: "POST",
            headers: {
                "Content-Type" :"application/json",
            },
            body: JSON.stringify({
                title: title,
                isbn: isbn,
                year: year,
                price: price,
                image: image,
                description: description,
                author_id: author_id,

            }),
        })
        .then((r) => r.json())
        .then((newBook) => {
            console.log(newBook)
            setBook([...book, newBook])
        });
        setTitle("");
        setIsbn("");
        setYear("");
        setPrice("");
        setImage("");
        setDescription("");
        setAuthor("");
    }

    return (
       
       <div>
            
            <form className="form1" onSubmit={handleSumbit}>
                <h3 className="create">!</h3>
                
                <input
                placeholder="Title"
                name="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                >
                </input>
                <input
                placeholder="Isbn"
                name="Isbn"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
                >
                </input>
                <input
                placeholder="Year"
                name="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                >
                </input>
                <input
                placeholder="Price"
                name="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                >
                </input>
                <input
                placeholder="Author"
                name="Author"
                value={author_id}
                onChange={(e) => setAuthor(e.target.value)}
                >
                </input>
                <input
                placeholder="Image"
                name="Image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                >
                </input>
                <input
                placeholder="Description"
                name="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                >
                </input>
                <button className="b" type="submit"> Enter Book!</button>
            </form>
        </div>
    )
}
export default NewBookForm;