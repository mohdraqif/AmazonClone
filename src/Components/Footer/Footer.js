import React from 'react';
import './Footer.css'
import amazonLogo from '../../images/amazon_logo.png'
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
    return ( 
        <div className='footer'>
            <div className='back_to_top'>
                <Link smooth to="#navbar">
                    <button className='top_button'>Back to top</button>
                </Link>
            </div>
            <div className='upper-footer'>
                <div className='logo'><img src={amazonLogo} width={"100px"} alt='Amazon Logo'/></div>
                <div className='region_links'>
                    <ul>
                        <li className="region"><a href="#/">Australia</a></li>
                        <li className="region"><a href="#/">Brazil</a></li>
                        <li className="region"><a href="#/">Canada</a></li>
                        <li className="region"><a href="#/">China</a></li>
                        <li className="region"><a href="#/">France</a></li>
                        <li className="region"><a href="#/">Germany</a></li>
                        <li className="region"><a href="#/">Italy</a></li>
                        <li className="region"><a href="#/">Japan</a></li>
                        <li className="region"><a href="#/">Mexico</a></li>
                        <li className="region"><a href="#/">Netherlands</a></li>
                        <li className="region"><a href="#/">Poland</a></li>
                        <li className="region"><a href="#/">Singapore</a></li>
                        <li className="region"><a href="#/">Spain</a></li>
                        <li className="region"><a href="#/">Turkey</a></li>
                        <li className="region"><a href="#/">United Arab Emirates</a></li>
                        <li className="region"><a href="#/">United Kingdom</a></li>
                        <li className="region"><a href="#/">United States</a></li>
                    </ul>
                </div>
            </div>
            <div className='lower-footer'>
                <div className='info-links'>
                    <a href='#/'>Conditions of Use & Sale</a>
                    <a href='#/'>Privacy Notice</a>
                    <a href='#/'>Interest-Based Ads</a>
                </div>
                <div className='copyright-text'>
                    <p>&copy; 1996-2023, Amazon.com, Inc. or its affiliates</p>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;