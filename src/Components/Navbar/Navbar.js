import React from 'react';
import './Navbar.css'
import amazonLogo from '../../images/amazon_logo.png'
import { Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../../Context/Firebase';
import { ContextConsumer } from '../../Context/Context';
import { SearchCategories } from '../../Context/Details'

const Navbar = () => {
  const [{user, basket}] = ContextConsumer()
  
  const logoutHandler = () => {
    if(user) signOut(auth);
  }

    return ( 
      <div className="header" id="navbar">
        <div className='header_left'>
          <div className='amazon_logo'>
            <Link to='/'><img src={amazonLogo} width={"100px"} alt='Amazon Logo'/></Link>
          </div>
          <div className='location'>
            <div className='location_mark'>
              <i className="fa fa-location-dot"></i>
            </div>
            <div className='select_address'>
              <span className='hello'>Hello</span>
              <span className='address'>Select your address</span>
            </div>
          </div>
        </div>

        <div className='searchbar'>
          <select name="category" id="category" defaultValue={"all"}>
            {SearchCategories.map((item) => <option key={item.value} value={item.value}>{item.category}</option>)}
          </select>
          <input className='search_input' type='text' placeholder='Search Amazon.in'/>
          <div className='search_button'>
            <div className='search_icon'>
              <i className="fa fa-magnifying-glass"></i>
            </div>
          </div>
        </div>

        <div className='account-links'>
          <div className='signin'>
            <span className='hello_text'>Hello, {user? user.email: 'user'}</span>
            <Link to={!user && '/signin'}>
              <span className='account_signin' onClick={logoutHandler}>{user? "Sign Out": "Sign In"}</span>
            </Link>
          </div>
          <div className='orders'>
            <span className='returns'>Returns</span>
            <Link to={!user && '/signin'}><span className='orders'>& Orders</span></Link>
          </div>
          <div className='cart'>
            <Link to='/cart'><i className="fa-2x fa-solid fa-sharp fa-cart-shopping"></i>
            Cart <span className='cart_items_count'>{basket?.length>0 ? basket.length : 0}</span></Link>
          </div>
        </div>
      </div>
     );
}
 
export default Navbar;