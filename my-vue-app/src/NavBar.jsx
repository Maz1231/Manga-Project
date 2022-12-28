import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ user, setUser }) {function handleLogoutClick() {

  fetch("/api/logout", { method: "DELETE" }).then((r) => {
    if (r.ok) {
      setUser(null);
    }
    });
  }
  
  return (
    <header className="NavBar">
      <div className="website">
        <NavLink  to="/" >Manga</NavLink>
      </div>
        {user ? (
          <>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/authors">Authors</NavLink>
            <NavLink to="/categories">Categories</NavLink>
            <NavLink to="/stores">Stores</NavLink>
            <NavLink to="/">
              <button className="click" onClick={handleLogoutClick}>Logout</button>
            </NavLink>
          </>
        ) : (
          <div>
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/login">Login</NavLink>
          </div>
        )}
    </header>
      );
    }

export default NavBar;