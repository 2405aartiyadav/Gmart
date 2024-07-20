import React, { useState } from 'react'
import eyeicon from '../../assets/eyeicon.png'
import hide_icon from '../../assets/hide_icon.png'
import { Link } from 'react-router-dom';
function ProductFilter() {
  const [filter, setFilter] = useState('Hide');
  const [filterImg, setFilterImg] = useState(hide_icon);

  let changeBtnClick = (flag) => {

    setFilter((state) => (state === "Hide" ? "Show filter" : "Hide"))

  }
  return (
    <div className='container row'>
      <button
        type='button'
        name='filterBtn'
        className='filterBtn'
        onClick={changeBtnClick}>
        <img src={filterImg} alt="filter" />
        {filter}
      </button>
      <hr />
      <div className='applyFilter col-5'>
        <ul className='list-group'>
          <Link to='/shop'>Vegetables</Link>
        </ul>
      </div>
    </div>
  )
}

export default ProductFilter