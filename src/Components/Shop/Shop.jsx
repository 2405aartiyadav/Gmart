import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';
import Product from '../Vegetables/Product.jsx';
// import vegetables from '../Vegetables/Vegetables.js';
import { ProductContext } from '../Context/ProductContext.jsx';
import axios from 'axios';
import ProductFilter from '../ProductFilter/ProductFilter.jsx';


function Shop() {
  const baseUri = import.meta.env.VITE_API_BASE_URL;

  const { logedInUser } = useContext(AuthContext);
  const { searchInput, setSearchInput } = useContext(ProductContext);
  const [vegetables, setVegetables] = useState([]);

  useEffect(() => {
    axios.get(`${baseUri}/getVegeDetails`).then((resp) => {
      setVegetables(resp.data)
      console.log(resp.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])


  let filterItem = vegetables.filter((item) => {
    if (item.productName.toLowerCase().includes(searchInput.toLowerCase())) {
      return item;
    }
  })
  return (
    <div >

      <div>

        {!logedInUser && <Navigate to="/login" replace={true} />}
        <div className="row" id='shop'>
          {filterItem.map((veg) => {
            return (

              <Product
                className="col"
                key={veg.productId}
                productId={veg.productId}
                productImageName={veg.productImageName}
                productName={veg.productName}
                productQuantityType={veg.productQuantityType}
                productDiscountedPrice={veg.productDiscountedPrice}
                productActualPrice={veg.productActualPrice}
              />

            )
          })}

        </div>
      </div>
    </div>
  )
}

export default Shop