import React from 'react';
import business from '../business-insider.png';
import yahoo from '../yahoo.png';
import market from '../marketWatch.png';
const Rewards = () =>
  <div className="container-fluid calendarIcon mt-1 pb-5" style={{ backgroundColor: '#FBFBFB' }}>
    <div className="container">
    <div className="row" style={{ paddingTop: '20%' }}>
      <div className="col-md-6">
        <h1 style={{ color: "#06FFC4" }}>Drogon</h1>
        <h1>Rewards in your Wallet</h1>
        <br />
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
      <div className="col-md-6">
        <div className="row">
          <div className="col-md-6">
            <div className="card" style={{ boxShadow: "4px 7px 4px 4px grey", borderRadius: '15px',padding: '15px' }}>
              <p className="text-center">
              We have burned 30%+ of the supply. That means out of the 5% of the
redistribution 30% will be distributed to the dead wallet. Coins are burned with every
transaction.
              </p>
            </div>
          </div>
          <div className="col-md-6" style={{ marginTop: '15%' }}>
            <div className="card" style={{ boxShadow: "4px 7px 4px 4px grey", borderRadius: '15px',padding: '15px'  }}>
              <p className="text-center">
              In Future , we ensure that Majority of LP tokens locked &amp; some burned.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <h4 className="text-center mt-top" style={{ color: '#707070' }}>As seen In</h4>
        <div className="row">
          <div className="items-center col-md-4">
            <img src={business} alt="business-insider" />
          </div>
          <div className="items-center col-md-4">
            <img src={yahoo} alt="business-insider" />
          </div>
          <div className="items-center col-md-4">
            <img src={market} alt="business-insider" />
          </div>
        </div>
        <br />

      </div>
      <div className="col-md-6">
        <div className="row">
          <div className="col-md-6">
            <div className="card" style={{ boxShadow: "4px 7px 4px 4px grey", borderRadius: '15px', padding: '15px'  }}>
              <p className="text-center">
              If a transaction fails in any way between , the transaction would be refundable
              </p>
            </div>
          </div>
          <div className="col-md-6" style={{ marginTop: '15%' }}>
            <div className="card" style={{ boxShadow: "4px 7px 4px 4px grey", borderRadius: '15px', padding: '15px'  }}>
              <p className="text-center">
              Safety and security of tokens is treated as first priority , ultimate measures are
adopted to make the buy process fast, executable under minimum transaction fee

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>

export default Rewards;