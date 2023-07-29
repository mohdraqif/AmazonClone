import React from 'react';
import Carousel from '../Components/Carousel/Carousel';
import DiscountProducts from '../Components/DiscountProducts/DiscountProducts';
import PurchaseProducts from '../Components/PurchaseProducts/PurchaseProducts';

const Home = () => {
    return ( 
        <div>
            <Carousel/>
            <PurchaseProducts/>
            <DiscountProducts/>
        </div>
     );
}
 
export default Home;