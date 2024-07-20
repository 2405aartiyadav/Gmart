import React, { useState } from 'react'
import AuthContextProvider from '../Context/AuthContextProvider'
import Add from './Add';
import './admin.css';


function Admin() {
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [showSearchProduct, setShowSearchProduct] = useState(false);
    let handleClickBtn = (event) => {
        let check = event.target.name;
        switch (check) {
            case 'add':
                setShowAddProduct(true);
                setShowSearchProduct(false);
                break;

            case 'search':
                setShowAddProduct(false);
                setShowSearchProduct(true);
                break;
            default:
                break;
        }
    }
    return (

        <div className='admin container' id='admin'>
            <h3>Product Management</h3>
            <button
                type="button"
                name='add'
                className="btn btn-success mx-2"
                onClick={(event) => { handleClickBtn(event) }}>
                Add
            </button>
            <button
                type="button"
                name='search'
                className="btn btn-info mx-2"
                onClick={(event) => { handleClickBtn(event) }}>
                Search
            </button>
            <hr />
            <div>
                {showAddProduct ? <Add /> : ""}
                {showSearchProduct ? <Search /> : ""}
            </div>

        </div>
    )
}

export default Admin