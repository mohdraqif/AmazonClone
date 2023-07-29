import React from 'react';
import './PurchaseProductCard.css'
import { ContextConsumer } from '../../Context/Context';
import CurrencyFormat from 'currency-formatter';
import { Link } from 'react-router-dom';

const PurchaseProductCard = (props) => {
    const [ , dispatch] = ContextConsumer()

    const productSelectHandler = () => {
            dispatch({
            type: 'product_select',
            item: {
                id: props.id,
                description: props.desc,
                price: props.price,
                rating: props.stars,
                image: props.image,
                backImage: props.secondaryImage,
                productFeatures: props.details
            }
        })
    }

    const addToCartHandler = () => {
        dispatch({
            type: 'add_to_basket',
            item: {
                id: props.id,
                description: props.desc,
                price: props.price,
                rating: props.stars,
                image: props.image
            }
        })
    }

    return ( 
        <div className='purchase_product_card'>
            <Link to='/product-details' className='product-link' onClick={productSelectHandler}>
            <img src={props.image} alt="Purchase Product" />
            <p className='description'>{props.desc}</p></Link>
            <div className='rating'>
                {Array(props.stars).fill().map((item, key) => {
                    return <i className="fa-solid fa-star" style={{color: "#ffd814"}} key={key}/>
                })}
            </div>
            <p className='price'>{CurrencyFormat.format((props.price), { code: 'USD' })}</p>
            <button className="cartbutton" onClick={addToCartHandler}>Add to cart</button>
        </div>
     );
}
 
export default PurchaseProductCard;