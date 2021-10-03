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
                        <p>Drogon , the coin” has placed its bigfoot and is ready to set things on
fire in the Crypto world. He has finally decided to join the game and to make sure its
owners reside on the top of the throne. Drogon is a BEP-20 Token which has its
smart contract deployed on Binance Smart Chain. Binance Smart Chain offers low
transaction rates and has a huge market growth worldwide; all the features of the
smart chain are thus inherited by Dragon.Dragon will be soon also serving as a
source of your E-commerce Transactions on various platforms, Drogon, realises it
takes a lot of efforts to put smile on one’s face thus its focused to promote meme
culture by providing rewards to the one who create awesome memes.

                        </p>
                    </div>
                    <div className="mt-5">
                        <button className="butn p-1">Drogon Coin</button>
                        <button className="butn p-1">More information</button>
                    </div>
                </div>
                <div className="col-md-5 mt-top">
                    <img src={infoLogo} className="w-100 info-img" alt=" Drogon info" />
                </div>
            </div>

        </div>
    </div>

export default InfoGrid;