import React from 'react';
import './ProductDetailsPage.css'
import warranty from '../../images/warranty.png'
import returns from '../../images/returns.jpg'
import freeShipping from '../../images/freeShipping.jpg'
import secureTransaction from '../../images/secureTransaction.jpg'
import { ContextConsumer } from '../../Context/Context';
import CurrencyFormat from 'currency-formatter';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    const [{ user }, dispatch] = ContextConsumer()
    const cachedItem = JSON.parse(localStorage.getItem("selectedItem")).selected

    const orderDate = new Date()
    orderDate.setDate(orderDate.getDate() + 3);
    const deliveryDate = orderDate.toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric' })
    
    const addToCartHandler = () => {
        dispatch({
            type: 'add_to_basket',
            item: {
                id: cachedItem.id,
                description: cachedItem.description,
                price: cachedItem.price,
                rating: cachedItem.rating,
                image: cachedItem.image
            }
        })
    }

    return ( 
        <div className='product-details'>
            <div className='product-image'>
                <img src={cachedItem.image} alt={cachedItem.description}/>
                <img src={cachedItem.backImage} alt={cachedItem.description}/>
            </div>
            <div className='info-block'>
                <div className='product-info'>
                    <p className='product-description'>{cachedItem.description}</p><hr/>
                    <div className='images-bar'>
                        <div className='link'>
                            <img src={warranty} alt='Amazon warranty' width={"35px"}/>
                            <p>1 Year Warranty</p>
                        </div>
                        <div className='link'>
                            <img src={freeShipping} alt='Amazon warranty' width={"35px"}/>
                            <p>Free Delivery</p>
                        </div>
                        <div className='link'>
                            <img src={returns} alt='Amazon warranty' width={"35px"}/>
                            <p>7 Days Replacement</p>
                        </div>
                        <div className='link'>
                            <img src={secureTransaction} alt='Amazon warranty' width={"35px"}/>
                            <p>Secure Transaction</p>
                        </div>
                    </div><hr/>
                    <div className='about-product'>
                        <h4>About this item</h4>
                        <div className='features'>
                            <ul>
                                {cachedItem.productFeatures.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='delivery-info'>
                    <p className='product-price'>{CurrencyFormat.format(cachedItem.price, { code: 'USD' })}</p>
                    <p className='delivery'>FREE delivery 
                        <span className='delivery-date'>{deliveryDate}</span>
                    </p>
                    <p className='order-within'>Or fastest delivery <strong>Today</strong>. <span className='order-within-time'>Order within 4 hrs 47 mins.</span></p>
                    <p className='stock'>In stock</p>
                    <p className='seller'>Sold by Appario Retail Private Ltd and Fulfilled by Amazon.</p>
                    <div className='quantity'>
                        <label htmlFor="quantity">Quantity: </label>
                        <select name="quantity" defaultValue={"1"}>
                            <option value="1">1</option>
                        </select>
                    </div>
                    <div className='cart-buy-buttons'>
                        <Link onClick={addToCartHandler}><button className='cart_button'>Add to Cart</button></Link>
                        <Link to={user? '/checkout': '/signin'}><button className='buy_button' onClick={addToCartHandler}>Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProductDetails;