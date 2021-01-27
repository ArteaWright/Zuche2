import React, {Component} from 'react';
import './Shop.css';

class ShopProducts extends Component {

    render() {
        console.log(this.props.products)
        return (
            <div className="products">
                {this.props.products.map((productInfo, index)=> {
                    return (
                    <div className="images" key={productInfo.product}>
                         <div className="imageContainer">
                         <img className="productImage" src={productInfo.image} alt="product"/>
                         </div>
                         <div>
                         <h4>
                            {productInfo.product}
                        </h4>
                            <p className="price">{productInfo.price}</p>
                            <p className="description">{productInfo.description}</p>
                            <button className="buyNow">Buy Now</button>
                         </div>
                    </div>
                    );
                })}
            </div>
        );
    }
}

export default ShopProducts;