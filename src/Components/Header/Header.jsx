import React, { useContext, useState } from 'react'
import './header.css';
import shop_icon from '../../assets/shop.png';
import cart_icon from '../../assets/cart.png';
import exit_icon from '../../assets/exit.png';
import like_icon from '../../assets/like.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { ProductContext } from '../Context/ProductContext';


function Header() {
    const { logedInUser, logOut } = useContext(AuthContext);
    const { addedListCount, searchInput, setSearchInput, likedListCount } = useContext(ProductContext);

    return (
        <nav
            className="navbar navbar-expand-lg bg-body-tertiary headerclass">
            <div
                className="container-fluid">
                <Link to="/" className="navbar-brand nav_img" >
                    <img
                        src={shop_icon}
                        alt="shop icon"
                        width="33px"
                        height="33px" />
                    Gmart
                </Link>
                <Link
                    to="/shop"
                    className="navbar-brand nav_img" >
                    Shop
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span
                        className="navbar-toggler-icon">

                    </span>
                </button>
                <div
                    className="collapse navbar-collapse headerheading"
                    id="navbarSupportedContent">
                    <ul
                        className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li
                            className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/">
                                Home</Link>

                        </li>
                        <li
                            className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/about">
                                About
                            </Link>

                        </li>
                        <li
                            className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/contact">
                                Contact
                            </Link>

                        </li>
                        <li
                            className="nav-item">
                            {logedInUser ?
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/"
                                    onClick={() => { logOut() }}>
                                    Logout
                                </Link>
                                :
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/login">
                                    Login
                                </Link>}

                        </li>
                        <li
                            className="nav-item">
                            <Link
                                className="nav-link active failure"
                                aria-current="page"
                                to="/admin">
                                <button
                                    type="button"
                                    className="btn btn-warning">
                                    Admin Portal
                                </button>
                            </Link>


                        </li>

                    </ul>
                </div>
            </div>
            {logedInUser && <div className="searchbar">
                <input
                    type="text"
                    placeholder='Search..'
                    value={searchInput}
                    onChange={(event) => { setSearchInput(event.target.value) }} />
            </div>}

            <div className="shopicon">
                <ul
                    className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li
                        className="nav-item">

                        <span
                            className='position-relative'>
                            <Link
                                className="nav-link active"
                                to="/wishlist">
                                <img
                                    src={like_icon}
                                    alt="icon"
                                    className='liked_img' />
                            </Link>
                            <span
                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {likedListCount()}
                            </span>
                        </span>
                    </li>

                    <li
                        className="nav-item ">
                        <span
                            className='position-relative'>
                            <Link
                                className="nav-link active"
                                to="/cart">
                                <img
                                    src={cart_icon}
                                    alt="icon"
                                    className='cart_img' />
                            </Link>
                            <span
                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {addedListCount()}
                            </span>
                        </span>
                    </li>

                    <li className="nav-item">
                        <Link
                            className="nav-link active"
                            aria-current="page"
                            to="/"
                            onClick={() => { logOut() }}>
                            <img src={exit_icon}
                                alt="icon" />
                        </Link>
                    </li>

                </ul>


            </div>

        </nav>
    )
}

export default Header;