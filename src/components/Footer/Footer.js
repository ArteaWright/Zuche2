import React from 'react';
import {Link} from 'react-router-dom';
import'./Footer.css';


function Footer() {
    return (
        <>
        <div className="footerContainer">
            <div className="footerTitle"> ZUCHE´ &copy; </div>
        <nav className="footerNav">

            {/* footer Nav */}
            <ul className="footerList">
            <li>
              <Link to="/" className="footerListItem">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="footerListItem">Shop</Link>
            </li>
            <li>
              <Link to="/contact" className="footerListItem">Contact</Link>
            </li>
            </ul>

            {/* form */}

            <div className="subscribe">
                <label htmlFor="form">Subscribe to our mailing list!</label>
                <br/>
                <br/>
                <input name="form" type="text" placeholder=" joe@gmail.com"></input>
                <button>Subscribe</button>
            </div>

            {/* Social Media */}
            <ul className="socialMedia">
                <li className="socialmedia" ><a className="socialMediaItem" href="https://www.facebook.com/" title="Facebook">Facebook</a ></li>
                <li  className="socialmedia"><a className="socialMediaItem" href="https://www.twitter.com/" title="Twitter">Twitter</a ></li>
                <li className="socialmedia"><a className="socialMediaItem" href="https://www.instagram.com/" title="Instagram">Instagram</a ></li>
            </ul>
        </nav>
        </div>
        </>
    );
}


export default Footer;