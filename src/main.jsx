import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx'
import Signup from './Components/Signup/Signup.jsx'
import AuthContextProvider from './Components/Context/AuthContextProvider.jsx'
import Shop from './Components/Shop/Shop.jsx'
import Product from './Components/Vegetables/Product.jsx';
import { ProductContextProvider } from './Components/Context/ProductContext.jsx'
import CartList from './Components/Cart/CartList.jsx'
import Admin from './Components/AdminPortal/Admin.jsx'
import Add from './Components/AdminPortal/Add.jsx'
import ProductFilter from './Components/ProductFilter/ProductFilter.jsx'
import Whishlist from './Components/Wishlist/Wishlist.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="contact" element={<Contact />} />
      <Route path="signup" element={<Signup />} />
      <Route path="shop" element={<Shop />} />
      <Route path="product" element={<Product />} />
      <Route path="cart" element={<CartList />} />
      <Route path="wishlist" element={<Whishlist />} />
      <Route path="admin" element={<Admin />} />
      <Route path="add" element={<Add />} />
      <Route path="vegetable" element={<Product />} />

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductContextProvider>
        <RouterProvider router={router} />
      </ProductContextProvider>


    </AuthContextProvider>

  </React.StrictMode>,
)
