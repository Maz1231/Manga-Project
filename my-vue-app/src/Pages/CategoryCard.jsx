import React from "react";
// import {NavLink} from "react-router-dom";
import CategoryDetails from "./CategoryDetails";
import NewCategoryFrom from "./NewCategoryForm";

const CategoryCard = ({ category, setCategory, onDeleteCategory }) => {
const categories = category.map((c) => {
    return (
        <CategoryDetails 
        c = {c}
        key = {c.id}
        onDeleteCategory={onDeleteCategory}
        />
    );
})

    return (    
        <div>
            <NewCategoryFrom 
            category = {category}
            setCategory = {setCategory}
            />
            <div className="allCards">
            {categories}
        </div> 
        </div>

    )
}

export default CategoryCard;