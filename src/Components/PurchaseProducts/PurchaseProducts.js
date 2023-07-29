import React from 'react';
import './PurchaseProducts.css'
import {purchaseProductsDetails} from '../../Context/Details'
import PurchaseProductCard from "../PurchaseProductCard/PurchaseProductCard";

const PurchaseProducts = () => {
    return ( 
        <div className='purchase_products_container'>
            {purchaseProductsDetails.map((item) => {
                return <PurchaseProductCard
                    key={item.id}
                    id={item.id}
                    desc={item.description}
                    price={item.price}
                    stars={item.rating}
                    image={item.image}
                    secondaryImage={item.image2}
                    details={item.features}
                />
            })}
        </div>
     );
}
 
export default PurchaseProducts;