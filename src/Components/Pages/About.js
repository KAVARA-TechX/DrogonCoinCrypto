import React from "react";
import InfoGrid from "../InfoGrid";
import HeaderNav from "../Nav/HeaderNav";
import Footer from "./Footer";

const About = () => {
    return (
        <div>
            <HeaderNav />
            <div className="mt-1 info">

                <div className="container">
                    <h1 className="text-center">What is Drogon Coin</h1>
                    <h4 style={{ color: 'white',paddingBottom:'20px' }} >Drogon coin is an open source peer-to-peer digital currency, favored by traders worldwide.</h4>
                    <iframe title="What is crypto" style={{ width: '100%', height: '450px' }}
                        src="https://www.youtube.com/embed/1YyAzVmP9xQ">
                    </iframe>
                    <div className="row" style={{ paddingBottom: '10px' }}>
                        <div className="col-md-6 mt-2">
                            <h4 style={{ fontWeight: 'bold', textAlign: 'center' }}>
                                THE FUN AND FRIENDLY INTERNET CURRENCY.
                            </h4>
                            <p style={{ textAlign: 'center',color:'#fff' }}>
                                Drogon sets itself apart from other digital currencies with an amazing, vibrant community made up of friendly folks just like you.
                            </p>
                        </div>
                        <div className="col-md-6 mt-2">
                            <h4 style={{ fontWeight: 'bold', textAlign: 'center' }}>
                                WHAT'S WITH Drogon Coin AND THE DROGON?
                            </h4>
                            <p style={{ textAlign: 'center',color:'#fff' }}>
                                "DROGON" is our fun, friendly mascot! The Drogon is a Japanese symbol for power that
                                was popularized as an online meme and represents Drogon coin.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <InfoGrid />
            <Footer />
        </div>
    )
}

export default About;