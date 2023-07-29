import React from 'react';
import './Cartpage.css'
import CartProduct from '../../Components/CartProduct/CartProduct';
import { ContextConsumer } from '../../Context/Context'
import SubTotal from '../../Components/SubTotal/SubTotal';
import { Link } from 'react-router-dom';

const Cartpage = () => {
    const [{basket}] = ContextConsumer()

    let cartItems = (
        <div className='cart_items'>
            <div className='image'><img src='https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.png' width={"400px"} alt="Items"/></div>
            <div className='items'>
                <div className='empty_cart_text'><p>Your Amazon Cart is empty</p></div>
                <Link to='/'><button className='continue_shopping'>Continue shopping</button></Link>
            </div>
        </div>
    )
    
    if(basket.length > 0){
        cartItems = (
            <div className='cart_items'>
                <div className='products_list'>
                    {basket.map((item, index) => {
                        return <CartProduct
                        key={index}
                        product_id={item.id}
                        product_desc={item.description}
                        product_price={item.price}
                        product_rating={item.rating}
                        product_image={item.image}
                        />
                    })}
                </div>
                <SubTotal/>
            </div>
        )
    }

    return ( 
        <div className='cart-page'>
            <h1>Your shopping basket</h1>
            {cartItems}
        </div>
     );
}
 
export default Cartpage;