import React, { useEffect, useState }  from "react";

function NewAuthorForm({author, setAuthor}) {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");


    function handleSumbit(e) {
        e.preventDefault();

        fetch("http:/api/authors", {
            method: "POST",
            headers: {
                "Content-Type" :"application/json",
            },
            body: JSON.stringify({
                first_name: first_name,
                last_name: last_name,
            }),
        })
        .then((r) => r.json())
        .then((newAuthor) => {
            setAuthor([...author, newAuthor])
        });
        setFirstName("");
        setLastName("");
    }

    return (
        <div>
            
            <form onSubmit={handleSumbit}>
                <h3 className="create"> Create A Author!</h3>
                <input
                placeholder="FirstName"
                name="FirstName"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                >
                </input>
                <input
                placeholder="LastName"
                name="LastName"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                >
                </input>
                <button className="b" type="submit"> Enter Store!</button>
            </form>
        </div>
    )
}
export default NewAuthorForm;