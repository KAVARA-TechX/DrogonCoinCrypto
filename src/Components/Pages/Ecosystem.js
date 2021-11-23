import React from "react";
import HeaderNav from "../Nav/HeaderNav";
import Footer from "./Footer";
import home from '../../63542-eco-loader.json';
import info1 from '../../38435-register.json';
import info2 from '../../63787-secure-login.json';
import LottieAnimation from "../../Lottie";
import ContactUs from "../ContactUs";
const Ecosystem = () => {
    return (
        <div style={{ backgroundColor: '#FBFBFB' }}>
            <HeaderNav />
            <h4 className="text-center mt-1">Eco-friendly Drogon</h4>
            {/* <LottieAnimation lotti={home}  height="300px" width="100%"/> */}
            <div className="container " >
                <div className="row ">
                    <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                        Drogon is a BEP-20 Token which has its smart contract deployed on Binance Smart Chain. Binance Smart Chain offers low transaction rates and has a huge market growth worldwide
                        What is Drogon ?
                        Drogon is a Japenese Word , which refers to a dragon breed. Drogon is also a  refernece to a fictional charater from the world-famous web series "Game of Thrones", It was the name of one of the three dragons owned by the Targareyn Princess, Danerys Targareyn.
                        Drogon would soon be available with coinpayments that would allow everyone across the world on several top ecommerce platforms the ability to accept Drogon token as payment if they opt to .
                    </div>
                    <div className="col-md-6">
                        <LottieAnimation lotti={info2}/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <LottieAnimation lotti={info1} />
                    </div>
                    <div className="col-md-6" >
                        Fun and Friendly Drogon.
                        Drogon sets itself apart from other digital currencies with an amazing, vibrant community made up of friendly folks just like you. It looks forward to offer great support to  the memers.  It focus towards establishment of web-interaction portal were anyone could design their own memes. Once the memes are created one could easily convert money as a cryptocurrency and provide it as a reward to the designer.
                        Drogon Token  application that will soon  be available on iOS and Android. The application will have all the features you desire to have with a token, listed as :
                        <ul>
                            <li>Ability to load the token balance in your wallet</li>
                            <li>Ability to Buy Cryptocurrencies</li>
                            <li>Ability to send Cryptocurrencies</li>
                            <li>Ability to exchange crypto currencies .</li>
                        </ul>
                    </div>

                </div>
            </div>
            <ContactUs />
            <Footer />
        </div>
    );
}

export default Ecosystem;