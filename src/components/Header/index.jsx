import { Link } from "react-router-dom";
import Profile from "./profile";
import Search from "./search";
import { useAuth } from "../../content/AuthContext";

function Header() {
  const {selectedcategory} = useAuth();


  return (
    <>
      <div className="agileits_header">
        <div className="w3l_offers">
          <a href="products.html">Today's special Offers !</a>
        </div>
        <Search />
        <div className="product_list_header">
          <input type="button" name="submit" value="Cart items 0" className="button" />
        </div>
        <Profile />
        <div className="w3l_header_right1">
          <h2><a href="mail.html">Contact Us</a></h2>
        </div>
        <div className="clearfix"> </div>
      </div>

      <div className="logo_products">
        <div className="container">
          <div className="w3ls_logo_products_left">
            <h1><a href="index.html"><span>Grocery</span> Store</a></h1>
          </div>
          <div className="w3ls_logo_products_left1">
            <ul className="special_items">
              <li><a href="events.html">Events</a><i>/</i></li>
              <li><a href="about.html">About Us</a><i>/</i></li>
              <li><a href="products.html">Best Deals</a><i>/</i></li>
              <li><a href="services.html">Services</a></li>
            </ul>
          </div>
          <div className="w3ls_logo_products_left1">
            <ul className="phone_email">
              <li><i className="fa fa-phone" aria-hidden="true"></i>(+0123) 234 567</li>
              <li><i className="fa fa-envelope-o" aria-hidden="true"></i><a href="mailto:store@grocery.com">store@grocery.com</a></li>
            </ul>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>

      <div className="products-breadcrumb">
        <div className="container">
          <ul>
            <li><i className="fa fa-home" aria-hidden="true"></i><Link to="/">Home</Link><span>|</span></li>
            <li>{selectedcategory}</li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default Header;