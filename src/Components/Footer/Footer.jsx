import React from 'react'
import './footer.css'
import shop_icon from '../../assets/shop.png';

function Footer() {
  return (
    <footer
      className="page-footer font-small pt-4 footer_section" >
      <div
        className="row main">
        <div
          className="col-md-3 mt-md-0 mt-3">
          <img
            src={shop_icon}
            alt="shop_icon"
            width="33"
            height="33" />
          <a href="#">
            Dukan
          </a>
          <p>
            Lorem ipsum dolor sit amet<br />consectetur adipisicing elit. Est, sed?
          </p>
        </div>
        <div
          className="col-md-3 mb-md-0 mb-3 first_part">
          <h6>
            Quick Links
          </h6>
          <ul className="list-unstyled">
            <li>
              <a href="#">
                Home
              </a>
              <br />
            </li>
            <li>
              <a href="#">
                About
              </a>
              <br />
            </li>
            <li>
              <a href="#">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <div
          className="col-md-3 mb-md-0 mb-3 second_part">
          <h6>
            Social Links
          </h6>
          <ul
            className="list-unstyled">
            <li>
              <a href="#">
                Instagram
              </a>
            </li>
            <li>
              <a href="#">
                Facebook
              </a>
            </li>
            <li>
              <a href="#">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="footer-copyright text-center py-3">
        copyright©2024
        <a href="/">
          Aarti Yadav | All Right Reserved
        </a>
      </div>
    </footer>
  )
}

export default Footer