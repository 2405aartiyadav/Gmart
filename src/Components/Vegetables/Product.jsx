import React, { useContext, useState } from 'react'
import vegetable from './Vegetables';
import './product.css';
import carrot from './Vegetables/carrot.png'
import toast from 'react-hot-toast';
import { ProductContext } from '../Context/ProductContext';
import like_icon from '../../assets/like.png';
import { Link } from 'react-router-dom';




function Product(props) {
  const [selectedProduct, setSelectedProduct] = useState('250');
  const { addItemToCart, wishlistItem } = useContext(ProductContext);

  let selectproduct = (event) => {

    setSelectedProduct(event.target.value);

  }
  let handleAddBtn = (props) => {
    let Quantity = selectedProduct / 1000;
    let Price = props.productDiscountedPrice;
    let TotalPrice = Quantity * Price;
    let selectedProductDetails = {
      id: props.productId,
      name: props.productName,
      quantity: Quantity,
      quantityType: props.productQuantityType,
      pricePerKiloGram: props.productDiscountedPrice,
      totalPrice: TotalPrice
    }
    console.log(selectedProductDetails);
    addItemToCart(selectedProductDetails);
    toast.success('Product added!');

  }

  let handleLikedBtn = (props) => {
    let selectedProductDetails = {
      id: props.productId,
      name: props.productName,
    }

    wishlistItem(selectedProductDetails);
    toast.success('Added to wishlist!!');


  }
  return (


    <div className='card-container' id='vegetable'>
      <div className="card main" >
        <img src={props.productImageUrl} className="card-img-top veges_img" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.productName}</h5>
          <p className="card-text">₹{props.productDiscountedPrice}/{props.productQuantityType}<small> <del>{props.productActualPrice}/{props.productQuantityType}</del> </small></p>
        </div>
        <div className="card-body">
          <span>Qty : </span>
          <select name="" id="" value={selectedProduct} onChange={(event) => { selectproduct(event) }}>
            <option value="250">250 gm</option>
            <option value="500">500 gm</option>
            <option value="1000">1 kg</option>
            <option value="2000">2 kg</option>
          </select>
        </div>
        <span className="card-footer row">
        <Link className='col'>
          <input className="btn btn-primary btn-sm" type="button" value="Add" onClick={() => { handleAddBtn(props) }} />
           </Link>
          <Link
            className="nav-link active col margin-top:2.5rem"
            to="/wishlist"
            onClick={() => { handleLikedBtn(props) }}>
            <img
              src={like_icon}
              alt="icon"
              className='liked_img' />
          </Link>

        </span>


      </div>
    </div>

  )
}

export default Product