import React from 'react';
import './Carousel.css'

const Carousel = () => {
    return ( 
        <div className='hero'>
            <div className="container">
                <div className="wrapper">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/Vernac/2021/Gw-Hero/Mobile_tall_Hero_revision_3000x1200._CB604857279_.jpg" alt='Amazon Carousel' />
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/BVD/May/Deals-Unrec-PC-3000._CB588530729_.jpg" alt='Amazon Carousel' />
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Unrec/TallHero_3000X1200_Unrec._CB593464763_.jpg" alt='Amazon Carousel' />
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/May/MiniBVD/Unrec/PC_hero_1_2x._CB588538726_.jpg" alt='Amazon Carousel' />
                </div>
            </div>
        </div>
     );
}
 
export default Carousel;