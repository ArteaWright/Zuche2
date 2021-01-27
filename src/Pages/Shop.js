import React, {useState} from 'react';
import Navigation from '../components/Navigation/Navigation';
import ShopProducts from '../components/Shop/Shop';
import Footer from '../components/Footer/Footer';
import ProductsList from '../Products.json';
import Hero from '../pics/hero.jpg';
import './Shop.css';

function Shop() {
const [products, setProducts] = useState(ProductsList);

const filteredProducts = (event) => {
    const emptyArray = [];
    for (let i=0; i< ProductsList.length; i++) {
        if(ProductsList[i].product.includes(event.target.value)){
            emptyArray.push(ProductsList[i]);
        }
    }
    setProducts(emptyArray);
}

    return(
        <div>
        <Navigation />
        <img className="heroPhoto" src={Hero} alt="hero" />

        <label className="sInput" htmlFor="userInput"> Search:
            <input name="userInput" 
            type="text" 
            placeholder="Search an item by name here"
            id="searchInput"    
            onChange={filteredProducts}>
            </input>
            </label>

        <ShopProducts products={products}/>
        <Footer/>
        </div>
    );
}

export default Shop; 