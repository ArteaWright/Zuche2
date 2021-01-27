import React from 'react';
import {Link} from 'react-router-dom';
import'./Navigation.css';
import Cart from '../../pics/cart.png';


function Navigation() {
    return (
        <>
        <nav className="navbarContainer">
            <div className="navbarSub">
            <Link to="/" className="navTitle">
                ZUCHE´
            </Link> 
        <ul className="navListItems">
            <li>
              <Link to="/" className="navListItem">HOME</Link>
            </li>
            <li>
              <Link to="/shop" className="navListItem">SHOP</Link>
            </li>
            <li>
              <Link to="/contact" className="navListItem">CONTACT</Link>
            </li>
        </ul>
        <Link to="/">
        <img id="cart"src={Cart} alt="Cart"></img>
        </Link>
        
        </div>
        </nav> 
        </>
    );
}


export default Navigation;