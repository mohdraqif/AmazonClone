import React from 'react';
import './DiscountProductCard.css'

const DiscountProductCard = (props) => {
    return ( 
        <div className='discount_product_card'>
            <p className='description'>{props.desc}</p>
            <img src={props.background} alt="Offer Card"/>
        </div>
     );
}
 
export default DiscountProductCard;