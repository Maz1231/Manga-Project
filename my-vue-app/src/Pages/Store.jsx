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

    const showStore = store.filter((t) => {
      return t.name.toLowerCase().includes(searchStore.toLowerCase())
    })

    


   

    return ( 
      <div>
        <StoreSearch searchStore={searchStore} onSearchStore={setSearchStore}/>
        <StoreCard 
        store={showStore} a
        setStore={setStore}
        onDeleteStore={handleDeleteStores}
        />
      </div>)
  
}

export default Store;