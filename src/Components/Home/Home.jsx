import React, { useContext } from 'react'
import './home.css';
import grocery_img from '../../assets/grocery1.png';
import { Link } from 'react-router-dom';


function Home() {
  // const { logedInUser, setLogedInUser } = useContext(UserContext);
  return (
    <div className="home" id="home">
      <div className="container row">
        <div className="content col-6">
          <p>One place for all your<br />groceries!</p>
          <div className="shop_btn">
            <button className=" btn-secondary btn-sm btn btn-success shop_btn " type='button'>
              <Link to="/shop">
                Shop Now
              </Link>
            </button>
          </div>
        </div>
        <div className="img col">
          <img className="grocery_img" src={grocery_img} alt="" />
        </div>
      </div>


    </div>


  )
}

export default Home;