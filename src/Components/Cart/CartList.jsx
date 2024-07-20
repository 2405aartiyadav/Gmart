import React, { useContext } from 'react'
import { ProductContext } from '../Context/ProductContext'

function CartList() {
  const { selectItemInCart } = useContext(ProductContext)
  return (
    <div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sno.</th>
            <th scope="col">Product Id</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Quantity Type</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {console.log('array => ' + selectItemInCart)}
          {selectItemInCart.map((prod) => {
            return (
              <tr>
                <th scope="row">{selectItemInCart.indexOf(prod) + 1}</th>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.quantity}2</td>
                <td>{prod.totalPrice}3</td>
              </tr>
            )
          })}


        </tbody>
      </table>
    </div>
  )
}

export default CartList