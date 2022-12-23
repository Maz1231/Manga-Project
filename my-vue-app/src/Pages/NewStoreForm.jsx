import React, { useEffect, useState }  from "react";

function NewStoreForm({store, setStore}) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");


    function handleSumbit(e) {
        e.preventDefault();

        fetch("http:/api/stores", {
            method: "POST",
            headers: {
                "Content-Type" :"application/json",
            },
            body: JSON.stringify({
                name: name,
                description: description,
                image: image,
                price: price,
            }),
        })
        .then((r) => r.json())
        .then((newStore) => {
            setStore([...store, newStore])
        });
        setName("");
        setDescription("");
        setPrice("");
        setImage("");
    }

    return (
        <div>
            
            <form onSubmit={handleSumbit}>
                <h3 className="create"> Create A Item!</h3>
                <input
                placeholder="Name"
                name="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                >
                </input>
                <input
                placeholder="Description"
                name="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                >
                </input>
                <input
                placeholder="image"
                name="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                >
                </input>
                <input
                placeholder="Price"
                name="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                >
                </input>
                <button className="b" type="submit"> Enter Store!</button>
            </form>
        </div>
    )
}
export default NewStoreForm;