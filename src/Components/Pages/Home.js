import React from 'react';
import HeaderNav from '../Nav/HeaderNav';
import InfoGrid from '../InfoGrid';
import SocialMediaContainer from '../SocialMediaContainer';
import Rewards from '../Rewards';
import Donations from '../Donations';
import ContactUs from '../ContactUs';
import Footer from '../Pages/Footer';
import rupee from '../../cash.png';
import rocket from '../../rocket.png';
import wallet from '../../Wallet.png';
const Home = () => {
    return (
        <div>
            <HeaderNav />

            {/* INFO GRID */}
            <InfoGrid />

            {/* Social Media Icons */}
            <SocialMediaContainer />

            {/* Rewards */}
            <Rewards />

            {/* Donations */}
            {/* <Donations /> */}
            <div className="mt-5 mb-5 pt-5 pb-5 bgImage">
                <div className="text-center">
                    <h4 >Why Drogon?</h4>
                    <h2>JOIN THE HEAT</h2>
                    <p>Drogon is the place where anyone can share memes and earn crypto!!!
                        <br />It will forever change the way of investment we invest in crypto
                    </p>
                </div>
                <div className="container-fluid mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                                <div className="card circular circularImgAnimation">
                                    <div className="card-body" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                                        <img src={rupee} width="90px" height="90px" alt="rupee" />
                                    </div>
                                    <p className="text-center">SHARE MEME EARN REAL CRYPTO</p>
                                </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                                <div className="card circular circularImgAnimation1">
                                    <div className="card-body" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                                        <img src={wallet}  width="90px" height="90px" alt="rupee" />
                                    </div>
                                    <p className="text-center">HOLDING REWARDS</p>
                                </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <div className="card circular circularImgAnimation">
                                <div className="card-body" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                                    <img src={rocket} width="90px" height="90px" alt="rupee" />
                                </div>
                                <p className="text-center">TO THE MOON</p>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>

            {/* Contact Us */}
            <ContactUs />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;