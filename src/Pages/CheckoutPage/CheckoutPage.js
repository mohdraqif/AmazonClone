import React from 'react';
import './CheckoutPage.css'
import {getBasketTotal} from '../../Context/Reducer' 
import CurrencyFormat from 'currency-formatter';
import { ContextConsumer } from '../../Context/Context';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
    const [{basket}, dispatch] = ContextConsumer()
    
    const itemPrice = getBasketTotal(basket), 
          deliveryFee = 10, 
          promotionVoucher = 15

    const calculator = (value) => {
        return CurrencyFormat.format(value, { code: 'USD' })
    }

    const emptyTheCartHandler = () => {
        dispatch({
            type: 'empty_the_basket'
        })
    }

    return ( 
        <div className='checkout-page'>
            <div className='payment-block'>
                <div className='payment-info'>
                    <h4>Select a payment method</h4>
                    <div className='method-select'>
                        <div><input type="radio" id="CC" name="method" value="EMI"/>
                             <label htmlFor="CC">Credit Card</label><br/></div>
                        <div><input type="radio" id="EMI" name="method" value="EMI"/>
                            <label htmlFor="EMI">EMI</label><br/></div>
                        <div><input type="radio" id="COD" name="method" value="Cash On Delivery" defaultChecked/>
                            <label htmlFor="COD">Cash On Delivery</label><br/></div>
                    </div>
                    <p>Choose a payment method to continue checking out.</p>
                </div>
                <div className='order-summary'>
                    <a href="#modal"><button className='place_order_button' onClick={emptyTheCartHandler}>Place your order</button></a><hr/>
                    <h3>Order Summary</h3>
                    <p>Items: <span>{basket.length>0 ? calculator(itemPrice): '--'}</span></p>
                    <p>Delivery: <span>{basket.length>0 ? calculator(deliveryFee): '--'}</span></p>
                    <p>Total: <span>{basket.length>0 ? calculator(itemPrice + deliveryFee): '--'}</span></p>
                    <p>Promotion Applied: <span>{basket.length>0 ? `-${calculator(promotionVoucher)}`: '--'}</span></p><hr/>
                    <p className='total'>Order Total: <span>{basket.length>0 ? calculator(itemPrice + deliveryFee - promotionVoucher): '--'}</span></p><hr/>
                </div>
                <div id="modal" className="overlay">
                    <div className="popup">
                        <a className="close" href="/">&times;</a>
                        <h2>Thank you for shopping with us</h2>
                        <div className="content">Your order is placed in a virtual world :)</div>
                        <Link to='/'><button className='continue'>Continue shopping</button></Link>
                        <div className='github_link'>
                            This is an Amazon clone by <a href="https://github.com/mohdraqif" target='_blank' rel="noreferrer">Mohd Raqif</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default CheckoutPage;