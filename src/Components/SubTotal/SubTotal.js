import React from 'react';
import './SubTotal.css'
import { ContextConsumer } from '../../Context/Context';
import { getBasketTotal } from '../../Context/Reducer';
import CurrencyFormat from 'currency-formatter';
import { Link } from 'react-router-dom';

const SubTotal = () => {
    const [{user, basket}] = ContextConsumer()

    return ( 
        <div className='subtotal'>
            <p>Subtotal ({basket.length} items):  
                <span className='total'>
                    {CurrencyFormat.format(getBasketTotal(basket), { code: 'USD' })}
                </span>
            </p>
            <p className='gift_option'><input type='checkbox'/>This order contains a gift</p>
            <Link to={user? '/checkout': '/signin'}><button className='proceed_to_buy'>Proceed to buy</button></Link>
        </div>
     );
}
 
export default SubTotal;