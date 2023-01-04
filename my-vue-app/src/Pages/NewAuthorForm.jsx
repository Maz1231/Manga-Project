import React, { useEffect, useState }  from "react";

function NewAuthorForm({author, setAuthor}) {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [image, setImage] = useState("");
    const [bio, setBio] = useState("");


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
                image: image,
                bio: bio,
            }),
        })
        .then((r) => r.json())
        .then((newAuthor) => {
            setAuthor([...author, newAuthor])
        });
        setFirstName("");
        setLastName("");
        setBio("");
        setImage("");
    }

    return (
        <div>
            
            <form className="form2" onSubmit={handleSumbit}>
                <h3 className="create"> Create Author!</h3>
                <input
                placeholder="First Name"
                name="FirstName"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                >
                </input>
                <input
                placeholder="Last Name"
                name="LastName"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
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
                placeholder="Bio"
                name="Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                >
                </input>
                <button className="b" type="submit"> Enter Store!</button>
            </form>
        </div>
    )
}
export default NewAuthorForm;