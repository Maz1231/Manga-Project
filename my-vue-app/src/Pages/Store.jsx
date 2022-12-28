import React, {useEffect, useState}  from "react";
// import { UserContext } from "../context/context";
// import NavBar from "./NavBar";
import StoreCard from "./StoreCard";
import StoreSearch from "./StoreSearch"
const Store = () => {
    const [store, setStore] = useState([]);
    const [searchStore, setSearchStore] = useState("")
    
   
    
    

    useEffect(() => {
        fetch("/api/stores").then((r) => {
          if (r.ok) {
            r.json().then((store) => setStore(store));
          }
        });
      }, []);

      

     

    function handleDeleteStores(storeDelete) {
      const removeStore = store.filter(
        (s) => s.id !== storeDelete.id
      );
      setStore(removeStore)
    }

    function handlePrice(updatedPrice) {
      setPrice((store) =>
          store.map((storePos) => {
          return storePos.id === updatedPrice.id ? updatedPrice : storePos;
      })
      )};


    // const showStore = store.filter((t) => {
    //   return t.name.toLowerCase().includes(searchStore.toLowerCase())
    // })

    


   

    return ( 
      <div>
        <StoreSearch searchStore={searchStore} onSearchStore={setSearchStore}/>
        <StoreCard 
        store={store} a
        setStore={setStore}
        onDeleteStore={handleDeleteStores}
        handlePrice={handlePrice}
        />
      </div>)
  
}

export default Store;