import { Pagination } from "antd";
import React from "react";
import UserNav from "../Nav/UserNav";

const Referral = () => {
    return (
        <>
            <UserNav />
            <div className="container">
                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-md-8">
                        <div className="card clas">
                            <div className="card-header" style={{ border: 'none',paddingLeft:'40px',paddingTop:'10px' }}>
                                <h5>Referral</h5>
                            </div>
                            <div className="card-body" style={{padding:'40px'}}>
                                <h5>Invite your friends and family and receive free tokens</h5>
                                <p>
                                    Each member have a unique Ekart Inu referral link to share with friends and family and receive a bonus - 5.0% of the
                                    value, on your direct referral on purchases tokens. If any one sign-up with this link, will be added to your referral
                                    program. The referral link may be used during a token sales running.
                                </p>
                                <br/>
                                <h5>DROGON Commission: <span> 0</span></h5>
                                <br/>
                                <p>
                                    https://www.ekartinu.com/signup?ref=eKart250945
                                    <span>Referral URL <span><i class="far fa-copy"></i></span></span>
                                </p>
                                <br/>
                                <h5>Referral History</h5>
                                <table>
                                    <tr>
                                        <th>DATE</th>
                                        <th>USER NAME</th>
                                        <th>ORDER AMOUNT</th>
                                        <th>REFERRAL COMMISSION</th>
                                    </tr>
                                </table>
                                <br/>
                            </div>
                            <div className="card-footer" style={{ border: 'none' }}>
                                <Pagination defaultCurrent={1} total={10} />
                                <br/>
                                <p>SHARE WITH : 
                                <i class="fab fa-reddit fa-2x"></i>
                                <i class="fab fa-twitter fa-2x"></i>
                                <i class="fab fa-bitcoin fa-2x"></i>
                                <i class="fab fa-telegram-plane fa-2x"></i>
                            </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card clas">
                            <div className="card-header" style={{ border: 'none' }}>
                                <p>DROGON</p>
                            </div>
                            <div className="card-body" >
                                <h5>Token Balance</h5>
                                <p>456789009 DROGON</p>
                                <p>Your contribution:</p>
                                <li>0.00081054 BTC</li>
                                <li>0.00081054 ETH</li>
                                <li>50.42 USD</li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-md-8">
                    </div>
                    <div className="col-md-4 mt" style={{ marginBottom: '20px'}}>
                        <div className="card clas">
                            <div className="card-header" style={{ border: 'none' }}>
                                <p>Pre-Sale Token</p>
                            </div>
                            <div className="card-body" style={{ padding: '20px' }}>
                                <p>DROGON TOKEN PRICE</p>
                                <p>1 MATIC = 4567890877 DROGON</p>
                                <br />
                                <p>EXCHANGE RATE</p>
                                <p>1 ETH = 4098765467 DROGON</p>
                                <br />
                                <p>CURRENT INVOICE BONUS</p>
                                100%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Referral;