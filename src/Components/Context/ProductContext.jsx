import { createContext, useState } from "react";
import React from 'react'
const ProductContext = createContext();


function ProductContextProvider({ children }) {
  const [selectItemInCart, setSelectItemInCart] = useState([]);
  const[wishlistCount,setWishlistCount]=useState([]);
  const[searchInput,setSearchInput]=useState('');
  let addItemToCart = (plist) => {
    setSelectItemInCart((prev) => [...prev, plist]);
  }
  let wishlistItem=(plist)=>{
    setWishlistCount((prev)=>[...prev,plist]);
  }

  let addedListCount = () => {
    return selectItemInCart.length;

  }
  let likedListCount=()=>{
    return wishlistCount.length;

  }
  
  return (
    <ProductContext.Provider value={{ selectItemInCart, addItemToCart,wishlistCount,wishlistItem, addedListCount,searchInput,setSearchInput,likedListCount}}>
      {children}
    </ProductContext.Provider>
  )
}


export { ProductContext, ProductContextProvider };