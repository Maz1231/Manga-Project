import React, {useEffect, useState}  from "react";
// import { UserContext } from "../context/context";
// import NavBar from "./NavBar";
import CategoryCard from "./CategoryCard";

const Category = () => {
    const [category, setCategory] = useState([]);
    
   
    
    

    useEffect(() => {
        fetch("/api/categories").then((r) => {
          if (r.ok) {
            r.json().then((category) => setCategory(category));
          }
        });
      }, []);

      console.log(category)


    function handleDeleteCategories(categoryDelete) {
      const removeCategory = category.filter(
        (c) => c.id !== categoryDelete.id
      );
      setCategory(removeCategory)
    }

      
   

    return ( 
      <div>
        <CategoryCard 
        category={category} c
        setCategory={setCategory}
        onDeleteCategory={handleDeleteCategories}
        />
      </div>)
  
}

export default Category;