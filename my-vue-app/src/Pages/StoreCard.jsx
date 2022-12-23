import React from "react";
// import {NavLink} from "react-router-dom";
import StoreDetails from "./StoreDetails";
import NewStoreFrom from "./NewStoreForm";

const StoreCard = ({ store, setStore, onDeleteStore}) => {
const stores = store.map((s) => {
    return (
        <StoreDetails 
        s= {s}
        key = {s.id}
        onDeleteStore={onDeleteStore}
        />
    );
})

    return (    
        <div>
            <NewStoreFrom 
            store = {store}
            setStore = {setStore}
            />
            <div className="allCards">
            {stores}
        </div> 
        </div>

    )
}

export default StoreCard;