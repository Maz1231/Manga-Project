import React, { useEffect, useState }  from "react";

function NewCategoryForm({category, setCategory}) {
    const [name, setName] = useState("");
    


    function handleSumbit(e) {
        e.preventDefault();

        fetch("http:/api/categories", {
            method: "POST",
            headers: {
                "Content-Type" :"application/json",
            },
            body: JSON.stringify({
                name: name,
            }),
        })
        .then((r) => r.json())
        .then((newCategory) => {
            setCategory([...category, newCategory])
        });
        setName("");
    }

    return (
        <div>
            
            <form onSubmit={handleSumbit}>
                <h3 className="create"> Create A Category!</h3>
                <input
                placeholder="FirstName"
                name="FirstName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                >
                </input>
                <button className="b" type="submit"> Enter Store!</button>
            </form>
        </div>
    )
}
export default NewCategoryForm;