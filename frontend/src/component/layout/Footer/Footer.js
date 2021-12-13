import React from 'react'
import playstore from '../../../images/playstore.png'
import appstore from '../../../images/Appstore.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="leftFooter">
                <h4>Download Our App</h4>
                <p>Download App for Android and IOS mobile phone</p>
                <img src={playstore} alt="playstore" />
                <img src={appstore} alt="appstore" />
            </div>
            <div className="midFooter">
                <h1>ECOMMERCE.</h1>
                <p>High Quality is our first priority</p>
                <p>Copyrights 2021 &copy; MeAbhiSingh</p>
            </div>
            <div className="rightFooter">
                <h4>Follow Us</h4>
                <a href="#link">Instagram</a>
                <a href="#link">Youtube</a>
                <a href="#link">Facebook</a>
            </div>
        </footer>
    )
}

export default Footer
