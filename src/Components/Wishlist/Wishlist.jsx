import React, { useContext } from 'react'
import { ProductContext } from '../Context/ProductContext'



function Whishlist(props) {
  const { wishlistCount } = useContext(ProductContext)
  return (
    <div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sno.</th>
            <th scope="col">Name</th>
           
          </tr>
        </thead>
        <tbody>
          {console.log('array => ' + wishlistCount)}
          {wishlistCount.map((prod) => {
            return (
              <tr>
                <th scope="row">{wishlistCount.indexOf(prod) + 1}</th>
                <td>{prod.name}</td>
              </tr>
            )
          })}


        </tbody>
      </table>
    </div>
  )
}

export default Whishlist;