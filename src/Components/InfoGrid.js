import React from 'react';
import infoLogo from '../info-logo1.png';

const InfoGrid = () =>
    <div className="mt-1 info">
        <div className="container-fluid">
            <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-6 pt-5">
                <h1>The Birth of Drogon!</h1>
                <div style={{ color: "#fff" }}>
                    <h1>World's Best <br />Community Coin</h1>
                    <p>Drogon Coin has learned a few tricks and lessions from his meme father Doge.A new crypto birthed by fans
                        of the Doge Coin online community.
                        Drogon seeks to impress his father by showing his new improved transaction speeds &amp; adorableness.He is
                        Hyper-deflationary with static reflection that rewards holders, so more baby doge coins are being automatically
                        added to your wallet each transaction. Simply Love,pet and hold as 5% from each transaction is automatically
                        redistributed to Drogon holders.
                    </p>
                </div>
            </div>
            <div className="col-md-5 mt-top">
                <img src={infoLogo} className="w-100 info-img" alt=" Drogon info" />
            </div>
            </div>
            <div className="row">
            <div className="col-md-1"></div>

                <div className="col-md-5 mtb">
                <div>
                    <button className="butn p-1">Drogon Coin</button>
                    <button className="butn p-1">More information</button>
                </div>
                </div>
            </div>
        </div>
    </div>

export default InfoGrid;