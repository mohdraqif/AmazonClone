import React from 'react';
import './CartProduct.css'
import { ContextConsumer } from '../../Context/Context';
import CurrencyFormat from 'currency-formatter';

const CartProduct = (props) => {
    const [ , dispatch] = ContextConsumer()

    const removeItemHandler = () => {
        dispatch({
            type: 'remove_from_basket',
            id: props.product_id
        })
    }

    return ( 
        <div className='product'>
            <div className='product_image'><img src={props.product_image} width={"130px"} alt="Product"/></div>
            <div className='product_details'>
                <div>{props.product_desc}</div>
                <div className='rating'>
                    {Array(props.product_rating).fill().map((item, key) => {
                        return <i className="fa-solid fa-star" style={{color: "#ffd814"}} key={key}/>
                    })}
                </div>
                <div>{CurrencyFormat.format((props.product_price), { code: 'USD', })}</div>
                <button className='remove_item' onClick={removeItemHandler}>Remove from basket</button>
            </div>
        </div>
     );
}
 
export default CartProduct;