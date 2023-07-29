import React from 'react';
import './DiscountProducts.css'
import { discountProductsDetails } from '../../Context/Details'
import DiscountProductCard from '../DiscountProductCard/DiscountProductCard'

const DiscountProducts = () => {
    return ( 
        <div className='discount_products_container'>
            <div className='heading'>
                <p>Discounts like never before</p>
            </div>
            <div className='products'>
                {discountProductsDetails.map((card) => {
                    return <DiscountProductCard 
                        key={card.id}
                        desc={card.description} 
                        background={card.image}
                        />
                })}
            </div>
        </div>
     );
}
 
export default DiscountProducts;